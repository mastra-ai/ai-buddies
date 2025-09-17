
import { Mastra } from '@mastra/core/mastra';
import { PinoLogger } from '@mastra/loggers';
import { LibSQLStore, LibSQLVector } from '@mastra/libsql';
import { ghibliFilmsBuddyWithScorers, gitBuddy, hackerNewsBuddy, planningBuddy, storyBuddy } from './agents/buddies';
import { storyEmbedder } from './workflows/story-embedder';
import { docsServer } from './mcp/docs-server';
import { activityPlanner } from './workflows/activity-planner';
import { vnextNetwork } from './network';

const vectorStore = new LibSQLVector({
  connectionUrl: "file:../../mastra.db",
});

const storage = new LibSQLStore({
  url: "file:../../mastra.db",
});

export const mastra = new Mastra({
  workflows: { storyEmbedder, activityPlanner },
  agents: { gitBuddy, hackerNewsBuddy, ghibliFilmsBuddyWithScorers, storyBuddy, planningBuddy, vnextNetwork },
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
