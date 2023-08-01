import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { styled } from "styled-components"
import { Urls } from "../../Constantes/Urls"


export default function InputCadastro() {
    
    const navigate = useNavigate()
    
    const [form, setForm] = useState({ email: "", name: "", cpf: "", password: "" })

    function Login(e) {
        e.preventDefault()

        const URL = axios.post(`${Urls}/auth/sign-up`, form)
            .then((res) =>{
               
                navigate("/")
            }
            ).catch((erro) =>
                console.log(erro.error)
            )
    }
    return (
        <Container onSubmit={Login}>
            <form>
                <input
                    type="text"
                    placeholder="Nome"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                />

                <input
                    type="text"
                    placeholder="CPF"
                    value={form.cpf}
                    onChange={(e) => setForm({ ...form, cpf: e.target.value })}
                    required
                />
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

                <button type="submit"> CADASTRAR </button>
            </form>

            <Link to={"/"}>
                <p> Já possuí uma conta? Entre</p>
            </Link>
        </Container>
    )
}
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    align-items: center;
    
    
    input{

        display: flex;
        width: 299px;
        height: 52px;

       
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
    }

    p{
        display: flex;
        margin-right: 40px;
        margin-top: 25px;

        color:#FFFFFF;
        text-decoration: underline;
    }
`