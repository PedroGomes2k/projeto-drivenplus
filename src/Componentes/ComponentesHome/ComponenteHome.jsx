import { useState } from "react"
import { styled } from "styled-components"
import { TokenAut } from "../../Contex/Token"

export default function ComponenteHome() {

    const { token, homeInf, idPlano } = useState(TokenAut)
    //const {image, name, perks} = homeInf
    

    return (
        <Container>
            <Topo>
                <img src={''} alt="logo-do-plano" />
                <ion-icon name="person-circle"></ion-icon>
            </Topo>
        </Container>
    )
}

const Container = styled.div`

    
`

const Topo = styled.div`
    display: flex;
    justify-content: space-around;

    
    ion-icon{
        margin-top: 30px;

        width: 34px;
        height: 34px;

        color: #FFFFFF;
    }

    img{
        margin-top: 30px;
        width: 75px;
        height: 50px;
    }
`