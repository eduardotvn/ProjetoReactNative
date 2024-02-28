import React from 'react';
import { LineChart } from 'react-native-chart-kit';
import { View } from 'react-native';
import { SimpleChartStyle } from './styles';

export const SimpleChart = ({ amount, dates }) => {
  const data = {
    labels: dates,
    datasets: [
      {
        data: amount,
      },
    ],
  }

  return (
    <View>
      <LineChart
        data={data}
        width={380}
        height={220}
        yAxisLabel={'$'}
        chartConfig={{
          backgroundColor: 'teal',
          backgroundGradientFrom: 'teal',
          backgroundGradientTo: 'teal',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: 'teal',
          },
        }}
        bezier
        style={SimpleChartStyle.chart}
      />
    </View>
  );
};
