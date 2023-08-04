import { useContext, useEffect } from "react"
import { styled } from "styled-components"
import { useNavigate } from "react-router-dom"


export default function ContainersPlanos({ id, price, image }) {

    const navigate = useNavigate()
    

    function ClickPlano(id) {


        navigate(`/subscriptions/${id}`)
    }





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