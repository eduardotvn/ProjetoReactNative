import { useEffect, useLayoutEffect, useState } from "react"
import { Modal, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { FindRelations } from "../../../utils/mathProcedures/plansRelationships"
import { GoalModalStyle } from "./styles"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faX } from '@fortawesome/free-solid-svg-icons/faX'

export const GoalModal = ({ userUID, month, year, setToggleModal }) => {

    const [result, setResult] = useState(null)

    useLayoutEffect(() => {
        (
            async () => {
                const results = await FindRelations(userUID, month, year)
                if (results != null) {
                    setResult(results);
                    console.log(results);
                }
            })()
    }, [userUID, month, year])

    return (
        <Modal
            transparent={true}
            animationType="slide"
        >
            <View style={GoalModalStyle.modalContainer}>
                <View style={GoalModalStyle.modalContent}>
                    <View style={GoalModalStyle.headerContainer}>
                        <Text style={GoalModalStyle.headerText}>Minhas Metas</Text>
                        <TouchableOpacity onPress={setToggleModal} style={GoalModalStyle.closeButton}>
                            <FontAwesomeIcon icon={faX} size={20} />
                        </TouchableOpacity>
                    </View>
                    {result ?
                        <ScrollView>
                            {result.map((item, key) => (
                                <View key={key} style={GoalModalStyle.textView}>
                                    {
                                        item.remainingGoal >= 0 ?
                                            <Text style={GoalModalStyle.text}>Você gastou {item.spent} em {item.category} neste mês.
                                                Restam {item.remainingGoal}
                                            </Text>
                                            :
                                            <Text style={GoalModalStyle.text}>Você gastou {item.spent} em {item.category} neste mês.
                                                {-item.remainingGoal} ultrapassados da meta.
                                            </Text>
                                    }
                                </View>
                            ))}
                        </ScrollView>
                        : <></>
                    }
                </View>
            </View>
        </Modal>)
}