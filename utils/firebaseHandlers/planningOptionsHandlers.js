import { addPlanningData, getPlanningData } from "../firebase.config";
import { formatDate } from "../utils/dateHelper";

export const addPlan = async (type, category, duration, goal, uid) => {
    const date = formatDate();
    const Plan = {
        type: type,
        category: category,
        duration: duration,
        goal: goal,
        uid: uid,
        date: date,
    }
    try{
        addPlanningData(Plan);
    }catch(error)
    {
        console.log("Erro na criação do plano")
        return(error.message)
    }

}

export const fetchPlans = async (user) => {
    try {
        const data = await getPlanningData(user.uid);
        return data;
    } catch (error) {
        return null;
    }
}

