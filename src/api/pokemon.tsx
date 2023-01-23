import { POKEMON_API_URL } from "../constants/constants";
import { Pokemon } from "../models/PokemonModels";

const genericFetch = async (url: string) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

export async function getPokemonList(nextUrl?: null | string) {
    try {
        const url = `${POKEMON_API_URL}/pokemon?limit=20&offset=0`;
        return genericFetch(nextUrl || url);
    } catch (error) {
        console.error(error);
    }
}

export async function getPokemonDetailsByUrl(url: string): Promise<Pokemon> {
    try {
        return genericFetch(url);
    } catch (error) {
        return {} as Pokemon;
    }
}

export async function getPokemonDetailsById(id: number) {
    try {
        const url = `${POKEMON_API_URL}/pokemon/${id}`;
        return genericFetch(url);
    } catch (error) {
        return {} as Pokemon;
    }
}