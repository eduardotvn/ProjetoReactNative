import { StyleSheet } from 'react-native';

export const DailySpentStyle = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: '100%',
    },
    dateStyle: {
        height: 100,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'teal',
        width: '100%',
        flexDirection: 'row'
    },
    dateStyleText: {
        fontSize: 20, 
        color: 'white',
    }
    ,
    viewSpendStyle: {
        display: 'flex',
        width: '100%',
    },
    spendStyle: {
        height: 50,
        width: '100%',
        borderTopWidth: 1,
        borderColor: 'black',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    spendStyleText: {
        fontSize: 16,
        width: '33%',
        textAlign: 'center',
    },
    viewTotal: {
        width: '100%',
        backgroundColor: 'teal',
        height: 50,
        justifyContent: 'space-between',
        paddingLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 10,
    },
    viewTotalText: {
        fontSize: 20,
        color: 'white',
    },
    categoriesContainer: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        height: 40,
    },
    categories: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    categoriesText: {
        fontSize: 16,
        fontWeight: 'bold',
        width: '33%',
        textAlign: 'center',
    },
    faAngleStyle: {
        color: 'white',
    },
})