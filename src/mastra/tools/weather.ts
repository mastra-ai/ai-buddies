import { createTool } from "@mastra/core/tools"
import { z } from "zod"

function getWeatherCondition(code: number): string {
    const conditions: Record<number, string> = {
        0: 'Clear sky',
        1: 'Mainly clear',
        2: 'Partly cloudy',
        3: 'Overcast',
        45: 'Foggy',
        48: 'Depositing rime fog',
        51: 'Light drizzle',
        53: 'Moderate drizzle',
        55: 'Dense drizzle',
        61: 'Slight rain',
        63: 'Moderate rain',
        65: 'Heavy rain',
        71: 'Slight snow fall',
        73: 'Moderate snow fall',
        75: 'Heavy snow fall',
        95: 'Thunderstorm',
    }
    return conditions[code] || 'Unknown'
}

export const forecastSchema = z.object({
    date: z.string(),
    maxTemp: z.number(),
    minTemp: z.number(),
    precipitationChance: z.number(),
    condition: z.string(),
})

async function geocode(city: string) {
    const geocodingUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`
    const geocodingResponse = await fetch(geocodingUrl)
    const geocodingData = (await geocodingResponse.json()) as {
        results: { latitude: number; longitude: number; name: string }[]
    }

    if (!geocodingData.results?.[0]) {
        throw new Error(`Location '${city}' not found`)
    }

    const { latitude, longitude, name } = geocodingData.results[0]

    return { latitude, longitude, name }
}

async function getForecast(latitude: number, longitude: number) {
    const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=precipitation,weathercode&timezone=auto,&hourly=precipitation_probability,temperature_2m`
    const response = await fetch(weatherUrl)
    const data = (await response.json()) as {
        current: {
            time: string
            precipitation: number
            weathercode: number
        }
        hourly: {
            precipitation_probability: number[]
            temperature_2m: number[]
        }
    }

    const forecast = {
        date: new Date().toISOString(),
        maxTemp: Math.max(...data.hourly.temperature_2m),
        minTemp: Math.min(...data.hourly.temperature_2m),
        condition: getWeatherCondition(data.current.weathercode),
        precipitationChance: data.hourly.precipitation_probability.reduce(
            (acc, curr) => Math.max(acc, curr),
            0
        ),
    }

    return forecast
}

export const weatherTool = createTool({
    id: "weather",
    description: "Get the weather forecast for a given location",
    inputSchema: z.object({
        city: z.string().describe('The city to get the weather for'),
    }),
    outputSchema: forecastSchema,
    execute: async ({ city }) => {
        const { latitude, longitude } = await geocode(city)
        return await getForecast(latitude, longitude)
    }
})
