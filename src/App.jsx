import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./Pages/Login/Login"
import Cadastro from "./Pages/Cadastro/Cadastro"
import Plano from "./Pages/Plano/Plano"
import Planos from "./Pages/Planos/Planos"
import Home from "./Pages/Home/Home"
export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<Cadastro />} />
        <Route path={`/subscriptions/$}`} element={<Plano />} />
        <Route path="/subscriptions" element={<Planos />} />
        <Route path="/home" element={<Home />} />
      </Routes>

    </BrowserRouter>
  )
}


