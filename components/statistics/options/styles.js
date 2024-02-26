import { StyleSheet } from "react-native";


export const StatisticsOptionsStyle = StyleSheet.create({
    headerContainer: {
        width: '100%',
        height: '15%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        gap: 20,
        paddingTop: 50,
        backgroundColor: 'teal'
    },
    button: {
        width: '45%',
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: 'teal',
        borderRadius: 8,
    },
    buttonText: {
        fontSize: 16,
        color: 'white',
    },
})