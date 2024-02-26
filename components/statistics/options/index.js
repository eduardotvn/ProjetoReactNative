import { Text, TouchableOpacity, View } from "react-native"
import { StatisticsOptionsStyle } from "./styles"
import { useState } from "react";
import { BasicChart } from "../chartsVisualization/basicChart";
import { CategoriesDropdown, LabelsDropdown } from "../../dropdowns/chartDropdowns";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark'
import { ChartsComponent } from "./chartsComponent";

export const StatisticsOptions = () => {

    const [showChartsVisualization, setShowChartsVisualization] = useState(true);
    const [showReportsVisualization, setShowReportsVisualization] = useState(false);
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
            <ChartsComponent/>
        }
    </>)
}