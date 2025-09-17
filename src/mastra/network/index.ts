import { openai } from "@ai-sdk/openai";
import { ghibliFilmsBuddyWithScorers, gitBuddy, hackerNewsBuddy, storyBuddy } from "../agents/buddies";
import { activityPlanner } from "../workflows/activity-planner";
import { Memory } from "@mastra/memory";
import { LibSQLStore } from "@mastra/libsql";
import { Agent } from "@mastra/core/agent";

export const vnextNetwork = new Agent({
    id: "vnextNetwork",
    instructions: `
    You are a network of helpful agents that can answer questions and help with tasks.
    `,
    name: "vnextNetwork",
    model: openai('gpt-4o-mini'),
    agents: {
        gitBuddy,
        hackerNewsBuddy,
        ghibliFilmsBuddyWithScorers,
        storyBuddy
    },
    workflows: {
        activityPlanner,
    },
    memory: new Memory({
        storage: new LibSQLStore({
            url: "file:../../mastra.db",
        }),
    }),
})