import axios from "axios"
import { styled } from "styled-components"
import { Urls } from "../../Constantes/Urls"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export default function ButtonHome({ token }) {

    const navigate = useNavigate()
    const newStorage = localStorage.getItem("formHome")
    const formHome = JSON.parse(newStorage)

    console.log(formHome)

    function changePlan() {

        const config = {
            headers: {
                Authorization: `Bearer ${token.token}`
            }
        }

        const URL = axios.post(`${Urls}/subscriptions`,formHome, config)
            .then((res) => {
                navigate("/subscriptions")

            })
            .catch((erro) =>
                console.log("deu errado")
            )



    }

    function cancelPlan() {

        const config = {
            headers: {
                Authorization: `Bearer ${token.token}`
            }
        }

        const URL = axios.delete(`${Urls}/subscriptions`, config)
            .then(() => {

                navigate("/subscriptions")
            })
            .catch((erro) =>
                console.log(erro)
            )
    }

    return (
        <Container>
            <button onClick={() => changePlan()}> Mudar plano</button>

            <Button>
                <button onClick={() => cancelPlan()}> Cancelar plano</button>
            </Button>
        </Container>
    )
}

const Container = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;

    
    button{
       

        margin-top: 10px;
        
        width: 300px;
        height: 52px;

        border-radius: 8px;
        border: 1px solid #FF4791;

        background-color: #FF4791;
        color: #FFFFFF;


        text-align: center;
        font-family: Roboto;
        font-size: 14px;
        font-weight: 700;
        line-height: 16px;
        letter-spacing: 0em;
       
    }
`
const Button = styled.div`

    button{
        background-color: #FF4747;
        border: 1px solid #FF4747;
    }
`