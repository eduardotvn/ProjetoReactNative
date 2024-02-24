import { StyleSheet } from "react-native";


export const DeleteObjectModalStyle = StyleSheet.create({
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