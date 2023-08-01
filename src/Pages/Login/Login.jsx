import { styled } from "styled-components"
import InputLogin from "../../Componentes/ComponentesLogin/InputLogin"
export default function Login() {
    return (
        <Container>
            <p>Driven +</p>
            <InputLogin />
        </Container>
    )
}


const Container = styled.div`
   
    display: flex;

    width: 375px;
    height: 586px;

    background-color: #0E0E13;

    p{     
        text-align: center;
        color: #FFFFFF;
    }
`