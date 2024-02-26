import { Dropdown } from "react-native-element-dropdown"
import { ChartDropDownStyle } from "./styles";


export const CategoriesDropdown = ({ setDropDownValue,
    isFocus,
    setIsFocus,
    dropDownValue,
}) => {

    const categories = ["Alimento", "Saúde", "Pet", "Contas",
        "Taxas", "Locomoção", "Roupas", "Jogos",
        "Assinaturas"]

    return (<>
        <Dropdown
            labelField="label"
            valueField="dropDownValue"
            dropDownValue={dropDownValue}
            data={categories.map((category) => ({ label: category, dropDownValue: category }))}
            style={ChartDropDownStyle.dropDown}
            value={dropDownValue}
            placeholder={!isFocus ? 'Categorias' : '...'}
            onChange={item => {
                setDropDownValue(item.dropDownValue);
                setIsFocus(false);
            }}
        />
    </>)
}

export const SelectionDropdown = ({ setDropDownValue,
    isFocus,
    setIsFocus,
    dropDownValue,
}) => {

    const options = ["Totais Diários", "Individuais"]

    return (<>
        <Dropdown
            labelField="label"
            valueField="dropDownValue"
            dropDownValue={dropDownValue}
            data={options.map((category) => ({ label: category, dropDownValue: category }))}
            style={ChartDropDownStyle.dropDown}
            value={dropDownValue}
            placeholder={!isFocus ? 'Opções' : '...'}
            onChange={item => {
                setDropDownValue(item.dropDownValue);
                setIsFocus(false);
            }}
        />
    </>)
}