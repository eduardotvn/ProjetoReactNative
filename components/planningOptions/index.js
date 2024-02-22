import { View, ScrollView, Text, Modal, TouchableOpacity, TextInput } from 'react-native';
import React, { useContext, useLayoutEffect, useState } from 'react';
import { planOptionsStyle } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons/faCirclePlus'
import { AuthContext } from '../authProvider';
import { Dropdown } from 'react-native-element-dropdown';
import { addPlan, fetchPlans } from '../../firebaseHandlers/planningOptionsHandlers';

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
    const [docs, setDocs] = useState([])
    const [idToDelete, setIdToDelete] = useState('');
    const types = ['Reduzir Gastos', 'Poupar dinheiro']
    const categories = ["Alimento", "Saúde", "Pet", "Contas",
        "Taxas", "Locomoção", "Roupas", "Jogos",
        "Assinaturas"]

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    useLayoutEffect(() => {
        (async () => {
            const result = await fetchPlans(user)
            if (!result) {
                setErrorMessage("Erro interno do servidor")
            }
            else {
                console.log(result)
                setDocs(result)
            }
        })()
    }, [user]);

    const handleOnLongPress = (id) => {
        setIdToDelete(id)
    }

    return (<>
        <ScrollView style={planOptionsStyle.container}>
            <View style={planOptionsStyle.planContainer}>
                {docs.map((item, key) => (
                    <TouchableOpacity key={key} 
                    onLongPress={() => {handleOnLongPress(item.id)}}
                    delayLongPress={500}
                    >
                        <View style={planOptionsStyle.planViewContainer}>
                            <Text style={planOptionsStyle.planViewContainerText}>
                                {item.Type} : {item.Category}
                            </Text>
                            <Text style={{ color: 'white' }}>Início: {item.Date} </Text>
                            <Text style={{ color: 'white' }}>
                                Restam: {item.Duration} meses, meta de {item.Goal} reais.
                            </Text>
                        </View>
                    </TouchableOpacity>
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
                            onPress={async () => {
                                if (type == '' || categoryValue == '' || duration == '' || goal == '') {
                                    setErrorMessage("Preencha todos os campos")
                                } else if (isNaN(Number(goal))) {
                                    setErrorMessage("Formato inválido para objetivo")
                                } else if (!Number.isInteger(Number(duration))) {
                                    setErrorMessage("Inválido número de meses")
                                } else {
                                    addPlan(type, categoryValue, duration, goal, user.uid)
                                }

                                setDocs(await fetchPlans(user))
                                toggleModal()
                            }}
                            style={planOptionsStyle.sendPlanButton}
                        >
                            <Text style={planOptionsStyle.sendPlanButtonText}>Enviar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { toggleModal() }}>
                            <Text style={planOptionsStyle.buttonText}>Fechar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </ScrollView>
    </>)
}