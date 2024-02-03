import { StyleSheet } from 'react-native';

export const registerStyle = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        height: 1000,
        alignItems: 'center',
        gap: 20,
    },
    image: {
        width: '90%', 
        height: '50%', 
        objectFit: "contain", 
    },
    input: {
        height: '8%',
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
        height: '8%',
        width: '90%',
        borderRadius: 8,
    },
    buttonText: {
        fontSize: 16,
        color: 'white'
    },
})