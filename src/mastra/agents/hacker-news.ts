import { openai } from "@ai-sdk/openai";
import { Agent } from "@mastra/core/agent";
import { mcpToolsets } from "../tools/mcp";
import { Memory } from "@mastra/memory";

const memory = new Memory();

export const hackerNewsResearcher = new Agent({
    name: 'Hacker News Buddy',
    description: 'Hacker News Agent, use for querying hacker news',
    instructions: `
        You are my Hacker News assistant. I will ask you questions you must retrieve from Hacker News.
      `,
    model: openai('gpt-4o-mini'),
    tools: mcpToolsets.hackernews,
    memory,
});