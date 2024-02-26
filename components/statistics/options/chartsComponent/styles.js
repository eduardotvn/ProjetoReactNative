import { StyleSheet } from "react-native";


export const ChartsComponentStyle = StyleSheet.create({
    chartsContainer: {
        gap: 20,
        paddingTop: 20,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 5,
    },
    errorContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '95%',
        height: '50%',
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