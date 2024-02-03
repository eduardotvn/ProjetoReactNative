import { StyleSheet } from 'react-native';

export const appStyle = StyleSheet.create({
    container: {
        display: 'flex',
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
    },
    frontImage: {
        width: '90%', 
        height: '50%', 
        objectFit: "contain", 
    },
    returnButton: {
        position: 'absolute',
        top: 80,
        left: 20,
    },
    buttonsFrame: {
        alignItems: 'center',
        width: '100%',
    },
    enterButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'teal',
        height: '14%',
        width: '90%',
        borderRadius: 6,
        marginBottom: '20%',
    },
    createAccountButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'teal',
        height: '14%',
        width: '90%',
        borderRadius: 6,
    },
    buttonFont: {
        color: 'white',
        fontSize: 16,
    }
})