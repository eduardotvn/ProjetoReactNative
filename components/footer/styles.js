import { StyleSheet } from 'react-native';

export const footerStyle = StyleSheet.create({
    container: {
        height: '12%',
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'teal',
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '33%',
    },
    buttonView: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    buttonIcon: {
        color: 'white',
    }
})