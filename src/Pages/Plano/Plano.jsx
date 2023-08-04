import { styled } from "styled-components"
import ComponentesPlano from "../../Componentes/ComponentesPlano/ComponentePlano"
import { Link, useNavigate, useParams } from "react-router-dom"
import { Urls } from "../../Constantes/Urls"
import axios from "axios"
import { useContext, useEffect } from "react"
import { TokenAut } from "../../Contex/Token"


export default function Plano() {
    const { idPlano } = useParams()
    const { token, setPlano } = useContext(TokenAut)

    useEffect(() => {

        const config = {
            headers: {
                Authorization: `Bearer ${token.token}`
            }
        }
        const URL = axios.get(`${Urls}/subscriptions/memberships/${idPlano}`, config)
            .then((res) => {

            setPlano(res.data)

            }).catch((erro) =>
                console.log(erro.error)
            )

    }, [idPlano])

    return (
        <Container>

            <Link to={"/subscriptions"}>
                <Icon >
                    <ion-icon name="arrow-back-outline"></ion-icon>
                </Icon>
            </Link>

            <ComponentesPlano />


        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;

    width: 375px;
    height: 586px;

    background-color: #0E0E13;

    img{

        width: 140px;
        height: 95px;
    }
`
const Icon = styled.div`
    
    position: fixed;

   
    ion-icon{
        display: flex;
        width: 28px;
        height: 32px;

        color: #FFFFFF;

        margin-top: 20px;
    }
`