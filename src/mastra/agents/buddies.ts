import { openai } from '@ai-sdk/openai';
import { Agent } from '@mastra/core/agent';
import { Memory } from '@mastra/memory';
import { mcpTools, mcpToolsets } from '../tools/mcp';
import { ghibliCharacters, ghibliFilms } from '../tools/ghibli-films';
import { storySearch } from '../tools/story-search';
import { createAnswerRelevancyScorer } from '@mastra/evals/scorers/llm';
import { createCompletenessScorer } from '@mastra/evals/scorers/code';

const { github_search_repositories } = mcpTools;

const memory = new Memory();

export const gitBuddy = new Agent({
  name: 'Git Buddy',
  description: 'GitHub Agent, use for querying github repositories',
  instructions: `
      You are my GitHub assistant. I will give you GitHub repositories and you will help
      answer any questions I have about the repository.
    `,
  model: openai('gpt-4o-mini'),
  memory,
  tools: {
    github_search_repositories,
  }
});

export const hackerNewsBuddy = new Agent({
  name: 'Hacker News Buddy',
  description: 'Hacker News Agent, use for querying hacker news',
  instructions: `
      You are my Hacker News assistant. I will ask you questions you must retrieve from Hacker News.
    `,
  model: openai('gpt-4o-mini'),
  tools: mcpToolsets.hackernews,
  memory,
});

export const ghibliFilmsBuddyWithScorers = new Agent({
  name: 'Ghibli Films Buddy with Scorers',
  description: 'Ghibli Films Agent, use for querying Ghibli Films',
  instructions: `
      You are my Ghibli Films assistant. I will ask you questions you must retrieve from Ghibli Films.
    `,
  model: openai('gpt-4o-mini'),
  tools: { ghibliFilms, ghibliCharacters },
  memory,
  scorers: {
    answerRelevancy: {
      scorer: createAnswerRelevancyScorer({ model: openai('gpt-4o-mini') }),
    },
    codeScorer: {
      scorer: createCompletenessScorer()
    }
  }
});


export const storyBuddy = new Agent({
  name: 'Story Buddy',
  description: 'Story Agent, use for querying the Story knowledge base',
  instructions: `
      You are my Story assistant. I will ask you questions you must retrieve from the Story knowledge base.
    `,
  model: openai('gpt-4o-mini'),
  tools: { storySearch },
  memory,
});


export const planningBuddy = new Agent({
  name: 'Planning Buddy',
  description: 'Planning Agent, use for planning activities and travel',
  model: openai('gpt-4o-mini'),
  instructions: `
        You are a local activities and travel expert who excels at weather-based planning. Analyze the weather data and provide practical activity recommendations.

        📅 [Day, Month Date, Year]
        ═══════════════════════════

        🌡️ WEATHER SUMMARY
        • Conditions: [brief description]
        • Temperature: [X°C/Y°F to A°C/B°F]
        • Precipitation: [X% chance]

        🌅 MORNING ACTIVITIES
        Outdoor:
        • [Activity Name] - [Brief description including specific location/route]
          Best timing: [specific time range]
          Note: [relevant weather consideration]

        🌞 AFTERNOON ACTIVITIES
        Outdoor:
        • [Activity Name] - [Brief description including specific location/route]
          Best timing: [specific time range]
          Note: [relevant weather consideration]

        🏠 INDOOR ALTERNATIVES
        • [Activity Name] - [Brief description including specific venue]
          Ideal for: [weather condition that would trigger this alternative]

        ⚠️ SPECIAL CONSIDERATIONS
        • [Any relevant weather warnings, UV index, wind conditions, etc.]

        Guidelines:
        - Suggest 2-3 time-specific outdoor activities per day
        - Include 1-2 indoor backup options
        - For precipitation >50%, lead with indoor activities
        - All activities must be specific to the location
        - Include specific venues, trails, or locations
        - Consider activity intensity based on temperature
        - Keep descriptions concise but informative

        Maintain this exact formatting for consistency, using the emoji and section headers as shown.
      `,
})