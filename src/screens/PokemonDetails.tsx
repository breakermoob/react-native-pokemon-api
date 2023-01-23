import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5";
import { getPokemonDetailsById } from '../api/pokemon';
import PokemonFavorite from '../components/Pokemon/PokemonFavorite';
import PokemonHeader from '../components/Pokemon/PokemonHeader';
import PokemonStats from '../components/Pokemon/PokemonStats';
import PokemonType from '../components/Pokemon/PokemonType';
import useAuth from '../hooks/useAuth';
import { Pokemon } from '../models/PokemonModels';



export const PokemonDetails = (props) => {

    const { route: { params }, navigation } = props;

    const [pokemon, setPokemon] = useState<Pokemon | null>(null);

    const { auth } = useAuth();

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => auth && <PokemonFavorite id={pokemon?.id} />,
            headerLeft: () => <Icon name='arrow-left' color="#fff" size={20} style={{ marginLeft: 20 }} onPress={() => { navigation.goBack() }} />,
        })
    }, [navigation, params, auth, pokemon])

    useEffect(() => {
        (async () => {
            try {
                const response = await getPokemonDetailsById(params.id);
                setPokemon(response);
            } catch (error) {
                navigation.goBack();
            }
        })()
    }, [])

    if (!pokemon) return null;

    return (
        <ScrollView>
            <PokemonHeader name={pokemon.name} order={pokemon.order} image={pokemon.sprites.other['official-artwork'].front_default} type={pokemon.types[0].type.name} />
            <PokemonType types={pokemon.types} />
            <PokemonStats stats={pokemon.stats} />
        </ScrollView>
    )

}