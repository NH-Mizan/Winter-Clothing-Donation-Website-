import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import React, { createContext, useEffect, useState } from 'react';
import app from '../MainRoute/firebase.init';
;


export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loder, setLodar] = useState(true)

// New user Register info 
    const createNewUser = (email, password) => {
        setLodar(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
// Login user data Function
    const userLogin = (email, password) => {
        setLodar(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
// Update user data Function
    const updateUserDashboard = (updateData) => {


        return updateProfile(auth.currentUser, updateData)



    }
// Log Out user Function 
    const logOut = () => {
        setLodar(true)
        return signOut(auth)
    }
// Google Login / register user Function 

    const googleProvider = new GoogleAuthProvider()

    const handleGooleSinIn = () => {
        setLodar(true)
        return signInWithPopup(auth, googleProvider)
            .then(res => {
                setUser(res.user)

            })

    }
// Forget user Password Change Function
    const forgetProvider = (email) => {

      return  sendPasswordResetEmail(auth, email)
            
    }


// user data change to currentuser Show And change store data
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLodar(false);
        })
        return () => {
            unsubscribe()
        }
    }, [])


    const authInfo = {
        user,
        setUser,
        createNewUser,
        logOut,
        userLogin,
        loder,
        updateUserDashboard,
        handleGooleSinIn,
        forgetProvider

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;