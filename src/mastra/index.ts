
import { Mastra } from '@mastra/core/mastra';
import { PinoLogger } from '@mastra/loggers';
import { LibSQLStore, LibSQLVector } from '@mastra/libsql';
import { gitBuddy } from './agents/git';
import { ghibliFanatic } from './agents/ghibli';
import { hackerNewsResearcher } from './agents/hacker-news';
import { storyBase } from './agents/storybase';
import { planningBuddy } from './agents/planner';
import { storyEmbedder } from './workflows/story-embedder';
import { docsServer } from './mcp/docs-server';
import { activityPlanner } from './workflows/activity-planner';
import { agentManager } from './agents/multiagent';
import { weatherAgent } from './agents/weather';
import { websearchAgent } from './agents/websearch';

const vectorStore = new LibSQLVector({
  id: "libsql-vector",
  url: "file:../../mastra.db",
});

const storage = new LibSQLStore({
  id: "libsql-storage",
  url: "file:../../mastra.db",
});

export const mastra = new Mastra({
  workflows: { storyEmbedder, activityPlanner },
  agents: {
    gitBuddy,
    hackerNewsResearcher,
    ghibliFanatic,
    planningBuddy,
    storyBase,
    agentManager,
    weatherAgent,
    websearchAgent
  },
  storage,
  vectors: {
    libsql: vectorStore,
  },
  bundler: {
    externals: ['pkce-challenge'],
  },
  mcpServers: {
    docsServer,
  },

  logger: new PinoLogger({
    name: 'Mastra',
    level: 'info',
  }),
});