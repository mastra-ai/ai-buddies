import { Agent } from "@mastra/core/agent";
import { Memory } from "@mastra/memory";
import { mcpToolsets } from "../tools/mcp";


const memory = new Memory();

export const hackerNewsResearcher = new Agent({
  id: 'hackerNewsResearcher',
  name: 'Hacker News Buddy',
  description: 'Hacker News Agent, use for querying hacker news',
  instructions: `
        You are my Hacker News assistant. I will ask you questions you must retrieve from Hacker News.
      `,
  model: 'openai/gpt-5-mini',
  tools: mcpToolsets.hackernews,
  memory,
});