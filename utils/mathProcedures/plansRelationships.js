
import { GetAllDailySpendData } from "../firebaseRequests/getAllDocs";


export const SumMonthlySpend = async (userUID, month, year) => {
    try {

        const dailySpends = await GetAllDailySpendData(userUID);

        const filteredSpends = dailySpends.filter((spend) => {
            const [day, monthInDocument, yearInDocument] = spend.Date.split('/');
            return (
                parseInt(monthInDocument, 10) === month &&
                parseInt(yearInDocument, 10) === year
            );
        });

        const sum = filteredSpends.reduce((total, spend) => {
            return total + parseFloat(spend.Amount);
        }, 0);

        return sum;

    } catch (error) {
        console.error('Error getting documents:', error.message);
        throw error;
    }
}