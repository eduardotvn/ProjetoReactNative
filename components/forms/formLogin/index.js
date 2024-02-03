import React from 'react';
import { View, TextInput, TouchableOpacity, Text, Image } from 'react-native';
import {loginStyle} from './styles';

const FormLogin = () => {

    return(
        <View style={loginStyle.container}>

            <TextInput
            style={loginStyle.input}
            placeholder="Username"
            />

            <TextInput
            style={loginStyle.input}
            placeholder="Password"
            secureTextEntry
            />

            <TouchableOpacity style={loginStyle.forgotPasswordButton}
            onPress={() => console.log("Change Password")}>
            <Text style={loginStyle.forgotPasswordText}>Esqueceu a senha?</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={loginStyle.loginButton}
            onPress={() => console.log("Login button pressed")}>
            <Text style={loginStyle.loginButtonText}>Login</Text>
            </TouchableOpacity>

        </View>
    )
}

export default FormLogin;