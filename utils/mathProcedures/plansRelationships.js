
import { GetAllDailySpendData } from "../firebaseRequests/getAllDocs";
import { getPlanningData } from "../firebaseRequests/planOptionsRequests";


export const SumMonthlySpend = async (userUID, category, month, year) => {
    try {

        const dailySpends = await GetAllDailySpendData(userUID);

        const filteredSpends = dailySpends.filter((spend) => {
            const [day, monthInDocument, yearInDocument] = spend.Date.split('/');
            return (
                spend.Category === category &&
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

export const FindRelations = async (userUID, month, year) => {
    const plans = await getPlanningData(userUID)

    const result = await Promise.all(
        plans.map(async (plan) => {
            const category = plan.Category;
            const spent = await SumMonthlySpend(userUID, category, month, year);
            const remainingGoal = plan.Goal - spent;

            return {
                id: plan.id,
                category,
                spent,
                remainingGoal
        }})
    )

    
} 