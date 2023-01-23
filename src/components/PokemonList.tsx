import React from 'react';
import { ActivityIndicator, FlatList, Platform, StyleSheet } from 'react-native';
import PokemonCard from './PokemonCard';

const PokemonList = (props) => {

    const { pokemons, isNext, loadPokemonList } = props;

    const loadMore = () => {
        loadPokemonList();
    }

    return (
        <FlatList data={pokemons}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (<PokemonCard pokemon={item} />)}
            keyExtractor={({ id }) => String(id)}
            contentContainerStyle={styles.flatlistContentContainer}
            onEndReached={isNext && loadMore}
            onEndReachedThreshold={0.1}
            ListFooterComponent={isNext && (<ActivityIndicator size={30} color="grey" />)}
            ListFooterComponentStyle={styles.spinner}
        />
    )
}

const styles = StyleSheet.create({
    flatlistContentContainer: {
        paddingHorizontal: 10,
        marginTop: Platform.OS === 'android' ? 30 : 0
    },
    spinner: {
        marginTop: 20,
        marginBottom: Platform.OS === 'android' ? 90 : 60
    }
});

export default PokemonList;