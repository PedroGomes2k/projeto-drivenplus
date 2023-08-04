import axios from "axios"
import { useEffect, useState } from "react"
import { styled } from "styled-components"
import { Urls } from "../../Constantes/Urls"
import { useContext } from "react"
import { TokenAut } from "../../Contex/Token"
import ContainersPlanos from "../../Componentes/ComponentesPlanos/ContainersPlanos"



export default function Planos() {
    const { token } = useContext(TokenAut)
    const [planos, setPlanos] = useState([])

   
    useEffect(() => {

        const config = {
            headers: {
                Authorization: `Bearer ${token.token}`
            }
        }

        const URL = axios.get(`${Urls}/subscriptions/memberships`, config)
            .then((res) =>
                setPlanos(res.data)
            ).catch((erro) =>
                console.log(erro.error)
            )

    }, [])


    return (
        <Container>

            <p> Escolha seu Plano</p>

            {planos && planos.map((p) =>

                <ContainersPlanos
                    key={p.id}
                    id={p.id}
                    image={p.image}
                    price={p.price}
                />
            )}

        </Container>
    )
}


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 375px;
    height: 586px;

    background-color: #0E0E13;
   

   p{
        font-family: Roboto;
        font-size: 32px;
        font-weight: 700;
        line-height: 38px;
        letter-spacing: 0em;
        text-align: left;

        color: #FFFFFF;

     
        margin-top: 20px;
        margin-bottom: 30px;
   }
`
