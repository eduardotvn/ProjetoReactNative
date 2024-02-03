import { StatusBar } from 'expo-status-bar';
import {View, Image, TouchableHighlight, Text } from 'react-native';
import React, { useState } from 'react';
import FormRegister from '../components/forms/formRegister';

export default function Register() {
    return(
    <View>
        <FormRegister/>
    </View>)
}