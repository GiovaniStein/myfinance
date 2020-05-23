import React, { createContext, useState, useContext} from "react";

const AppContext = createContext();

export function AppProvider({ children, ...props }) {

    const [userAuth, setUserAuth] = useState(false);

    return (
        <AppContext.Provider value={{
            userAuth,
            setUserAuth,
        }
        }>{children}</AppContext.Provider>
    )
}

export function useUserAuth() {
    const context = useContext(AppContext);
    const { userAuth, setUserAuth } = context;
    return { userAuth, setUserAuth };
}