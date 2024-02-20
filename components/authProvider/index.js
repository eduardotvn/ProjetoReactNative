import { getAuth, signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import { useRouter } from "expo-router";

export const AuthContext = createContext() 

export default function AuthProvider({children}){
    const[user, setUser] = useState(null)

    const auth = getAuth();
    const router = useRouter();

    const handleLogout = async () => {
        try {
          await signOut(auth);
          setUser(null);
          router.navigate('/')
        } catch (error) {
          console.error('Error signing out:', error.message);
        }
      };

    const tryLogin = async (email, password) => {
        signInWithEmailAndPassword(auth, email, password).then((userCredential) => { 
          setUser(userCredential.user);
          router.navigate('/home')
          }).catch((error) =>
      {
        return(error)
      })
    }
    

    return(<AuthContext.Provider
    value={{user: user, logout: handleLogout, auth: auth, login: tryLogin}}
    >
    {children}
    </AuthContext.Provider>)
}