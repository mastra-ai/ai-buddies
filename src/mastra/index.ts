
import { Mastra } from '@mastra/core/mastra';
import { PinoLogger } from '@mastra/loggers';
import { LibSQLStore, LibSQLVector } from '@mastra/libsql';
import { ghibliFilmsBuddy, gitBuddy, hackerNewsBuddy, storyBuddy } from './agents/buddies';
import { storyEmbedder } from './workflows/story-embedder';
import { docsServer } from './mcp/docs-server';
import { activityPlanner } from './workflows/activity-planner';
import { vnextNetwork } from './network';

const vectorStore = new LibSQLVector({
  connectionUrl: "file:../../mastra.db",
});

const storage = new LibSQLStore({
  // stores telemetry, evals, ... into memory storage, if it needs to persist, change to file:../mastra.db
  url: "file:../../mastra.db",
});

export const mastra = new Mastra({
  vnext_networks: {
    vnextNetwork
  },
  workflows: { storyEmbedder, activityPlanner },
  agents: { gitBuddy, hackerNewsBuddy, ghibliFilmsBuddy, storyBuddy },
  storage,
  vectors: {
    libsql: vectorStore,
  },
  mcpServers: {
    docsServer,
  },
  logger: new PinoLogger({
    name: 'Mastra',
    level: 'info',
  }),
});
