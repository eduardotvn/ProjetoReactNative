import { StyleSheet } from 'react-native';

export const registerStyle = StyleSheet.create({
    container: {
        flex: 0,
        display: 'flex',
        height: 1400,
        alignItems: 'center',
        gap: 30,
    },
    image: {
        width: '90%', 
        height: '40%', 
        objectFit: "contain", 
    },
    input: {
        height: '6%',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 8,
        width: '90%',
        paddingLeft: 10,
    },
    button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'teal',
        height: '6%',
        width: '90%',
        borderRadius: 8,
    },
    buttonText: {
        fontSize: 16,
        color: 'white'
    },
    returnPressable: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '5%',
        width: '20%'
    },
    checkbox: {
        paddingLeft: 10,
    },
    checkboxView: {
        flexDirection: 'row', 
        gap: 10
    },
})