import { Text, View } from "react-native"
import { CategoriesDropdown, SelectionDropdown } from "../../../dropdowns/chartDropdowns"
import { BasicChart } from "../../chartsVisualization/basicChart"
import { ChartsComponentStyle } from "./styles"
import { useState } from "react"
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { BasicBarChart } from "../../chartsVisualization/basicBarChart"


export const ChartsComponent = () => {

    const [isCategoriesFocus, setIsCategoriesFocus] = useState(false)
    const [isDailyTotalFocus, setIsDailyTotalFocus] = useState(false)
    const [category, setCategory] = useState('Alimento')
    const [errorMessage, setErrorMessage] = useState(null)
    const [isDailyTotal, setIsDailyTotal] = useState("Individual")
    const categories = ["Alimento", "Saúde", "Pet", "Contas",
        "Taxas", "Locomoção", "Roupas", "Jogos",
        "Assinaturas"]
    const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]
    const accumulation = ["Total", "Individual"]
    return (
        <View style={ChartsComponentStyle.chartsContainer}>
            <CategoriesDropdown
                setDropDownValue={setIsDailyTotal}
                dropDownValue={isDailyTotal}
                isFocus={isDailyTotalFocus}
                setIsFocus={setIsDailyTotalFocus}
                data={accumulation}
            />

            <View>
                <BasicChart
                    category={category}
                    total={isDailyTotal}
                    setErrorMessage={setErrorMessage}
                />
            </View>

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
            
            <CategoriesDropdown
                isFocus={isCategoriesFocus}
                setIsFocus={setIsCategoriesFocus}
                dropDownValue={category}
                setDropDownValue={setCategory}
                data={categories}
            />

            <BasicBarChart
            categories={months}
            />
        </View>
    )
}