import { styled } from "styled-components"
import logo from "../../assets/logo-home.png"
import InputLogin from "../../Componentes/ComponentesLogin/InputLogin"
export default function Login() {
    return (
        <Container>
            <img src={logo} alt="logo-login" />
            <InputLogin />
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

   

    img{
        width: 299px;
        height: 49px;

        margin-top: 100px;
    }
`