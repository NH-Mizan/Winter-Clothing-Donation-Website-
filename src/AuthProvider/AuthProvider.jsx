import React, {  createContext, useState } from 'react';


export const AuthContext = createContext()

const AuthProvider = ({Children}) => {

    const [user, setUser] = useState()

    
    const authInfo = {
        user,
        setUser,

    }
    return (
        <AuthContext.Provider value={authInfo}>
          {Children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;