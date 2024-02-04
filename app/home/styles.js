import { StyleSheet } from 'react-native';

export const homeStyle = StyleSheet.create({
    container: {
        height: 1000,
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 20,
    },
    homeImage: {
        width: '90%',
        height: '40%',
    },
    scrollView: {
        flexGrow: 1,
    },
    outerContainer: {
        flex: 1,
    },
    buttonsContainer: {
        height: '30%',
        flexDirection: 'column',
        alignItems: 'center,',
        justifyContent: 'center',
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10, 
    },
    optionButton: {
        backgroundColor: 'teal',
        justifyContent: 'center',
        alignItems: 'center',
        width: '45%',
        height: '100%',
        borderRadius: 8,
    },
    buttonInnerContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        gap: 10,
    },
    buttonText: {
        fontSize: 16,
        color: 'white',
    },
    iconStyle: {
        color: 'white',
    },
})