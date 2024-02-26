import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { SimpleChart } from '../../../../utils/charts/simpleChart';
import { AuthContext } from '../../../authProvider';
import { GetAllDailySpendData } from '../../../../utils/firebaseRequests/getAllDocs';
import { BasicChartStyles } from './styles';
import { SelectionDropdown } from '../../../dropdowns/chartDropdowns';

export const BasicChart = ({category, setErrorMessage}) => {

    const [docs, setDocs] = useState([])
    const [dates, setDates] = useState([])
    const [amounts, setAmounts] = useState([])

    const {user} = useContext(AuthContext)

    useLayoutEffect(() => {
        (async () => {
            const result = await GetAllDailySpendData(user.uid)
            if (!result) {
                setErrorMessage("Erro interno do servidor")
            }
            else {
                const filteredResult = result.filter(entry => entry.Category === category);

                if(filteredResult.length === 0)
                {
                    setErrorMessage("Desculpe, não há dados para mostrar")
                    setDates([])
                    setAmounts([])
                    return 
                }
                const datesArray = filteredResult.map(entry => entry.Date);
                const amountsArray = filteredResult.map(entry => entry.Amount);
    
                setDocs(filteredResult);
                setDates(datesArray);
                setAmounts(amountsArray);
                setErrorMessage(null)
            }
        })()
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

