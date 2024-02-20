import { useContext } from "react";
import { addDailySpendData, getDailySpendDataByUserUID } from "../firebase.config";
import { formatDate, getHourFormatted } from "../utils/dateHelper";
import AuthProvider, { AuthContext } from "../components/authProvider";


export const fetchDailySpentData = async (user, date) => {
    try {
        const data = await getDailySpendDataByUserUID(user.uid, date);
        const sortedDocs = data.slice().sort((a, b) => a.Hour.localeCompare(b.Hour));
        return sortedDocs;
    } catch (error) {
        return null;
    }
};

export const addSpendData = (value, category, uid) => {

    const formattedDate = formatDate();
    const formattedTime = getHourFormatted();

    const spendData = {
        day: formattedDate,
        hour: formattedTime,
        amount: value,
        category: category,
        uid: uid
    };

    addDailySpendData(spendData);
}