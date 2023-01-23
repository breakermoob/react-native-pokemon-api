import React, { useEffect, useState } from 'react';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { addPokemonFavorite, isFavoritePokemon, removePokemonFavorite } from '../../api/favorite';

const PokemonFavorite = ({ id }) => {

    const [isFavorite, setIsFavorite] = useState<boolean | undefined>(undefined);
    const [reloadCheck, setReloadCheck] = useState<boolean>(false);
    const Icon = isFavorite ? FontAwesome : FontAwesome5;

    useEffect(() => {
        (async () => {
            try {
                const response = await isFavoritePokemon(id);
                setIsFavorite(response);
            } catch (error) {
                console.error(error);
            }
        })()
    }, [id, reloadCheck]);

    const addFavorites = async () => {
        try {
            await addPokemonFavorite(id);
            onReloadCheckFavorites();
        } catch (error) {
            console.error(error);
        }
    }

    const removeFavorites = async () => {
        try {
            await removePokemonFavorite(id);
            onReloadCheckFavorites();
        } catch (error) {
            console.error(error);
        }
    }

    const onReloadCheckFavorites = () => {
        setReloadCheck(!reloadCheck);
    }

    return (
        <Icon name='heart' color="#fff" size={20} onPress={isFavorite ? removeFavorites : addFavorites} style={{ marginRight: 20 }} />
    )
}

export default PokemonFavorite