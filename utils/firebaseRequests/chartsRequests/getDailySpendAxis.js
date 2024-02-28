import { GetAllDailySpendData } from "../getAllDocs"


export const GetDailySpendAxis = async (category, total, userUID) => 
{
    try{
        console.log("Iniciado")
        const result = await GetAllDailySpendData(userUID)
        if (!result) {
            throw new Error("Internal server error"); 
        } else { 
            const filteredResult = result.filter(entry => entry.Category === category);

            if(total == "Total")
            {
                console.log("chamou total")
                let total = 0;
                const groupedResult = filteredResult.reduce((accumulator, entry) => {
                    const existingEntry = accumulator.find(item => item.Date === entry.Date);
                
                    if (existingEntry) {
                        existingEntry.Amount = (Number(existingEntry.Amount) + Number(entry.Amount)).toString();
                    } else {
                        accumulator.push({
                            Date: entry.Date,
                            Amount: entry.Amount
                        });
                    }
                    return accumulator;
                }, []);
                const totalDatesArray = groupedResult.map(entry => entry.Date);
                const totalAmountArray = groupedResult.map(entry => entry.Amount)
                return [totalDatesArray, totalAmountArray]; 
            } else if(total == "Individual")
            {
                console.log("chamou individual")
                const datesArray = filteredResult.map(entry => entry.Date);
                const amountsArray = filteredResult.map(entry => entry.Amount);

                return [datesArray, amountsArray];
            }
        }
    } catch (error)
    {
        return error.message; 
    }

}