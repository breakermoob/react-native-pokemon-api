import { capitalize, map } from 'lodash';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getColorByPokemonType } from '../../utils/colors';

const PokemonType = (props) => {

    const { types } = props;

    return (
        <View style={styles.content}>
            {map(types, (item, index) => (
                <View key={index} style={{ ...styles.pill, backgroundColor: getColorByPokemonType(item.type.name) }}>
                    <Text>{capitalize(item.type.name)}</Text>
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        marginTop: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pill: {
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 20,
        marginHorizontal: 10,
    }
});

export default PokemonType