import axios from "axios"
import { useState, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { styled } from "styled-components"
import { Urls } from "../../Constantes/Urls"
import { TokenAut } from "../../Contex/Token"

export default function Login() {

    const { token, setToken } = useContext(TokenAut)
    const navigate = useNavigate()
    const [form, setForm] = useState({ email: "", password: "" })


    function Login(e) {
        e.preventDefault()

        const URL = axios.post(`${Urls}/auth/login`, form)
            .then((res) => {
                console.log(res.data)
              
                if (res.data.membership === null || undefined) {
                   
                    navigate("/subscriptions")
                } else {

                   
                    navigate("/home")
                }


            })
            .catch((erro) => {
                alert("Email ou Senhas incorretos, tente novamente !")
                console.log(erro.error)
            })
    }

    return (
        <Container onSubmit={Login}>
            <form>
                <input
                    type="email"
                    placeholder="E-mail"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                />



                <input
                    type="password"
                    placeholder="Senha"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    required
                />

                <button type="submit"> ENTRAR </button>
            </form>

            <Link to={"/sign-up"}>
                <p> Não possuí uma conta? Cadastre-se</p>
            </Link>
        </Container>
    )
}
const Container = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 80px;
    
    input{
        display: flex;
        justify-content: center;

        width: 299px;
        height: 52px;

        margin:0px;
        margin-top: 15px;

        border: 1px solid #FFFFFF;
        border-radius: 8px;
        background-color: #FFFFFF;

        color: #666666;
    }

    button{ 

        width: 299px;
        height: 52px;

        border: 1px solid #FF4791;
        border-radius: 8px;

        background-color: #FF4791;
        color: #FFFFFF;

        margin-top: 40px;

        justify-content: center;
        align-items:center;
    }

    p{
        display: flex;
        margin-right: 40px;
        margin-top: 25px;

        text-decoration: underline;

        color: #FFFFFF;
    }

    a:link{
            text-decoration: none;
        }
`