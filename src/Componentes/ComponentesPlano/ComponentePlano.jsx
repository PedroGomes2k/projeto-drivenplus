import { styled } from "styled-components"
import { useContext, useState } from "react"
import { TokenAut } from "../../Contex/Token"
import InputPlano from "./InputPlano"

export default function ComponentesPlano() {

    const { plano } = useContext(TokenAut)
    const { image,  price, name, id } = plano



    return (
        <Container>
            <img src={image} alt="Imagem-logo" />

            <h1>{name}</h1>

            <Beneficios>
                <ion-icon name="clipboard-outline" />
                <h2>Beneficios :</h2>

                <p>01. Brindes exclusivos</p>
                <p>02. Materiais bônus de web</p>

            </Beneficios>

            <Preco>
                <ion-icon name="cash-outline"></ion-icon>
                <h2>Preço :</h2>

                <p>{price} cobrados mensalmente</p>
            </Preco>


            <InputPlano
                id={id}
                price={price}
                name={name}
            />

        </Container>
    )
}

const Container = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 30px;

    h1{
        font-family: Roboto;
        font-size: 32px;
        font-weight: 700;
        line-height: 38px;
        letter-spacing: 0em;
        text-align: left;

        color: #FFFFFF;
    }

    ion-icon{
        width: 20px;
        height: 20px;
        
        color: #FF4791;

        margin-right: 10px;
    }

  
`

const Beneficios = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;

    width: 200px;
    
    margin-right: 110px;
    margin-top: 20px;

    h2{
        font-family: Roboto;
        font-size: 16px;
        font-weight: 400;
        line-height: 19px;
        letter-spacing: 0em;
        text-align: left;

        margin-bottom: 5px;

        color: #FFFFFF;
    }
    
    p{  
        font-family: Roboto;
        font-size: 14px;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: 0em;
        text-align: left;

        
        color: #FFFFFF;
    }
    

`

const Preco = styled.div`
    
    display: flex;
    
    flex-wrap: wrap;

    width: 200px;

    margin-right: 110px;
    margin-top: 20px;
    margin-bottom: 30px;

    h2{
        font-family: Roboto;
        font-size: 16px;
        font-weight: 400;
        line-height: 19px;
        letter-spacing: 0em;
        text-align: left;

        margin-bottom: 5px;

        color: #FFFFFF;
    }
    
    p{  
        font-family: Roboto;
        font-size: 14px;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: 0em;
        text-align: left;

        
        color: #FFFFFF;
    }
`
const ListaBeneficios = styled.div`
    
`