import React from 'react';
import { View, TextInput, TouchableOpacity, Text, Image } from 'react-native';
import {loginStyle} from './styles';
import { useRouter } from 'expo-router';

const FormLogin = () => {

    const router = useRouter();

    const handleLogin = () => {
        router.push('/home/')
    }

    return(
        <View style={loginStyle.container}>

            <TextInput
            style={loginStyle.input}
            placeholder="Usuário"
            />

            <TextInput
            style={loginStyle.input}
            placeholder="Senha"
            secureTextEntry
            />

            <TouchableOpacity style={loginStyle.forgotPasswordButton}
            onPress={() => console.log("Change Password")}>
            <Text style={loginStyle.forgotPasswordText}>Esqueceu a senha?</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={loginStyle.loginButton}
            onPress={handleLogin}>
            <Text style={loginStyle.loginButtonText}>Login</Text>
            </TouchableOpacity>

        </View>
    )
}

export default FormLogin;