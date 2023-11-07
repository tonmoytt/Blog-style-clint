import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import app from "../FIREASE/FIREASE.CONFIG.JS";


export const AuthConnect = createContext(null)
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// eslint-disable-next-line react/prop-types
const AUthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading,setloading]=useState(true)
    const CreateUser = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const Login = (email, password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const Google = () => {
        setloading(true)
        return signInWithPopup(auth, provider)
    }
    const Signout = () => {
        setloading(true)
        return signOut(auth)
    }
    useEffect(() => {
        const Unsubscribes = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser)
            setloading(false)
        })
        return () => Unsubscribes()
    }, [])



    const info = { user, CreateUser, Login, Google, Signout,loading }
    return (
        <div>
            <AuthConnect.Provider value={info}>
                {children}
            </AuthConnect.Provider>
        </div>
    );
};

export default AUthProvider;