import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./Pages/Login/Login"
import Cadastro from "./Pages/Cadastro/Cadastro"
import Plano from "./Pages/Plano/Plano"
import Planos from "./Pages/Planos/Planos"
import Home from "./Pages/Home/Home"
import { useContext } from "react"
import { TokenAut } from "./Contex/Token"


export default function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<Cadastro />} />
        <Route path="/subscriptions/ID_DO_PLANO" element={<Plano />} />
        <Route path="/subscriptions" element={<Planos />} />
        <Route path="/home" element={<Home />} />
      </Routes>

    </BrowserRouter>
  )
}


