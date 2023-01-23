import React, { useEffect, useState } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { getFavoritePokemons } from '../api/favorite';
import { getPokemonDetailsById } from '../api/pokemon';
import NotLogged from '../components/Auth/NotLogged';
import PokemonList from '../components/PokemonList';
import useAuth from '../hooks/useAuth';
import { Pokemon } from '../models/PokemonModels';


export const Favorite = () => {

    const [favoritePokemons, setFavoritePokemons] = useState<Pokemon[]>([]);
    const { auth } = useAuth();

    useEffect(() => {
        if (auth) {
            (async () => {
                const favoritePokemonsIds = await getFavoritePokemons();

                const pokemonsList: Pokemon[] = [];

                for await (const id of favoritePokemonsIds) {
                    const pokemon = await getPokemon(id);
                    pokemonsList.push(pokemon);
                }
                setFavoritePokemons(pokemonsList);
            })()
        }
    }, [auth, favoritePokemons]);


    const getPokemon = async (id: number) => {
        const rawPokemon: any = await getPokemonDetailsById(id);
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
            {auth ? <PokemonList pokemons={favoritePokemons} /> : <NotLogged />}
        </SafeAreaView>
    )

}