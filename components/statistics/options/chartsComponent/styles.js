import { StyleSheet } from "react-native";


export const ChartsComponentStyle = StyleSheet.create({
    chartsContainer: {
        gap: 20,
        display: 'flex',
        paddingTop: 30,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingLeft: 8,
        height: '100%',
    },
    errorContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '95%',
        height: '35%',
        backgroundColor: 'whitesmoke',
        borderRadius: 10,
        alignSelf: 'center',
        gap: 20,
    },
    xIcon: {
        color: 'lightgray',
    },
    errorText: {
        fontSize: 16,
        color: 'lightgray',
        fontWeight: 'bold',
    }
})