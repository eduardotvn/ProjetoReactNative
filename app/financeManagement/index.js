import { View, ScrollView, TouchableHighlight, TouchableOpacity, Text } from 'react-native';
import React, { useContext, useState } from 'react';
import DailySpent from '../../components/dailySpent';
import NavBar from '../../components/navbar';
import { FinanceManagementStyle } from './styles';
import { GoalModal } from '../../components/modals/goalModal';
import { AuthContext } from '../../components/authProvider';
import { getCurrentMonth, getCurrentYear } from '../../utils/dateHelper';

export default function FinanceManagement() {

    const [modalOpen, setModalOpen] = useState(false);
    const {user} = useContext(AuthContext);

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    }

    return(
    <>
        <View style={FinanceManagementStyle.DailySpentStyle}>
            <View style={FinanceManagementStyle.header}></View>
            <ScrollView>
                <DailySpent/>
            </ScrollView>
            <TouchableOpacity style={FinanceManagementStyle.button} onPress={toggleModal}>
                <Text style={FinanceManagementStyle.buttonText}>Metas</Text>
            </TouchableOpacity>
        </View>
            {modalOpen && <GoalModal
            userUID={user.uid}
            month={getCurrentMonth()}
            year={getCurrentYear()}
            setToggleModal={toggleModal}
            />}
        <NavBar/>
    </>)
} 


