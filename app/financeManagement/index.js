import { View, ScrollView } from 'react-native';
import React from 'react';
import DailySpent from '../../components/dailySpent';
import NavBar from '../../components/navbar';
import { FinanceManagementStyle } from './styles';

export default function FinanceManagement() {
    return(
    <>
        <View style={FinanceManagementStyle.DailySpentStyle}>

            <ScrollView>
                <DailySpent/>
            </ScrollView>
            
        </View>
        <NavBar/>
    </>)
} 


