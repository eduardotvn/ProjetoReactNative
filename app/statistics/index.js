import { View, ScrollView } from 'react-native';
import React from 'react';
import Navbar from '../../components/navbar';
import { BasicChart } from '../../components/statistics/chartsVisualization/basicChart';
import { StatisticsStyle } from './styles';
import { StatisticsOptions } from '../../components/statistics/options';

export default function Statistics() {
    return(
    <>
        <View style={StatisticsStyle.container}>
            <StatisticsOptions/>            
        </View>
        <Navbar/>
    </>)
} 


