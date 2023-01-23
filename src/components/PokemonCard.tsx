import { useNavigation } from '@react-navigation/native';
import { capitalize } from 'lodash';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { getColorByPokemonType } from '../utils/colors';

const PokemonCard = ({ pokemon: { name, image, order, type, id } }) => {

    const navigation = useNavigation();

    const pokemonColor = getColorByPokemonType(type);
    const bgStyle = { backgroundColor: pokemonColor, ...styles.bgStyles };

    const goToPokemon = () => {
        navigation.navigate('Pokemon' as never, { id } as never);
    }

    return (
        <View style={styles.container} >
            <Pressable onPress={goToPokemon}>
                <View style={styles.card}>
                    <View style={styles.spacing}>
                        <View style={bgStyle}>
                            <Text style={styles.number}>#{`${order}`.padStart(3, '0')}</Text>
                            <Text style={styles.name}>{capitalize(name)}</Text>
                            <Image source={{ uri: image }} style={styles.image} />
                        </View>
                    </View>
                </View>
            </Pressable>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    card: {
        flex: 1,
        height: 130
    },
    spacing: {
        flex: 1,
        padding: 5
    },
    bgStyles: {
        flex: 1,
        padding: 10,
        borderRadius: 15,
    },
    image: {
        position: "absolute",
        bottom: 2,
        right: 2,
        width: 90,
        height: 90
    },
    name: {
        color: "#fff",
        paddingTop: 10,
        fontSize: 15,
        fontWeight: "bold",
    },
    number: {
        position: "absolute",
        top: 10,
        right: 10,
        fontSize: 11,
        color: "#fff"
    }
});

export default PokemonCard