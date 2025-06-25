import { openai } from "@ai-sdk/openai";
import { NewAgentNetwork } from "@mastra/core/network/vNext";
import { ghibliFilmsBuddy, gitBuddy, hackerNewsBuddy, storyBuddy } from "../agents/buddies";
import { activityPlanner } from "../workflows/activity-planner";

export const vnextNetwork = new NewAgentNetwork({
    id: "vnextNetwork",
    instructions: `
    You are a network of helpful agents that can answer questions and help with tasks.
    `,
    name: "vnextNetwork",
    model: openai('gpt-4o-mini'),
    agents: {
        gitBuddy,
        hackerNewsBuddy,
        ghibliFilmsBuddy,
        storyBuddy,
    },
    workflows: {
        activityPlanner,
    }
})