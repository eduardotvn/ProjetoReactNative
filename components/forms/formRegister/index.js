import React from 'react';
import { View, TextInput, Text, Image } from 'react-native';
import { registerStyle } from './styles';
import { TouchableHighlight } from 'react-native';
import RegisterImage from '../../../assets/7922058.jpg'
import { ScrollView } from 'react-native';

export default FormRegister = () => {

    return (
        <ScrollView>
            <View style={registerStyle.container}>
            <Image source={RegisterImage} style={registerStyle.image}></Image>

            <TextInput
                style={registerStyle.input}
                placeholder="Usuário"
            />

            <TextInput
                style={registerStyle.input}
                placeholder="Senha"
                secureTextEntry
            />

            <TextInput
                style={registerStyle.input}
                placeholder="Confirmar senha"
                secureTextEntry
            />

            <TextInput
                style={registerStyle.input}
                placeholder="Email"
            />

            <TouchableHighlight 
            onPress = {() => console.log("teste")}
            style={registerStyle.button}
            >
                <Text style={registerStyle.buttonText}>Registrar</Text>
            </TouchableHighlight>
            </View>
        </ScrollView>
    )
}