import { openai } from '@ai-sdk/openai';
import { embedMany } from 'ai';
import { createWorkflow, createStep } from '@mastra/core/workflows';
import { MDocument } from '@mastra/rag';
import { z } from 'zod';

// https://raw.githubusercontent.com/mlschmitt/classic-books-markdown/refs/heads/main/Aesop/Aesop's%20Fables.md

const fetchRawMarkdownStep = createStep({
    id: 'fetch-raw-markdown',
    description: 'Fetch the raw markdown content of a file',
    inputSchema: z.object({
        url: z.string(),
    }),
    outputSchema: z.object({ text: z.string() }),
    execute: async ({ inputData }) => {
        console.log('Fetching raw markdown from', inputData.url);
        const response = await fetch(inputData.url);
        return { text: await response.text() }
    }
})

const chunkMarkdownStep = createStep({
    id: 'chunk-markdown',
    description: 'Chunk the markdown content into smaller chunks',
    inputSchema: z.object({ text: z.string() }),
    outputSchema: z.object({ chunks: z.array(z.string()) }),
    execute: async ({ inputData }) => {
        const markdownDoc = new MDocument({
            docs: [{ text: inputData.text }],
            type: "markdown",
        });

        const chunks = await markdownDoc.chunk({
            strategy: "markdown",
            stripHeaders: false,
            headers: [
                ["#", "Header 1"],
                ["##", "Header 2"],
                ["###", "Header 3"],
            ],
        });

        return { chunks: chunks.map(chunk => chunk.text) }
    }
})

const embedUpsertMarkdownStep = createStep({
    id: 'embed-upsert-markdown',
    description: 'Chunk the markdown content into smaller chunks',
    inputSchema: z.object({ chunks: z.array(z.string()) }),
    outputSchema: z.object({ success: z.boolean() }),
    execute: async ({ inputData, mastra }) => {

        const { embeddings: batchEmbeddings } = await embedMany({
            model: openai.embedding("text-embedding-3-small"),
            values: inputData.chunks,
        });


        // Get PgVector instance
        const vectorStore = mastra.getVector("libsql");

        // Delete existing index (if exists)
        await vectorStore.deleteIndex({ indexName: "stories" });

        // Create index
        await vectorStore.createIndex({
            indexName: "stories",
            dimension: 1536,
        });

        // Upsert vectors
        await vectorStore.upsert({
            indexName: "stories",
            vectors: batchEmbeddings,
            metadata: inputData.chunks.map((chunk) => {
                return {
                    text: chunk,
                }
            }),
        });

        return { success: true }
    }
})


export const storyEmbedder = createWorkflow({
    id: 'story-embedder',
    inputSchema: z.object({
        url: z.string(),
    }),
    outputSchema: z.object({
        text: z.string(),
    }),
    steps: [fetchRawMarkdownStep, chunkMarkdownStep, embedUpsertMarkdownStep],
})
    .then(fetchRawMarkdownStep)
    .then(chunkMarkdownStep)
    .then(embedUpsertMarkdownStep)
    .commit()

