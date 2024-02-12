import React from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import { footerStyle } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse'
import { faGear } from '@fortawesome/free-solid-svg-icons/faGear'
import { useRouter } from 'expo-router';

export default NavBar = () => {

    const router = useRouter();

    const goToHome = () => router.navigate('/home/');

    return(
        <View style={footerStyle.container}>

            <TouchableHighlight style={footerStyle.button} onPress={goToHome}>
                <View style={footerStyle.buttonView}>
                    <FontAwesomeIcon icon={faHouse} style={footerStyle.buttonIcon}/>
                    <Text style={footerStyle.buttonText}>Home</Text>
                </View>
            </TouchableHighlight>

            <TouchableHighlight style={footerStyle.button}>
                <View style={footerStyle.buttonView}>
                    <FontAwesomeIcon icon={faHouse} style={footerStyle.buttonIcon}/>
                    <Text style={footerStyle.buttonText}>Home</Text>
                </View>
            </TouchableHighlight>

            <TouchableHighlight style={footerStyle.button}>
                <View style={footerStyle.buttonView}>
                    <FontAwesomeIcon icon={faGear} style={footerStyle.buttonIcon}/>
                    <Text style={footerStyle.buttonText}>Config</Text>
                </View>
            </TouchableHighlight>
            
        </View>
)}