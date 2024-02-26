import { StyleSheet } from 'react-native';

export const planningStyle = StyleSheet.create({
    container: {
        height: '88%',
    },
    header: {
        display: 'flex',
        height: '12%',
        backgroundColor: 'teal',
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },  
    text: { 
        fontSize: 20,
        color: 'white',
        bottom: 10,
    }
})