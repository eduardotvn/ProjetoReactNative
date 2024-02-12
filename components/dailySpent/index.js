import { StatusBar } from 'expo-status-bar';
import { View, Image, TouchableHighlight, Text } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { DailySpentStyle } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons/faAngleLeft'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight'

export default function DailySpent(){

    const exampleDailySpendData = {
        date: "10/02/2024",
        spent: [{time:"09:00", amount: 902.75, category: "Remédio"},
                {time:"12:30", amount: 101.05, category: "Alimento"},
                {time:"15:45", amount: 29.90, category: "Pet"},
                {time:"18:15", amount: 35.90, category: "Alimento"},
                {time:"21:30", amount: 1.73, category: "Taxas"},
                {time:"09:00", amount: 902.75, category: "Remédio"},
                {time:"12:30", amount: 101.05, category: "Alimento"},
                {time:"15:45", amount: 29.90, category: "Pet"},
                {time:"18:15", amount: 35.90, category: "Alimento"},
                {time:"21:30", amount: 1.73, category: "Taxas"},
                {time:"09:00", amount: 902.75, category: "Remédio"},
                {time:"12:30", amount: 101.05, category: "Alimento"},
                {time:"15:45", amount: 29.90, category: "Pet"},
                {time:"18:15", amount: 35.90, category: "Alimento"},
                {time:"21:30", amount: 1.73, category: "Taxas"},
                {time:"09:00", amount: 902.75, category: "Remédio"},
                {time:"12:30", amount: 101.05, category: "Alimento"},
                {time:"15:45", amount: 29.90, category: "Pet"},
                {time:"18:15", amount: 35.90, category: "Alimento"},
                {time:"21:30", amount: 1.73, category: "Taxas"},
                {time:"09:00", amount: 902.75, category: "Remédio"},
                {time:"12:30", amount: 101.05, category: "Alimento"},
                {time:"15:45", amount: 29.90, category: "Pet"},
                {time:"18:15", amount: 35.90, category: "Alimento"},
                {time:"21:30", amount: 1.73, category: "Taxas"},
                {time:"09:00", amount: 902.75, category: "Remédio"},
                {time:"12:30", amount: 101.05, category: "Alimento"},
                {time:"15:45", amount: 29.90, category: "Pet"},
                {time:"18:15", amount: 35.90, category: "Alimento"},
                {time:"21:30", amount: 1.73, category: "Taxas"},]
    }

    const sum = (dailyspent) => {
        let total = dailyspent.reduce((accumulator, nextElement) => {
            return accumulator + nextElement.amount
        }, 0)
      
        return total.toFixed(2);
    }

    return(
    <>
        <View style={DailySpentStyle.container}>
            <View style={DailySpentStyle.dateStyle}>
                <FontAwesomeIcon icon={faAngleLeft} style={DailySpentStyle.faAngleStyle} size={30}/>
                <Text style={DailySpentStyle.dateStyleText}>
                    {exampleDailySpendData.date}
                </Text>
                <FontAwesomeIcon icon={faAngleRight} style={DailySpentStyle.faAngleStyle} size={30}/>
            </View>

        <View style={DailySpentStyle.categoriesContainer}>
            <View style={DailySpentStyle.categories}>
                <Text style={DailySpentStyle.categoriesText}>Hora</Text>
                <Text style={DailySpentStyle.categoriesText}>Valor</Text>
                <Text style={DailySpentStyle.categoriesText}>Categoria</Text>
            </View>
        </View>

        <View style={DailySpentStyle.viewSpendStyle}>
            {(exampleDailySpendData.spent).map((item, key) => (
                <View key={key} style={DailySpentStyle.spendStyle}>
                    <Text style={DailySpentStyle.spendStyleText}>{item.time}</Text>
                    <Text style={DailySpentStyle.spendStyleText}>{item.amount}</Text>
                    <Text style={DailySpentStyle.spendStyleText}>{item.category}</Text>
                </View>
                ))}
        </View>

        <View style={DailySpentStyle.viewTotal}>
          <Text style={DailySpentStyle.viewTotalText}>Total: </Text>
          <Text style={DailySpentStyle.viewTotalText}>R$ {sum(exampleDailySpendData.spent)}</Text>
        </View>

        </View>
    </>)
}