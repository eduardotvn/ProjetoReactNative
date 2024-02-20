import { StyleSheet } from 'react-native';

export const planOptionsStyle = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        paddingTop: 20,
    },
    buttonContainer: {
        display: 'flex',
        alignItems: 'center',
        paddingBottom: 3,
        paddingTop: 20,
    },
    plusButton: {
        color: 'teal',
    },
    planContainer: {
        gap: 30,
        paddingLeft: 10,
    },
    planViewContainer: {
        backgroundColor: 'teal',
        height: 80,
        justifyContent: 'center',
        width: '90%',
        borderRadius: 6,
        paddingLeft: 10,
        gap: 5,
    },
    planViewContainerText: {
        fontSize: 16,
        color: 'white',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalInput: {
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        height: '10%',
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
        height: 550,
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
    }
})