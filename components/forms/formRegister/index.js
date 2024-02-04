import React, {useState} from 'react';
import { View,TouchableHighlight , TextInput, Text, Image, Pressable } from 'react-native';
import { registerStyle } from './styles';
import RegisterImage from '../../../assets/7922058.jpg'
import { useRouter } from 'expo-router';
import Checkbox from 'expo-checkbox';

export default FormRegister = () => {

    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    const router = useRouter();

    const handleReturnButton = () => {
        router.navigate('/')
    }

    return (
            <View style={registerStyle.container}>
            <Image source={RegisterImage} style={registerStyle.image}></Image>

            <Text style={{fontSize: 28, color: 'black', fontWeight: 'bold'}}>Cadastro</Text>

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
            <View style={registerStyle.checkboxView}>
                <Checkbox
                    style={registerStyle.checkbox}
                    value={toggleCheckBox}
                    onValueChange={setToggleCheckBox}
                    color={toggleCheckBox ? '#4630EB' : undefined}
                />
                <Text>Aceito os termos e condições</Text>  
            </View>
            <TouchableHighlight 
            onPress = {() => console.log("teste")}
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