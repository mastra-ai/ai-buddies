import { Agent } from "@mastra/core/agent";
import { ghibliFilms, ghibliCharacters } from "../tools/ghibli-films";
import { Memory } from "@mastra/memory";
import { createAnswerRelevancyScorer, createCompletenessScorer } from "@mastra/evals/scorers/prebuilt";

const memory = new Memory();

export const ghibliFanatic = new Agent({
    id: 'ghibliFanatic',
    name: 'Ghibli Fanatic',
    description: 'Ghibli Films Agent, use for querying Ghibli Films',
    instructions: `
        You are my Ghibli Films assistant. I will ask you questions you must retrieve from Ghibli Films.
      `,
    model: 'openai/gpt-5.2',
    tools: { ghibliFilms, ghibliCharacters },
    memory,
    scorers: {
        answerRelevancy: {
            scorer: createAnswerRelevancyScorer({ model: 'openai/gpt-5-mini' }),
        },
        codeScorer: {
            scorer: createCompletenessScorer()
        }
    }
});