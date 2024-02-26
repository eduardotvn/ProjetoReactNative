import { Text, TouchableOpacity, View } from "react-native"
import { StatisticsOptionsStyle } from "./styles"
import { useState } from "react";
import { BasicChart } from "../chartsVisualization/basicChart";
import { CategoriesDropdown, LabelsDropdown } from "../../dropdowns/chartDropdowns";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark'

export const StatisticsOptions = () => {

    const [showChartsVisualization, setShowChartsVisualization] = useState(true);
    const [showReportsVisualization, setShowReportsVisualization] = useState(false);
    const [isFocus, setIsFocus] = useState(false)
    const [category, setCategory] = useState('Alimento')
    const [errorMessage, setErrorMessage] = useState(null)

    const HandleChartsButton = () => {
        setShowChartsVisualization(true);
        setShowReportsVisualization(false);
    }

    const HandleReportsButton = () => {
        setShowChartsVisualization(false);
        setShowReportsVisualization(true);
    }

    return (<>
        <View style={StatisticsOptionsStyle.headerContainer}>

            <TouchableOpacity
                onPress={HandleChartsButton}
                style={StatisticsOptionsStyle.button}>
                <Text style={StatisticsOptionsStyle.buttonText}>Gráficos</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={HandleReportsButton}
                style={StatisticsOptionsStyle.button}>
                <Text style={StatisticsOptionsStyle.buttonText}>Relatórios</Text>
            </TouchableOpacity>

        </View>

        {showChartsVisualization &&
            <View style={StatisticsOptionsStyle.chartsContainer}>
                <CategoriesDropdown
                    isFocus={isFocus}
                    setIsFocus={setIsFocus}
                    dropDownValue={category}
                    setDropDownValue={setCategory}
                />

                <BasicChart
                    category={category}
                    setErrorMessage={setErrorMessage}
                />
        </View>}
        {errorMessage ? (
                    <View style={StatisticsOptionsStyle.errorContainer}>
                        <FontAwesomeIcon 
                        icon={faXmark} 
                        style={StatisticsOptionsStyle.xIcon}
                        size={60}
                        />
                        <Text style={StatisticsOptionsStyle.errorText}>{errorMessage}</Text>
                    </View>
                ) : null}
    </>)
}