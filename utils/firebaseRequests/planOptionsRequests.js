import { addDoc, getDocs, query, where } from "firebase/firestore";
import { PlanningDB } from "../../firebase.config";

export const addPlanningData = (data) => {

    addDoc(PlanningDB, {
      Type: data.type,
      Category: data.category,
      UserUID: data.uid,
      Duration: data.duration,
      Date: data.date,
      Goal: data.goal,
    })
      .then(() => {
        console.log("Succesfuly created!")
      })
      .catch((error) => {
        console.log(error.message);
      })
  } 
  
  export const getPlanningData = async (userUID) => {
    try {
      const q = query(
        PlanningDB,
        where('UserUID', '==', userUID),
      );
      const querySnapshot = await getDocs(q);
  
      const documents = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
  
      return documents;
    } catch (error) {
      console.error('Error getting documents:', error.message);
      throw error;
    }
  }