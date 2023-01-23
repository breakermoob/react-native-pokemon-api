import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Image } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5";
import { Account } from "../screens/Account";
import FavoriteNavigation from "./FavoriteNavigation";
import PokedexNavigation from "./PokedexNagivation";

export default function Navigation() {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator initialRouteName="Pokedex">
            <Tab.Screen name="FavoriteContainer" component={FavoriteNavigation} options={{
                headerShown: false,
                tabBarLabel: 'Mis favoritos',
                tabBarIcon: ({ color, size }) => <Icon name="heart" color={color} size={size} />
            }} />
            <Tab.Screen name="PokedexContainer" component={PokedexNavigation} options={{
                headerShown: false,
                tabBarLabel: '',
                tabBarIcon: () => renderPokeball()
            }} />
            <Tab.Screen name="Account" component={Account} options={{
                tabBarLabel: 'Mi cuenta',
                headerTitle: 'Mi cuenta',
                tabBarIcon: ({ color, size }) => <Icon name="user" color={color} size={size} />
            }} />

        </Tab.Navigator>
    );
}

const renderPokeball = () => (<Image source={require('../assets/pokeball.png')} style={{ width: 75, height: 75, top: -18 }} />)
