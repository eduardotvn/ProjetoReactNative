import {ScrollView, View} from 'react-native';
import React from 'react';
import FormRegister from '../../components/forms/formRegister';
import { registerPageStyle } from './styles';

export default function Register() {

    return(
    <View>
        <ScrollView contentContainerStyle={registerPageStyle.container}>

            <FormRegister/>

        </ScrollView>

    </View>
    
    )}