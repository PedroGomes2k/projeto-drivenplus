import { styled } from "styled-components"
import InputCadastro from "../../Componentes/ComponentesCadastro/InputCadastro"

export default function Cadastro() {
    return (
        <Container>
            <InputCadastro />
        </Container>
        
    )
}


const Container = styled.div`
 display: flex;
 justify-content: center;
 width: 375px;
 height: 586px;

 background-color: #0E0E13;


`