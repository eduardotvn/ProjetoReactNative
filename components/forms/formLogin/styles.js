import { StyleSheet } from 'react-native';

export const loginStyle = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        display: 'flex',
        height: '25%',
        gap: 20,
    },
    input: {
        flexDirection: 'column',
        width: '90%',
        height: '20%',
        backgroundColor: 'white',
        alignSelf: 'center',
        borderRadius: 8,
        paddingLeft: 10,
        borderWidth: 1,
        borderColor: 'black',
    },
    forgotPasswordButton: {
        alignSelf: 'left',
        width: '90%',
    },
    forgotPasswordText: {
        color: 'blue',
    },  
    loginButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'teal',
        height: '20%',
        marginTop: '10%',
        width: '90%',
        borderRadius: 6,
    },
    loginButtonText: {
        color: 'white',
        fontSize: 18,
    }
})