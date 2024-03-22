import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { SimpleChart } from '../../../../utils/charts/simpleChart';
import { AuthContext } from '../../../authProvider';
import { GetAllDailySpendData } from '../../../../utils/firebaseRequests/getAllDocs';
import { BasicChartStyles } from './styles';
import { SelectionDropdown } from '../../../dropdowns/chartDropdowns';
import { GetDailySpendAxis } from '../../../../utils/firebaseRequests/chartsRequests/getDailySpendAxis';
import { MyBarChart } from '../../../../utils/charts/barChart';
import { AllMonthlySpend } from '../../../../utils/mathProcedures/plansRelationships';

export const BasicBarChart = ({ data, categories }) => {

  const [amounts, setAmounts] = useState([])

  const { user } = useContext(AuthContext)

  const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]

  useLayoutEffect(() => {
    (async () => {
      const yearlySpent = [];

      for (let i = 1; i <= 12; i++) {

        const monthlyValue = await AllMonthlySpend(user.uid, i, 2024);

        yearlySpent.push(monthlyValue);
      }

      if (yearlySpent.length == 0) {
        setErrorMessage("Desculpe, não há dados para mostrar")
        setDates([])
        setAmounts([])
      }
      else {
        setAmounts(yearlySpent)
      }
    }
    )()
  }, [user]);

  return (
    <ScrollView
    horizontal = {true}
    >
      <MyBarChart
        amount={amounts}
        categories={months}
      />
    </ScrollView>
  );
};

