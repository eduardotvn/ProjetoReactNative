import { StyleSheet } from "react-native";


export const PlanModalStyle = StyleSheet.create({
    modalContainer: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalInput: {
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        height: 60,
        width: '70%',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 30,
        width: '80%',
        height: 500,
    },
    dropDown: {
        width: '70%',
        height: '15%',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 6,
        paddingLeft: 5,
    },
    sendPlanButton: {
        backgroundColor: 'teal',
        width: '50%',
        height: '10%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
    },
    sendPlanButtonText: {
        fontSize: 16,
        color: 'white',
    },
    buttonText: {
        fontSize: 16,
    }
})