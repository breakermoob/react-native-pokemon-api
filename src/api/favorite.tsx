import AsyncStorage from "@react-native-async-storage/async-storage";
import { includes, pull } from "lodash";
import { FAVORITE_STORAGE } from "../constants/constants";


export const getFavoritePokemons = async () => {
    try {
        const response = await AsyncStorage.getItem(FAVORITE_STORAGE);
        return response ? JSON.parse(response) : [];
    } catch (error) {
        console.error(error);
    }
}

export const addPokemonFavorite = async (id: number) => {
    try {
        const favorites: number[] = await getFavoritePokemons();
        favorites.push(id);
        await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites));
    } catch (error) {
        console.error(error);
    }
}

export const isFavoritePokemon = async (id: number) => {
    try {

        const favorites: number[] = await getFavoritePokemons();
        return includes(favorites, id);

    } catch (error) {
        console.error(error);
    }
}

export const removePokemonFavorite = async (id: number) => {
    try {
        const favorites: number[] = await getFavoritePokemons();
        const newFavorites = pull(favorites, id);
        await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(newFavorites));
    } catch (error) {
        console.error(error);
    }
}