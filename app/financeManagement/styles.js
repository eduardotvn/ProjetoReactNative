import { StyleSheet } from 'react-native';

export const FinanceManagementStyle = StyleSheet.create({
    DailySpentStyle: {
        height: '88%',
    },
    header: {
        height: '5%',
        backgroundColor: 'teal'
    },
    button: {
        display: 'flex',
        backgroundColor: 'teal',
        width: '25%',
        height: '8%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'white',
        bottom: 20, 
    },
    buttonText: {
        fontSize: 16,
        color: 'white',
    },  
})