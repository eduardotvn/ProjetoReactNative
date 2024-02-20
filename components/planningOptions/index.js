import { StatusBar } from 'expo-status-bar';
import { View, Image, TouchableHighlight, ScrollView, Text, Modal, TouchableOpacity, TextInput } from 'react-native';
import React, { useContext, useState } from 'react';
import { useRouter } from 'expo-router';
import { planOptionsStyle } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons/faCirclePlus'
import { formatDate } from '../../utils/dateHelper';
import { AuthContext } from '../authProvider';
import { addPlanningData } from '../../firebase.config';
import { Dropdown } from 'react-native-element-dropdown';

export default function PlanOptions() {

    const { user } = useContext(AuthContext)
    const [goal, setGoal] = useState('');
    const [duration, setDuration] = useState('')
    const [isModalVisible, setModalVisible] = useState(false);
    const [categoryValue, setCategoryValue] = useState('')
    const [type, setType] = useState('')
    const [isTypesFocus, setIsTypesFocus] = useState(false);
    const [isCategoriesFocus, setIsCategoriesFocus] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null)
    const types = ['Reduzir Gastos', 'Poupar dinheiro']
    const categories = ["Alimento", "Saúde", "Pet", "Contas",
        "Taxas", "Locomoção", "Roupas", "Jogos",
        "Assinaturas"]

    const plans = [{ type: 'Reduzir Gastos', category: 'Comida', duration: 3, limit: 400 },
    { type: 'Reduzir Gastos', category: 'Vestimentas', duration: 6, limit: 150 },
    { type: 'Reduzir Gastos', category: 'Jogos', duration: 2, limit: 20 },
    { type: 'Reduzir Gastos', category: 'Locomoção', duration: 5, limit: 120 },
    { type: 'Reduzir Gastos', category: 'Comida', duration: 3, limit: 400 },
    { type: 'Reduzir Gastos', category: 'Vestimentas', duration: 6, limit: 150 },
    { type: 'Reduzir Gastos', category: 'Jogos', duration: 2, limit: 20 },
    { type: 'Reduzir Gastos', category: 'Locomoção', duration: 5, limit: 120 },]

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const addPlan = async (type, category, duration, goal) => {
        const date = formatDate();
        if (type == '' || category == '' || duration == '' || goal == '') {
            setErrorMessage("Preencha todos os campos")
        } else if (isNaN(Number(goal))) {
            setErrorMessage("Formato inválido para objetivo")
        } else if (!Number.isInteger(Number(duration))) {
            setErrorMessage("Inválido número de meses")
        } else {
            if (user) {
                const Plan = {
                    type: type,
                    category: category,
                    duration: duration,
                    goal: goal,
                    uid: user.uid,
                    date: date,
                }

                addPlanningData(Plan);
            }
        }
    }

    return (<>
        <ScrollView style={planOptionsStyle.container}>
            <View style={planOptionsStyle.planContainer}>
                {plans.map((item, key) => (
                    <View key={key} style={planOptionsStyle.planViewContainer}>
                        <Text style={planOptionsStyle.planViewContainerText}>
                            {item.type} : {item.category}
                        </Text>
                        <Text style={{ color: 'white' }}>
                            Restam: {item.duration} meses
                        </Text>
                    </View>
                ))}
            </View>
            <TouchableOpacity style={planOptionsStyle.buttonContainer} onPress={toggleModal}>
                <FontAwesomeIcon icon={faCirclePlus} size={70} style={planOptionsStyle.plusButton} />
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={{ toggleModal }}
            >
                <View style={planOptionsStyle.modalContainer}>
                    <View style={planOptionsStyle.modalContent}>
                        <Dropdown
                            labelField="label"
                            valueField="type"
                            searchPlaceholder='Pesquisar'
                            type={type}
                            data={types.map((types) => ({ label: types, type: types }))}
                            style={planOptionsStyle.dropDown}
                            value={type}
                            placeholder={!isTypesFocus ? 'Tipos' : '...'}
                            onChange={item => {
                                setType(item.type);
                                setIsTypesFocus(false);
                            }}
                        />
                        <TextInput style={planOptionsStyle.modalInput}
                            placeholder='Objetivo'
                            onChangeText={(text) => setGoal(text)}
                            keyboardType='numeric'
                        />
                        <TextInput style={planOptionsStyle.modalInput}
                            placeholder='Duração(meses)'
                            onChangeText={(text) => setDuration(text)}
                            keyboardType='numeric'
                        />
                        <Dropdown
                            labelField="label"
                            valueField="categoryValue"
                            search
                            searchPlaceholder='Pesquisar'
                            dropDownValue={categoryValue}
                            data={categories.map((category) => ({ label: category, categoryValue: category }))}
                            style={planOptionsStyle.dropDown}
                            value={categoryValue}
                            placeholder={!isCategoriesFocus ? 'Categorias' : '...'}
                            onChange={item => {
                                setCategoryValue(item.categoryValue);
                                setIsCategoriesFocus(false);
                            }}
                        />
                        {errorMessage ? (
                            <Text style={{ color: 'red', marginTop: 10 }}>{errorMessage}</Text>
                        ) : null}

                        <TouchableOpacity
                            onPress={() => {addPlan(type, categoryValue, duration, goal)}}
                            style={planOptionsStyle.sendPlanButton}
                        >
                            <Text style={planOptionsStyle.sendPlanButtonText}>Enviar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {toggleModal()}}>
                            <Text style={planOptionsStyle.buttonText}>Fechar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </ScrollView>
    </>)
}