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
    plusButton: {
        color: 'teal',
    },
    inputContainer: {
        height: 80,
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-around',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'black',
    },
    textInput: {
        borderBottomWidth: 1,
        borderColor: 'gray',
        width: '30%',
        height: '50%',
        paddingLeft: 10,
    },
    dropDown: {
        width: '40%',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 6,
        paddingLeft: 5,
    },
    modal: {
        backgroundColor: 'white',
        position: 'absolute',
        width: '60%',
        height: '20%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        alignSelf: 'center',
        top: '35%',
        borderColor: 'teal',
        borderRadius: 12,
    },
    buttonText: {
        fontSize: 16,
        color: 'white',
    },
    modalButton: {
        backgroundColor: 'teal',
        borderRadius: 8,
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalOptions: {
        display: 'flex',
        flexDirection: 'row',
        gap: 20,
    },
    modalText: {
        fontSize: 18,
    }
})