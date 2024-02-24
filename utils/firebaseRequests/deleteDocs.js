import { deleteDoc, doc } from "firebase/firestore";
import { PlanningDB, dailySpendDB } from "../../firebase.config";


export const deleteDocument = async (databaseName, docID) => {
    try {
      switch (databaseName) {
        case "dailySpend":
          const dailySpendDoc = doc(dailySpendDB, docID);
          await deleteDoc(dailySpendDoc);
          console.log("Deletado com sucesso")
          return true;
        case "planning": 
          const planDoc = doc(PlanningDB, docID);
          await deleteDoc(planDoc);
          console.log("Plano deletado com sucesso")
          return true; 
        default:
          break;
      }
    } catch (error) {
      console.log("Não foi possível deletar o documento.")
      console.log(error.message)
    }
  
  }