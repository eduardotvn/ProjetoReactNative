import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { SimpleChart } from '../../../../utils/charts/simpleChart';
import { AuthContext } from '../../../authProvider';
import { GetAllDailySpendData } from '../../../../utils/firebaseRequests/getAllDocs';
import { BasicChartStyles } from './styles';
import { SelectionDropdown } from '../../../dropdowns/chartDropdowns';
import { GetDailySpendAxis } from '../../../../utils/firebaseRequests/chartsRequests/getDailySpendAxis';

export const BasicChart = ({category, setErrorMessage, total}) => {

    const [dates, setDates] = useState([])
    const [amounts, setAmounts] = useState([])

    const {user} = useContext(AuthContext)

    useLayoutEffect(() => {
        (async () => {
            const result = await GetDailySpendAxis(category, total, user.uid)
            if(typeof result === 'string')
            {
                setErrorMessage(result)
            } else 
            {
                setDates(result[0])
                setAmounts(result[1])
            }
            }
        )()
    }, [user, category]); 



    return (
      <View style={BasicChartStyles.container}>
          {dates.length !== 0 && amounts.length !== 0 && (
            <>
              <SimpleChart amount={amounts} dates={dates} />
            </>
          )}
      </View>
  );
};

