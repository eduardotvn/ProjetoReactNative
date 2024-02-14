import React, {useState} from 'react';
import { View,TouchableHighlight , TextInput, Text, Image, Pressable } from 'react-native';
import { registerStyle } from './styles';
import RegisterImage from '../../../assets/7922058.jpg'
import { useRouter } from 'expo-router';
import Checkbox from 'expo-checkbox';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default FormRegister = () => {

    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checkPassword, setCheckPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const router = useRouter();

    const handleReturnButton = () => {
        router.navigate('/')
    }

    const registerUser = async (email, password) =>
    {
        if(toggleCheckBox == false)
        {
            setErrorMessage("É necessário aceitar os termos e condições")
        }
        else if(password != checkPassword)
        {
            setErrorMessage("As senhas não coincidem")
        }
        else if(password == '')
        {
            setErrorMessage("Senha é obrigatório")
        }
        else {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, email, password).then(() => {
                router.navigate('/home')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorMessage)
              });
        }
    }

    return (
            <View style={registerStyle.container}>
            <Image source={RegisterImage} style={registerStyle.image}></Image>

            <Text style={{fontSize: 28, color: 'black', fontWeight: 'bold'}}>Cadastro</Text>

            <TextInput
                style={registerStyle.input}
                placeholder="Email"
                onChangeText={text => setEmail(text)} 
            />

            <TextInput
                style={registerStyle.input}
                placeholder="Senha"
                secureTextEntry
                onChangeText={text => setPassword(text)}
            />

            <TextInput
                style={registerStyle.input}
                placeholder="Confirmar senha"
                secureTextEntry
                onChangeText={text => setCheckPassword(text)}
            />

            <View style={registerStyle.checkboxView}>
                <Checkbox
                    style={registerStyle.checkbox}
                    value={toggleCheckBox}
                    onValueChange={setToggleCheckBox}
                    color={toggleCheckBox ? '#4630EB' : undefined}
                />
                <Text>Aceito os termos e condições</Text>  
            </View>

            {errorMessage ? (
                <Text style={{ color: 'red', marginTop: 10 }}>{errorMessage}</Text>
            ) : null}

            <TouchableHighlight 
            onPress = {() => registerUser(email, password)}
            style={registerStyle.button}
            >
                <Text style={registerStyle.buttonText}>Registrar</Text>
            </TouchableHighlight>

            <Pressable onPressOut={handleReturnButton} 
            style={registerStyle.returnPressable}>
                <Text>Voltar</Text>
            </Pressable>

            </View>
    )
}