import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { SimpleChart } from '../../../../utils/charts/simpleChart';
import { AuthContext } from '../../../authProvider';
import { GetAllDailySpendData } from '../../../../utils/firebaseRequests/getAllDocs';
import { BasicChartStyles } from './styles';
import { SelectionDropdown } from '../../../dropdowns/chartDropdowns';
import { GetDailySpendAxis } from '../../../../utils/firebaseRequests/chartsRequests/getDailySpendAxis';
import { MyBarChart } from '../../../../utils/charts/barChart';

export const BasicBarChart = ({data, categories}) => {

  return (
    <View>
          <MyBarChart
          data={data}
          categories={categories}
          />
    </View>
  );
};

