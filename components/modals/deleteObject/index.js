import { DeleteObjectModalStyle } from "./styles";
import { Modal, Text, TouchableOpacity, View } from "react-native";


export const DeleteObjectModal = ({callbackOnConfirm, toggleModal, modalOpen}) => {



    return (<>
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalOpen}
            onRequestClose={{ toggleModal }}
        >
            <View style={DeleteObjectModalStyle.modalContainer}>
                <View style={DeleteObjectModalStyle.modal}
                >
                    <Text style={DeleteObjectModalStyle.modalText}>Deseja remover registro?</Text>
                    <View style={DeleteObjectModalStyle.modalOptions}>
                        <TouchableOpacity
                            onPress={callbackOnConfirm}
                            style={DeleteObjectModalStyle.modalButton}
                        >
                            <Text style={DeleteObjectModalStyle.buttonText}>Sim</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={toggleModal}
                            style={DeleteObjectModalStyle.modalButton}
                        >
                            <Text style={DeleteObjectModalStyle.buttonText}>Não</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </Modal>
    </>)
}