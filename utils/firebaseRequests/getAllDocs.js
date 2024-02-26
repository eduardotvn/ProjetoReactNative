import { getDocs, query, where } from "firebase/firestore";
import { dailySpendDB } from "../../firebase.config";


export const GetAllDailySpendData = async (userUID) => {
  try {
    const q = query(
      dailySpendDB,
      where('UserUID', '==', userUID),
    );
    const querySnapshot = await getDocs(q);

    const documents = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    documents.sort((a, b) => {
      const dateA = parseDate(a.Date);
      const dateB = parseDate(b.Date);
      return dateA - dateB;
    });

    return documents;
  } catch (error) {
    console.error('Error getting documents:', error.message);
    throw error;
  }
};

const parseDate = (dateString) => {
  const [day, month, year] = dateString.split('/');
  return new Date(`${year}-${month}-${day}`);
};