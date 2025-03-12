import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({children}) => {
    const [userData, setUserData] = useState();


    // If user data is there, set user data into session storage
    useEffect(() => {
        if(userData?.data.access_token){
        sessionStorage.setItem('userData', JSON.stringify(userData))
    }
    }, [userData])

    useEffect(() => {
        if(!userData) {
            if(sessionStorage.getItem('userData')) {
                setUserData(JSON.parse(sessionStorage.getItem('userData')))
            }
        }
    }, [])

    return (
        <UserContext.Provider value={{ userData, setUserData }}>
            {children}
        </UserContext.Provider>
    )
}