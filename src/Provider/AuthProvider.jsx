import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import React, { createContext, useEffect, useState } from 'react';
import app from '../MainRoute/firebase.init';
;


export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loder, setLodar] = useState(true)


    const createNewUser = (email, password) => {
        setLodar(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userLogin = (email, password) => {
        setLodar(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateUserDashboard = (updateData) => {


        return updateProfile(auth.currentUser, updateData)



    }

    const logOut = () => {
        setLodar(true)
        return signOut(auth)
    }

    const googleProvider = new GoogleAuthProvider()

    const handleGooleSinIn = () => {
        setLodar(true)
        return signInWithPopup(auth, googleProvider)
            .then(res => {
                setUser(res.user)

            })

    }
    const forgetProvider = (email) => {

      return  sendPasswordResetEmail(auth, email)
            
    }



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