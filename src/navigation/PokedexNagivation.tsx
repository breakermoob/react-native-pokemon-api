import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Pokedex } from "../screens/Pokedex";
import { PokemonDetails } from "../screens/PokemonDetails";

export default function PokedexNavigation() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="Pokedex" component={Pokedex} options={{
                title: '',
                headerTransparent: true,
            }} />
            <Stack.Screen name="Pokemon" component={PokemonDetails} options={{
                title: '',
                headerTransparent: true,
            }} />
        </Stack.Navigator>
    );
}