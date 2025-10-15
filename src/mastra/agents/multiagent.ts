import { openai } from "@ai-sdk/openai";
import { ghibliFanatic } from "./ghibli";
import { gitBuddy } from "./git";
import { hackerNewsResearcher } from "./hacker-news";
import { storyBase } from "./storybase";
import { activityPlanner } from "../workflows/activity-planner";
import { Memory } from "@mastra/memory";
import { LibSQLStore } from "@mastra/libsql";
import { Agent } from "@mastra/core/agent";

export const agentManager = new Agent({
    id: "agentManager",
    instructions: `
    You are a network of helpful agents that can answer questions and help with tasks.
    `,
    name: "agentManager",
    model: openai('gpt-4o-mini'),
    agents: {
        gitBuddy,
        hackerNewsResearcher,
        ghibliFanatic,
        storyBase
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