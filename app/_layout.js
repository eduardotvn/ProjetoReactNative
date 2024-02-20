import { Slot } from "expo-router";
import AuthProvider from "../components/authProvider";

export default function Root(){
    return(<AuthProvider>
        <Slot/>
    </AuthProvider>)
}