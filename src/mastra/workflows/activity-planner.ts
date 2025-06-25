import { createWorkflow, createStep } from '@mastra/core/workflows'
import { z } from 'zod'
import { weatherTool, forecastSchema } from '../tools/weather'

const planActivities = createStep({
    id: 'plan-activities',
    description: 'Suggests activities based on weather conditions',
    inputSchema: forecastSchema,
    outputSchema: z.object({
        activities: z.string(),
    }),
    execute: async ({ getInitData, inputData, mastra }) => {
        const forecast = inputData
        const { city } = getInitData<typeof activityPlanner>()

        const prompt = `
            Based on the following weather forecast for ${city}, suggest appropriate activities:
            ${JSON.stringify(forecast, null, 2)}
        `

        let activitiesText = ''

        const agent = mastra.getAgent('planningBuddy')

        const res = await agent.generate(prompt)

        activitiesText = (res.text).trim()

        return {
            activities: activitiesText,
        }
    },
})

const planIndoorActivities = createStep({
    id: 'plan-indoor-activities',
    description: 'Suggests indoor activities based on weather conditions',
    inputSchema: forecastSchema,
    outputSchema: z.object({
        activities: z.string(),
    }),
    execute: async ({ getInitData, inputData, mastra }) => {
        const { city } = getInitData()
        console.log('planIndoorActivities')
        const forecast = inputData

        const prompt = `In case it rains, plan indoor activities for ${city} on ${forecast.date}`

        const agent = mastra.getAgent('planningBuddy')

        const res = await agent.generate(prompt)

        let activitiesText = ''

        activitiesText = (res.text).trim()

        return {
            activities: activitiesText,
        }
    },
})

const activityPlanner = createWorkflow({
    id: 'activity-planner',
    inputSchema: z.object({
        city: z.string().describe('The city to get the weather for'),
    }),
    outputSchema: z.object({
        activities: z.string(),
    }),
})
    .then(createStep(weatherTool))
    .branch([
        [
            async ({ inputData }) => {
                return inputData?.precipitationChance > 50
            },
            planIndoorActivities,
        ],
        [
            async ({ inputData }) => {
                return inputData?.precipitationChance <= 50
            },
            planActivities,
        ],
    ])
    .map({
        activities: {
            step: [planActivities, planIndoorActivities],
            path: 'activities',
        },
    })

activityPlanner.commit()

export { activityPlanner }