import React, { createContext, useState } from "react";

export const AuthContext = createContext({
    auth: undefined as any,
    login: (userData) => { },
    logout: () => { }
});

export const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState<any>(undefined);

    const login = (userData) => {
        setAuth(userData);
    };

    const logout = () => {
        setAuth(undefined);
    };

    const valueContext = {
        auth,
        login,
        logout
    };

    return (
        <AuthContext.Provider value={valueContext}>
            {children}
        </AuthContext.Provider>
    );
};