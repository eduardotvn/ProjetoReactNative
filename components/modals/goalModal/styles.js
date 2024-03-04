import { StyleSheet } from "react-native";


export const GoalModalStyle = StyleSheet.create({
    modalContainer: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        gap: 30,
        width: '80%',
        height: 500,
        borderWidth: 8,
        borderColor: 'teal',
    },
    closeButton: {
        position: 'absolute',
        right: 0,
    },
    textView: {
        height: 70,
    },
    text: {
        fontSize: 16,
    },
    headerText: {
        fontSize: 20,
        alignSelf: 'center',
        width: '100%',
        textAlign: 'center'
    },
    headerContainer: {
        display: 'flex',
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
    },
})