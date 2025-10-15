import { Agent } from "@mastra/core/agent";
import { weatherTool } from "../tools/weather";

export const weatherAgent = new Agent({
    name: 'Weather Agent',
    description: 'Weather Agent, use for querying weather',
    instructions: `
        You are my Weather assistant. I will ask you questions you must retrieve from the Weather knowledge base.
      `,
    model: 'openai/gpt-4o',
    tools: { weatherTool },
});