import { View, ScrollView, TouchableHighlight, Text} from 'react-native';
import React from 'react';
import NavBar from '../../components/navbar';
import { planningStyle } from './styles';
import PlanOptions from '../../components/planningOptions';

export default function Planning(){
    return(<>
        <View style={planningStyle.container}>
            <ScrollView>
                <PlanOptions/>
            </ScrollView>
        </View>
        <NavBar/>
    </>)
} 