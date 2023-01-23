import { useFormik } from 'formik';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import * as Yup from 'yup';
import { user, userDetails } from '../../constants/userDB';
import useAuth from '../../hooks/useAuth';


const LoginForm = () => {

    const [error, setError] = useState<string>("");

    const { login } = useAuth();

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        onSubmit: (formData) => {
            setError("");
            if (formData.username === user.username && formData.password === user.password) {
                login(userDetails);
            } else {
                setError("Usuario o contraseña incorrectos");
            }
        }
    });

    return (
        <View>
            <Text style={styles.title}>Iniciar sesión</Text>
            <TextInput placeholder='Nombre de usuario' style={styles.input} autoCapitalize="none" value={formik.values.username} onChangeText={(text) => { formik.setFieldValue("username", text) }} />
            <TextInput placeholder='Contraseña' style={styles.input} autoCapitalize="none" secureTextEntry={true} value={formik.values.password} onChangeText={(text) => { formik.setFieldValue("password", text) }} />
            <View style={styles.credentials}>
                <Button title='Entrar' onPress={() => formik.handleSubmit()} />
            </View>
            <Text style={styles.error}>{formik.errors.username}</Text>
            <Text style={styles.error}>{formik.errors.password}</Text>
            <Text style={styles.error}>{error}</Text>

            <View style={styles.credentials}>
                <Text >username: leo</Text>
                <Text  >password: 123456</Text>
            </View>
        </View>
    )
}

const initialValues = () => {
    return {
        username: '',
        password: ''
    }
}

const validationSchema = () => {
    return Yup.object({
        username: Yup.string().required("El nombre de usuario es obligatorio"),
        password: Yup.string().required("La contraseña es obligatoria")
    });
}


const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 50,
        marginBottom: 15
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10
    },
    error: {
        textAlign: 'center',
        color: 'red',
        marginTop: 20
    },
    credentials: {
        paddingHorizontal: 20,
    }
});

export default LoginForm;