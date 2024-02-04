import { StatusBar } from 'expo-status-bar';
import { View, Image, TouchableHighlight, Text } from 'react-native';
import { appStyle } from './styles.js';
import React, { useState } from 'react';
import FormLogin from '../components/forms/formLogin/index.js';
import frontImage from '../assets/4269960.jpg';
import { useRouter } from 'expo-router';

export default function App() {
  const router = useRouter();

  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleButtonPress = () => {
    setShowLoginForm(true);
  };

  const handleReturnButton = () => {
    setShowLoginForm(false);
  };

  const handleRegisterButton = () => {
    router.navigate('/register/')
  }

  return (
    <View style={appStyle.container}>

      <Image
        source={frontImage}
        style={appStyle.frontImage}
      />

      {showLoginForm ? <FormLogin /> :
        <View style={appStyle.buttonsFrame}>

          <TouchableHighlight
            style={appStyle.enterButton}
            onPress={handleButtonPress}
          >
            <Text style={appStyle.buttonFont}>Entrar</Text>
          </TouchableHighlight>
          <TouchableHighlight style={appStyle.createAccountButton}
            onPress={handleRegisterButton}
          >
            <Text style={appStyle.buttonFont}>Criar Conta</Text>
          </TouchableHighlight>

        </View>}

      {showLoginForm ?
        <TouchableHighlight
          onPress={handleReturnButton}
          style={appStyle.returnButton}
        >
          <Text>Voltar</Text>
        </TouchableHighlight> : <></>}

      <StatusBar style="auto" />
    </View>
  );
}

