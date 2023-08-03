import { styled } from "styled-components"
import ComponenteHome from "../../Componentes/ComponentesHome/ComponenteHome"

export default function Home(){
    return(
        <Container>
            <ComponenteHome/>
        </Container>
    )
}

const Container =  styled.div`
    
    width: 375px;
    height: 586px;

   background-color: #0E0E13;
`