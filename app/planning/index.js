import { View, ScrollView, TouchableHighlight, Text} from 'react-native';
import React from 'react';
import NavBar from '../../components/navbar';
import { planningStyle } from './styles';
import PlanOptions from '../../components/planningOptions';

export default function Planning(){
    return(<>
        <View style={planningStyle.container}>
            <View style={planningStyle.header}>
                <Text style={planningStyle.text}> Meus Planos </Text>
            </View>
            <ScrollView>
                <PlanOptions/>
            </ScrollView>
        </View>
        <NavBar/>
    </>)
} 