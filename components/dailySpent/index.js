import { View, Text, TextInput, TouchableHighlight } from 'react-native';
import React, { useContext, useState, useLayoutEffect } from 'react';
import { DailySpentStyle } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons/faAngleLeft'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight'
import { Dropdown } from 'react-native-element-dropdown';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons/faCirclePlus'
import { AuthContext } from '../authProvider';
import { formatDate, getNextDate, getPreviousDate } from '../../utils/dateHelper';
import { addSpendData, fetchDailySpentData } from '../../firebaseHandlers/dailySpendHandlers';

export default function DailySpent() {

    const categories = ["Alimento", "Saúde", "Pet", "Contas",
        "Taxas", "Locomoção", "Roupas", "Jogos",
        "Assinaturas"]
    const [newValue, setNewValue] = useState('');
    const [dropDownValue, setDropDownValue] = useState('');
    const [isFocus, setIsFocus] = useState(false);
    const [docs, setDocs] = useState([]);
    const [date, setDate] = useState(formatDate());
    const [errorMessage, setErrorMessage] = useState(null)

    const { user } = useContext(AuthContext)

    useLayoutEffect(() => {
        (async () => {
            const result = await fetchDailySpentData(user, date)
            if(!result)
            {
                setErrorMessage("Erro interno do servidor")
            } 
            else{
                setDocs(result)
            }
            })()
    }, [date]);

    const sum = (dailyspent) => {
        if (dailyspent) {
            let total = dailyspent.reduce((accumulator, nextElement) => {
                return accumulator + Number(nextElement.Amount)
            }, 0)
            return total;
        }
        return 0
    }

    return (
        <>
            <View style={DailySpentStyle.container}>
                <View style={DailySpentStyle.dateStyle}>
                    <TouchableHighlight onPress={() => { setDate(getPreviousDate(date)); setDocs([]) }}>
                        <FontAwesomeIcon icon={faAngleLeft} style={DailySpentStyle.faAngleStyle} size={30} />
                    </TouchableHighlight>
                    <Text style={DailySpentStyle.dateStyleText}>
                        {date}
                    </Text>
                    <TouchableHighlight onPress={() => { setDate(getNextDate(date)); setDocs([]) }}>
                        <FontAwesomeIcon icon={faAngleRight} style={DailySpentStyle.faAngleStyle} size={30} />
                    </TouchableHighlight>
                </View>

                <View style={DailySpentStyle.categoriesContainer}>
                    <View style={DailySpentStyle.categories}>
                        <Text style={DailySpentStyle.categoriesText}>Hora</Text>
                        <Text style={DailySpentStyle.categoriesText}>Valor</Text>
                        <Text style={DailySpentStyle.categoriesText}>Categoria</Text>
                    </View>
                </View>

                {docs && <View style={DailySpentStyle.viewSpendStyle}>
                    {(docs).map((item, key) => (
                        <View key={key} style={DailySpentStyle.spendStyle}>
                            <Text style={DailySpentStyle.spendStyleText}>{item.Hour}</Text>
                            <Text style={DailySpentStyle.spendStyleText}>{item.Amount}</Text>
                            <Text style={DailySpentStyle.spendStyleText}>{item.Category}</Text>
                        </View>
                    ))}
                </View>}

                <View style={DailySpentStyle.inputContainer}>
                    <TextInput
                        placeholder="Valor"
                        onChangeText={text => setNewValue(text)}
                        style={DailySpentStyle.textInput}
                        keyboardType="numeric" 
                    />

                    <Dropdown
                        labelField="label"
                        valueField="dropDownValue"
                        search
                        searchPlaceholder='Pesquisar'
                        dropDownValue={dropDownValue}
                        data={categories.map((category) => ({ label: category, dropDownValue: category }))}
                        style={DailySpentStyle.dropDown}
                        value={dropDownValue}
                        placeholder={!isFocus ? 'Categorias' : '...'}
                        onChange={item => {
                            setDropDownValue(item.dropDownValue);
                            setIsFocus(false);
                        }}
                    />

                    <TouchableHighlight onPress={async () => {
                        if (newValue == '' || dropDownValue == '') {
                            setErrorMessage("Preencha ambos os campos")
                        } else if (newValue < 0){
                            setErrorMessage("O valor não deve ser negativo")
                        } else if (isNaN(Number(newValue)))
                        {
                            setErrorMessage("Valor inválido")
                        }
                        else {
                            addSpendData(newValue, dropDownValue, user.uid)
                        }
                        ;
                        setDocs(await fetchDailySpentData(user, date))
                    }}>
                        <FontAwesomeIcon
                            icon={faCirclePlus}
                            size={30} style={{ color: 'teal' }}
                        />
                    </TouchableHighlight>
                </View>

                {errorMessage ? (
                    <Text style={{ color: 'red', marginTop: 10 }}>{errorMessage}</Text>
                ) : null}

                {docs ?
                    <View style={DailySpentStyle.viewTotal}>
                        <Text style={DailySpentStyle.viewTotalText}>Total: </Text>
                        <Text style={DailySpentStyle.viewTotalText}>R$ {sum(docs)}</Text>
                    </View>
                    :
                    <View style={DailySpentStyle.viewTotal}>
                        <Text style={DailySpentStyle.viewTotalText}>Total: </Text>
                        <Text style={DailySpentStyle.viewTotalText}>R$ 0</Text>
                    </View>
                }
            </View>
        </>)
}