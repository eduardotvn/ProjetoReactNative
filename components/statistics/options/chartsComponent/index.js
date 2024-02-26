import { Text, View } from "react-native"
import { CategoriesDropdown } from "../../../dropdowns/chartDropdowns"
import { BasicChart } from "../../chartsVisualization/basicChart"
import { ChartsComponentStyle } from "./styles"
import { useState } from "react"
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"


export const ChartsComponent = () => {

    const [isFocus, setIsFocus] = useState(false)
    const [category, setCategory] = useState('Alimento')
    const [errorMessage, setErrorMessage] = useState(null)

    return (
        <View style={ChartsComponentStyle.chartsContainer}>
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
            {errorMessage ? (
                <View style={ChartsComponentStyle.errorContainer}>
                    <FontAwesomeIcon
                        icon={faXmark}  
                        style={ChartsComponentStyle.xIcon}
                        size={60}
                    />
                    <Text style={ChartsComponentStyle.errorText}>{errorMessage}</Text>
                </View>
            ) : null}
        </View>
    )
}