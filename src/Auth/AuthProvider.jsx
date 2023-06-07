import { createContext, useEffect, useState } from "react";
import app from "../../firebase.config";
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";

export const AuthContext = createContext(); 
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const createUser = (email, password) =>{
        setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
    }
    const googleSignIn = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const signIn =(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = ()=>{
        setLoading(true)
        return signOut(auth);
    }
    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser)
        setLoading(false)
      });
      return ()=>{
        return unsubscribe();
      }
    }, []);
    
    const authInfo ={
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;