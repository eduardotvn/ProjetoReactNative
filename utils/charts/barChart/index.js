import React from 'react';
import { View, Text } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { BarChartStyle } from './styles';

export const MyBarChart = ({data, categories}) => {
    const sampleData = {
      labels: categories,
      datasets: [
        {
          data: [20, 45, 28, 80, 99],
        },
      ],
    };
  
    return (
      <View>
        <BarChart
          data={sampleData}
          width={380}
          height={200}
          yAxisLabel={'$'}
          chartConfig={{
            backgroundGradientFrom: 'teal',
            backgroundGradientTo: 'teal',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(1, 1, 1, ${opacity})`,
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
    