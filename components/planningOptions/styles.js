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
})