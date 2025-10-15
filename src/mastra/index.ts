
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

const vectorStore = new LibSQLVector({
  connectionUrl: "file:../../mastra.db",
});

const storage = new LibSQLStore({
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
    weatherAgent
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
  telemetry: {
    enabled: false,
  },
  observability: {
    default: {
      enabled: true,
    },
  },
  logger: new PinoLogger({
    name: 'Mastra',
    level: 'info',
  }),
});