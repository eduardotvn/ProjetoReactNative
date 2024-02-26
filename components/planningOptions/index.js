import { View, ScrollView, Text, Modal, TouchableOpacity, TextInput } from 'react-native';
import React, { useContext, useLayoutEffect, useState } from 'react';
import { planOptionsStyle } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons/faCirclePlus'
import { faSpinner } from '@fortawesome/free-solid-svg-icons/faSpinner'
import { AuthContext } from '../authProvider';
import { addPlan, fetchPlans } from '../../utils/firebaseHandlers/planningOptionsHandlers';
import { DeleteObjectModal } from '../modals/deleteObject';
import { deleteDocument } from '../../utils/firebaseRequests/deleteDocs';
import { PlanModal } from '../modals/planModal';

export default function PlanOptions() {

    const { user } = useContext(AuthContext)
    const [goal, setGoal] = useState('');
    const [duration, setDuration] = useState('')
    const [isCreationModalVisible, setCreationModalVisible] = useState(false);
    const [isDeletionModalVisible, setDeletionModalVisible] = useState(false);
    const [categoryValue, setCategoryValue] = useState('')
    const [type, setType] = useState('')
    const [isTypesFocus, setIsTypesFocus] = useState(false);
    const [isCategoriesFocus, setIsCategoriesFocus] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null)
    const [docs, setDocs] = useState([])
    const [idToDelete, setIdToDelete] = useState('');
    const types = ['Reduzir Gastos', 'Poupar Dinheiro']
    const categories = ["Alimento", "Saúde", "Pet", "Contas",
        "Taxas", "Locomoção", "Roupas", "Jogos",
        "Assinaturas"]

    const toggleCreationModal = () => {
        setCreationModalVisible(!isCreationModalVisible);
    };

    const toggleDeletionModal = () => {
        setDeletionModalVisible(!isCreationModalVisible);
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
        setDeletionModalVisible(true)
        setIdToDelete(id)
    }

    const onModalConfirmHandler = async () => {

        await deleteDocument("planning", idToDelete);
        setDeletionModalVisible(false);
        setDocs(await fetchPlans(user));
    }

    const HandleCreationModal = async () => {
        if (type == '' || duration == '' || goal == '') {
            setErrorMessage("Preencha todos os campos")
        }
        else if (type == "Reduzir Gastos" && categoryValue == ''){
            setErrorMessage("Preencha todos os campos")
        }        
        else if (isNaN(Number(goal))) {
            setErrorMessage("Formato inválido para objetivo")
        } else if (!Number.isInteger(Number(duration))) {
            setErrorMessage("Inválido número de meses")
        } else {
            addPlan(type, categoryValue, duration, goal, user.uid)
        }

        setDocs(await fetchPlans(user))
        toggleCreationModal()
    }

    return (<>
        <ScrollView style={planOptionsStyle.container}>
            <View style={planOptionsStyle.planContainer}>
                {docs.map((item, key) => (
                    <TouchableOpacity key={key}
                        onLongPress={() => { handleOnLongPress(item.id) }}
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

            <DeleteObjectModal
                callbackOnConfirm={onModalConfirmHandler}
                toggleModal={toggleDeletionModal}
                modalOpen={isDeletionModalVisible}
            />

            <TouchableOpacity style={planOptionsStyle.buttonContainer} onPress={toggleCreationModal}>
                <FontAwesomeIcon icon={faCirclePlus} size={70} style={planOptionsStyle.plusButton} />
            </TouchableOpacity>

            <PlanModal
                type={type}
                types={types}
                categories={categories}
                categoryValue={categoryValue}
                isTypesFocus={isTypesFocus}
                isCreationModalVisible={isCreationModalVisible}
                setGoal={setGoal}
                errorMessage={errorMessage}
                setIsTypesFocus={setIsTypesFocus}
                setDuration={setDuration}
                setType={setType}
                setCategoryValue={setCategoryValue}
                setIsCategoriesFocus={setIsCategoriesFocus}
                toggleCreationModal={toggleCreationModal}
                onCallBackFunction={HandleCreationModal}
            />
        </ScrollView>
    </>)
}