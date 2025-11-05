import { Agent } from "@mastra/core/agent";
import { storySearch } from "../tools/story-search";
import { Memory } from "@mastra/memory";

const memory = new Memory();

export const storyBase = new Agent({
  name: 'Story Buddy',
  description: 'Story Agent, use for querying the Story knowledge base',
  instructions: `
        You are my Story assistant. I will ask you questions you must retrieve from the Story knowledge base.
      `,
  model: 'openai/gpt-4o-mini',
  tools: { storySearch },
  memory,
});
