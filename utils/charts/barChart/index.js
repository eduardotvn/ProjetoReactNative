import React from 'react';
import { View, Text } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { BarChartStyle } from './styles';

export const MyBarChart = ({amount, categories}) => {
    const sampleData = {
      labels: categories,
      datasets: [
        {
          data: amount,
        },
      ],
    };
  
    return (
      <View>
        <BarChart
          data={sampleData}
          width={600}
          height={250}
          yAxisLabel={'$'}
          showValuesOnTopOfBars = {true}
          chartConfig={{
            backgroundGradientFrom: 'black',
            backgroundGradientTo: 'teal',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: 'white',
            },
          }}
          style={BarChartStyle.barchart}
        />
      </View>
    );
  };
    