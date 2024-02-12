import { StatusBar } from 'expo-status-bar';
import { View, Image, TouchableHighlight,ScrollView, Text } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { planOptionsStyle } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons/faCirclePlus'

export default function PlanOptions() {

const plans = [ {type: 'Reduzir Gastos', category: 'Comida', duration: 3, limit: 400},
                {type: 'Reduzir Gastos', category: 'Vestimentas', duration: 6, limit: 150},
                {type: 'Reduzir Gastos', category: 'Jogos', duration: 2, limit: 20},
                {type: 'Reduzir Gastos', category: 'Locomoção', duration: 5, limit: 120},
                {type: 'Reduzir Gastos', category: 'Comida', duration: 3, limit: 400},
                {type: 'Reduzir Gastos', category: 'Vestimentas', duration: 6, limit: 150},
                {type: 'Reduzir Gastos', category: 'Jogos', duration: 2, limit: 20},
                {type: 'Reduzir Gastos', category: 'Locomoção', duration: 5, limit: 120},]

    return (<>
        <ScrollView style={planOptionsStyle.container}>
            <View style={planOptionsStyle.planContainer}>
                {plans.map((item, key) => (
                    <View key={key} style={planOptionsStyle.planViewContainer}>
                        <Text style={planOptionsStyle.planViewContainerText}>
                            {item.type} : {item.category}
                        </Text>
                        <Text style={{color: 'white'}}>
                            Restam: {item.duration} meses
                        </Text>
                    </View>
                ))}
            </View>
            <TouchableHighlight style={planOptionsStyle.buttonContainer}>
                <FontAwesomeIcon icon={faCirclePlus} size={70} style={planOptionsStyle.plusButton}/>
            </TouchableHighlight>
        </ScrollView>
    </>)
}