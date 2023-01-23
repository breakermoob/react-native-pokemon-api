import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Favorite } from "../screens/Favorite";
import { PokemonDetails } from "../screens/PokemonDetails";

export default function FavoriteNavigation() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="Favorite" component={Favorite} options={{
                title: 'Mis favoritos',
            }} />
            <Stack.Screen name="Pokemon" component={PokemonDetails} options={{
                title: '',
                headerTransparent: true,
            }} />
        </Stack.Navigator>
    );
}