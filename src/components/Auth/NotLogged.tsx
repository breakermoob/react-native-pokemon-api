import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const NotLogged = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.content}>
            <Text style={styles.text}>Para tus favoritos debes iniciar sesión</Text>
            <Button title='Ir al login' onPress={() => { navigation.navigate('Account' as never) }} />
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        marginVertical: 50,
        paddingHorizontal: 50,
    },
    text: {
        textAlign: 'center',
        marginBottom: 10
    }
})

export default NotLogged