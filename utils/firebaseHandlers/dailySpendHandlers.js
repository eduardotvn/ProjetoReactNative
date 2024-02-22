
import { getHourFormatted } from "../dateHelper";
import { getFirestore, addDailySpendData, getDailySpendDataByUserUID } from "../firebaseRequests/dailySpendRequests";


export const fetchDailySpentData = async (user, date) => {
    try {
        const data = await getDailySpendDataByUserUID(user.uid, date);
        const sortedDocs = data.slice().sort((a, b) => a.Hour.localeCompare(b.Hour));
        return sortedDocs;
    } catch (error) {
        return null;
    }
};

export const addSpendData = (value, category, uid, date) => {

    const formattedTime = getHourFormatted();

    const spendData = {
        day: date,
        hour: formattedTime,
        amount: value,
        category: category,
        uid: uid
    };

    addDailySpendData(spendData);
}