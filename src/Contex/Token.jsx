import { createContext, useState } from "react";
export const TokenAut = createContext()

export function TokenProvider({ children }) {

    const [token, setToken] = useState([])
    
    const [homeInf, setHomeInf] = useState([])

    return (

        <TokenAut.Provider value={{ token, setToken, homeInf, setHomeInf }}>
            {children}
        </TokenAut.Provider>

    )

}



