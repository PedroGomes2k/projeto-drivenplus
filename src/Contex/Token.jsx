import { createContext, useState } from "react";
export  const TokenAut = createContext()

export function TokenProvider({ children }) {

    const [token, setToken] = useState({})
    const [idPlano, setIdPlano] = useState()
    const [plano, setPlano] = useState([])
    const [homeInf, setHomeInf] = useState([])

    return (

        <TokenAut.Provider value={{ token, setToken, idPlano, setIdPlano, plano , setPlano, homeInf, setHomeInf }}>
            {children}
        </TokenAut.Provider>

    )

}



