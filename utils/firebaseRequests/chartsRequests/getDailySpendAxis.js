import { GetAllDailySpendData } from "../getAllDocs"


export const GetDailySpendAxis = async (category, total, userUID) => 
{
    try{
        const result = await GetAllDailySpendData(userUID)
        if (!result) {
            throw new Error("Internal server error"); 
        } else { 
            const filteredResult = result.filter(entry => entry.Category === category);

            const datesArray = filteredResult.map(entry => entry.Date);
            const amountsArray = filteredResult.map(entry => entry.Amount);

            if(total == "Total")
            {
                const groupedResult = filteredResult.reduce((accumulator, entry) => {
                    const existingEntry = accumulator.find(item => item.Date === entry.Date);
                
                    if (existingEntry) {
                        existingEntry.Amount += entry.Amount;
                    } else {
                        accumulator.push({
                            Date: entry.Date,
                            Amount: entry.Amount
                        });
                    }
                    return accumulator;
                }, []);
                datesArray = groupedResult.map(entry => entry.Date);
                amountsArray = groupedResult.map(entry => entry.Amount)
                return [datesArray, amountsArray]; 
            } else if(total == "Individual")
            {
                return [datesArray, amountsArray];
            }
        }
    } catch (error)
    {
        return error.message; 
    }

}