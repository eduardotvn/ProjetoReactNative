import React, { useContext, useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image } from 'react-native';
import {loginStyle} from './styles';
import { useRouter } from 'expo-router';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from '../../authProvider';

const FormLogin = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {login} = useContext(AuthContext);


    const handleLogin = async (email, password) =>
    {
        if(password == '' || email == '')
        {
            setErrorMessage("Preencha ambos os campos")
        }
        else {
            const loginFail = login(email, password);
            if(loginFail)
            {
                setErrorMessage(loginFail.message)
            }
        }
    }

    return(
        <View style={loginStyle.container}>

            <TextInput
            style={loginStyle.input}
            placeholder="Email"
            onChangeText={text => setEmail(text)} 
            />

            <TextInput
            style={loginStyle.input}
            placeholder="Senha"
            secureTextEntry
            onChangeText={text => setPassword(text)}
            />

            <TouchableOpacity style={loginStyle.forgotPasswordButton}
            onPress={() => console.log("Change Password")}>
            <Text style={loginStyle.forgotPasswordText}>Esqueceu a senha?</Text>
            </TouchableOpacity>

            {errorMessage ? (
                <Text style={{ color: 'red', marginTop: 10 }}>{errorMessage}</Text>
            ) : null}

            <TouchableOpacity
            style={loginStyle.loginButton}
            onPress={() => handleLogin(email, password)}>
            <Text style={loginStyle.loginButtonText}>Login</Text>
            </TouchableOpacity>

        </View>
    )
}

export default FormLogin;