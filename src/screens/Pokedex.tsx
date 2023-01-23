import React, { useEffect, useState } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { getPokemonDetailsByUrl, getPokemonList } from '../api/pokemon';
import PokemonList from '../components/PokemonList';
import { Pokemon } from '../models/PokemonModels';


export const Pokedex = () => {

    const [pokemons, setPokemon] = useState<Pokemon[]>([]);
    const [nextUrl, setNextUrl] = useState(null);

    useEffect(() => {
        //Funcion Anonima Autoejecutable
        (async () => {
            await loadPokemonList();
        })()
    }, []);

    const loadPokemonList = async () => {
        try {
            const { results, next } = await getPokemonList(nextUrl);
            setNextUrl(next);

            const pokemonsList: Pokemon[] = [];

            for await (const { url } of results) {
                const pokemon = await getPokemon(url);
                pokemonsList.push(pokemon);
            }

            setPokemon([...pokemons, ...pokemonsList]);

        } catch (error) {
            console.error(error);
        }
    }

    const getPokemon = async (url: string) => {
        const rawPokemon: any = await getPokemonDetailsByUrl(url);
        return {
            id: rawPokemon.id,
            name: rawPokemon.name,
            image: rawPokemon.sprites.other['official-artwork'].front_default,
            type: rawPokemon.types[0].type.name,
            url: rawPokemon.url,
            order: rawPokemon.order
        } as Pokemon;
    }


    return (
        <SafeAreaView>
            <PokemonList pokemons={pokemons} loadPokemonList={loadPokemonList} isNext={!!nextUrl} />
        </SafeAreaView>
    )

}