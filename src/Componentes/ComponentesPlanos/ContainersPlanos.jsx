import { useContext, useEffect } from "react"
import { styled } from "styled-components"
import { TokenAut } from "../../Contex/Token"
import axios from "axios"
import { Urls } from "../../Constantes/Urls"
import { useNavigate } from "react-router-dom"


export default function ContainersPlanos({ id, price, image }) {

    const navigate = useNavigate()
    const { setIdPlano, idPlano, token , setPlano } = useContext(TokenAut)

    function ClickPlano(i) {

        setIdPlano(i)
    }

    
    useEffect(() => {

        const config = {
            headers: {
                Authorization: `Bearer ${token.token}`
            }
        }
        const URL = axios.get(`${Urls}/subscriptions/memberships/${idPlano}`, config)
            .then((res) =>{

                setPlano(res.data)
                navigate("/subscriptions/ID_DO_PLANO")
                
            }).catch((erro) =>
                console.log(erro.error)
            )

    }, [idPlano])


    return (
        <CardPlanos onClick={() => ClickPlano(id)}>
            <img src={image} alt="imagens-dos-planos" />
            <p>{price}</p>
        </CardPlanos>
    )
}

const CardPlanos = styled.button`
    display: flex;
    justify-content: space-around;
    align-items: center;
    
    width: 290px;
    height: 180px;
    
    border-radius: 12px;
    border: 3px solid #7E7E7E;
    background-color: #0E0E13;

    margin-bottom: 15px;

    img{   

        width: 140px;
        height: 95px;
    }

    p{  
 
        font-family: Roboto;
        font-size: 24px;
        font-weight: 700;
        line-height: 28px;
        letter-spacing: 0em;
        text-align: left;

    }
`