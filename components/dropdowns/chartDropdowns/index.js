import { Dropdown } from "react-native-element-dropdown"
import { ChartDropDownStyle } from "./layout";


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
