import { createContext, useState } from "react";
export  const TokenAut = createContext()

export function TokenProvider({ children }) {

    const [token, setToken] = useState({})
    


    return (

        <TokenAut.Provider value={{ token, setToken }}>
            {children}
        </TokenAut.Provider>

    )

}



