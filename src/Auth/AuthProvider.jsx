import { createContext, useEffect, useState } from "react";
import app from "../../firebase.config";
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import axios from "axios";

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
    const updateUserProfile = (name, photo) => {
      return updateProfile(auth.currentUser, {
          displayName: name, photoURL: photo
      });
  }
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth);
    }
    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser)

        // get and set token
        if(currentUser){
          axios.post('http://localhost:5000/jwt', {email: currentUser.email})
          .then(res =>{
            localStorage.setItem('access-token', res.data.token)
            setLoading(false)
          })
        }
        else{
          localStorage.removeItem('access-token')
        }
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
        updateUserProfile,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;