import { Modal, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { PlanModalStyle } from "./styles";

export const PlanModal = ({ types, 
                            type,
                            categories, 
                            categoryValue,
                            errorMessage,
                            isTypesFocus, 
                            isCategoriesFocus, 
                            isCreationModalVisible,
                            setGoal, 
                            setDuration, 
                            setType, 
                            setCategoryValue,
                            setIsCategoriesFocus,
                            toggleCreationModal,
                            onCallBackFunction, 
                            setIsTypesFocus,
                        }) => {

    return(            
    <Modal
        animationType="slide"
        transparent={true}
        visible={isCreationModalVisible}
        onRequestClose={{ toggleCreationModal }}
    >
        <View style={PlanModalStyle.modalContainer}>
            <View style={PlanModalStyle.modalContent}>
                <Dropdown
                    labelField="label"
                    valueField="type"
                    searchPlaceholder='Pesquisar'
                    type={type}
                    data={types.map((types) => ({ label: types, type: types }))}
                    style={PlanModalStyle.dropDown}
                    value={type}
                    placeholder={!isTypesFocus ? 'Tipos' : '...'}
                    onChange={item => {
                        setType(item.type);
                        setIsTypesFocus(false);
                        setCategoryValue('')
                    }}
                />
                <TextInput style={PlanModalStyle.modalInput}
                    placeholder='Objetivo'
                    onChangeText={(text) => setGoal(text)}
                    keyboardType='numeric'
                />
                <TextInput style={PlanModalStyle.modalInput}
                    placeholder='Duração(meses)'
                    onChangeText={(text) => setDuration(text)}
                    keyboardType='numeric'
                />
                {(type == "Reduzir Gastos") && <Dropdown
                    labelField="label"
                    valueField="categoryValue"
                    search
                    searchPlaceholder='Pesquisar'
                    dropDownValue={categoryValue}
                    data={categories.map((category) => ({ label: category, categoryValue: category }))}
                    style={PlanModalStyle.dropDown}
                    value={categoryValue}
                    placeholder={!isCategoriesFocus ? 'Categorias' : '...'}
                    onChange={item => {
                        setCategoryValue(item.categoryValue);
                        setIsCategoriesFocus(false);
                    }}
                />}
                {errorMessage ? (
                    <Text style={{ color: 'red', marginTop: 10 }}>{errorMessage}</Text>
                ) : null}

                <TouchableOpacity
                    onPress={onCallBackFunction}
                    style={PlanModalStyle.sendPlanButton}
                >
                    <Text style={PlanModalStyle.sendPlanButtonText}>Enviar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={toggleCreationModal}>
                    <Text style={PlanModalStyle.buttonText}>Fechar</Text>
                </TouchableOpacity>
            </View>
        </View>
    </Modal>
    )
}