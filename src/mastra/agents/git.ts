import { openai } from "@ai-sdk/openai";
import { Agent } from "@mastra/core/agent";
import { mcpTools } from "../tools/mcp";
import { Memory } from "@mastra/memory";

const { github_search_repositories } = mcpTools;
const memory = new Memory();

export const gitBuddy = new Agent({
    name: 'Git Buddy',
    description: 'GitHub Agent, use for querying github repositories',
    instructions: `
        You are my GitHub assistant. I will give you GitHub repositories and you will help
        answer any questions I have about the repository.
      `,
    model: openai('gpt-4o-mini'),
    memory,
    tools: {
        github_search_repositories,
    }
});