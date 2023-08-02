import { styled } from "styled-components"

export default function InputPlano() {

    return (
        <Container>
            <fomr>
                <input
                    type="text"
                    placeholder="   Nome impresso no cartão"
                    required
                />
                <input
                    type="text"
                    placeholder="   Digitos do cartão"
                    required
                />

                <SegurançaCartao>
                    <input
                        type="text"
                        placeholder="   Código de segurança"
                        required
                    />
                    <input
                        type="text"
                        placeholder="   Validade"
                        required
                    />
                </SegurançaCartao>

                <button type="submit"> ASSINAR</button>
            </fomr>
        </Container>
    )

}

const Container = styled.div`

    input{
        display: flex;
        width: 300px;
        height: 52px;

        border-radius: 8px;
        border: 1px solid #FFFFFF;
        background-color: #FFFFFF;

        margin-bottom: 6px;
    }

    button{
        width: 300px;
        height: 52px;

        background-color: #FF4791;
        border: 1px solid #FF4791;
        border-radius: 8px;

        color: #FFFFFF;

        font-family: Roboto;
        font-size: 14px;
        font-weight: 700;
        line-height: 16px;
        letter-spacing: 0em;
        text-align: left;

        text-align: center;
    }
`

const SegurançaCartao = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 300px;

    input{
        width: 145px;
        margin-left: 5px;
    }
`