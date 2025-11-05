import { Agent } from "@mastra/core/agent";
import { ghibliFilms, ghibliCharacters } from "../tools/ghibli-films";
import { Memory } from "@mastra/memory";
import { createAnswerRelevancyScorer } from "@mastra/evals/scorers/llm";
import { createCompletenessScorer } from "@mastra/evals/scorers/code";

const memory = new Memory();

export const ghibliFanatic = new Agent({
    name: 'Ghibli Fanatic',
    description: 'Ghibli Films Agent, use for querying Ghibli Films',
    instructions: `
        You are my Ghibli Films assistant. I will ask you questions you must retrieve from Ghibli Films.
      `,
    model: 'openai/gpt-4o',
    tools: { ghibliFilms, ghibliCharacters },
    memory,
    scorers: {
        answerRelevancy: {
            scorer: createAnswerRelevancyScorer({ model: 'openai/gpt-4o-mini' }),
        },
        codeScorer: {
            scorer: createCompletenessScorer()
        }
    }
});