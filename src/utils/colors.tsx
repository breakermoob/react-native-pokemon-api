import { POKEMON_TYPE_COLORS } from "../constants/constants";

export const getColorByPokemonType = (type: string) => (POKEMON_TYPE_COLORS[type.toLocaleLowerCase()]);