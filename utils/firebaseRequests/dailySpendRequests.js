import { addDoc, getDocs, where, query, doc } from "firebase/firestore";
import { dailySpendDB } from "../../firebase.config";


export const addDailySpendData = (data) => {

    addDoc(dailySpendDB, {
      Date: data.day,
      Hour: data.hour,
      Amount: data.amount,
      Category: data.category,
      UserUID: data.uid,
    })
      .then(() => {
        console.log("Succesfuly created!")
      })
      .catch((error) => {
        console.log(error.message);
      })
  }
  
  export const getDailySpendDataByUserUID = async (userUID, selectedDate) => {
    try { 
      const q = query(
        dailySpendDB,
        where('UserUID', '==', userUID),
        where('Date', '==', selectedDate)
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
  };
  