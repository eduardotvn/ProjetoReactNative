import { Dropdown } from "react-native-element-dropdown"
import { ChartDropDownStyle } from "./styles";


export const CategoriesDropdown = ({ setDropDownValue,
    isFocus,
    setIsFocus,
    dropDownValue,
    data,
}) => {

    return (<>
        <Dropdown
            labelField="label"
            valueField="dropDownValue"
            dropDownValue={dropDownValue}
            data={data.map((dataUnit) => ({ label: dataUnit, dropDownValue: dataUnit }))}
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
