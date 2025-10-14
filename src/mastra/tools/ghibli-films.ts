import { createTool } from '@mastra/core/tools';
import { z } from 'zod';

async function getFilmByUrl(id: string) {
    const response = await fetch(id, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
    return response.json()
}

export const ghibliFilms = createTool({
    id: 'ghibli-films',
    description: 'Get information about Ghibli films',
    inputSchema: z.object({
        context: z.string(),
    }),
    execute: async () => {
        const response = await fetch(`https://ghibliapi.vercel.app/films`, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const films = await response.json()
        return films.map((film: any) => ({
            title: film.title,
            description: film.description,
            movie_banner: film.movie_banner,
            release_date: film.release_date,
        }))
    }
})

export const ghibliCharacters = createTool({
    id: 'ghibli-characters',
    description: 'Get information about Ghibli characters',
    inputSchema: z.object({
        context: z.string(),
    }),
    execute: async () => {
        const response = await fetch(`https://ghibliapi.vercel.app/people`, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const characters = await response.json()

        return await Promise.all(characters.map(async (character: any) => ({
            name: character.name,
            gender: character.gender,
            age: character.age,
            eye_color: character.eye_color,
            films: await Promise.all(character.films.map(async (filmUrl: string) => {
                const film = await getFilmByUrl(filmUrl)
                return {
                    title: film.title,
                }
            })),
        })));
    }
})