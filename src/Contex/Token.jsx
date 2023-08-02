import { createContext, useState } from "react";
export  const TokenAut = createContext()

export function TokenProvider({ children }) {

    const [token, setToken] = useState({})
    const [idPlano, setIdPlano] = useState()
    const [plano, setPlano] = useState([])


    return (

        <TokenAut.Provider value={{ token, setToken, idPlano, setIdPlano, plano , setPlano }}>
            {children}
        </TokenAut.Provider>

    )

}



