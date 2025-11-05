import { openai } from "@ai-sdk/openai";
import { Agent } from "@mastra/core/agent";

export const websearchAgent = new Agent({
    name: 'Web Search Agent',
    description: 'Websearch Agent, use for searching the web',
    instructions: `
        You are my Websearch assistant. I will ask you questions you must retrieve from the web.
      `,
    model: 'openai/gpt-4o',
    tools: {
        websearchTool: openai.tools.webSearch(),
    },
});