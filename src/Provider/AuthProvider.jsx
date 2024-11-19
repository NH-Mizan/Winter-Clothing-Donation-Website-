import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import React, { createContext, useEffect, useState } from 'react';
import app from '../MainRoute/firebase.init';


export const AuthContext = createContext()
const auth =  getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loder, setLodar] =useState(true)
   

    const createNewUser =(email,password)=>{
        setLodar(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userLogin=(email,password)=>{
        setLodar(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateUserDashboard =(updateData)=>{
        setLodar(true)
       
        return updateProfile(auth.currentUser, updateData)

       
    
    }

    const logOut = ()=>{
        setLodar(true)
        return signOut(auth)
    }



    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLodar(false);
        })
        return ()=>{
            unsubscribe() 
        }
    },[])
  
    
    const authInfo = {
        user,
        setUser,
        createNewUser,
        logOut,
        userLogin,
        loder,
        updateUserDashboard,
        
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;