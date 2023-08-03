import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { styled } from "styled-components"
import { TokenAut } from "../../Contex/Token"
import { Urls } from "../../Constantes/Urls"
import axios from "axios"

export default function ButtonChose({ name, price, setDisabled, form }) {

    const { token, setHomeInf, homeInf } = useContext(TokenAut)
    const navigate = useNavigate()

    console.log(token)
    

    function clickNao() {
        setDisabled("waitchose")

    }

    function clickSim() {

        const config = {
            headers: {
                Authorization: `Bearer ${token.token}`
            }
        }

        const URL = axios.post(`${Urls}/subscriptions`, form, config)
            .then((res) => {


                setHomeInf(res.data)
                navigate("/home")

            }).catch((erro) =>
                alert("Dados incorretos tente novamente!")
            )
    }

    return (
        <>

            <Container >

                <form>
                    <input
                        type="text"
                        placeholder="   Nome impresso no cartão"
                    />
                    <input
                        type="text"
                        placeholder="   Digitos do cartão"

                    />

                    <SegurançaCartao>
                        <input
                            type="text"
                            placeholder="   Código de segurança"
                        />
                        <input
                            type="text"
                            placeholder="   Validade"
                        />
                    </SegurançaCartao>

                    <button type="submit" > ASSINAR</button>
                </form>

            </Container>

            <ContainerPergunta>
                <ion-icon name="close-outline" onClick={() => clickNao()}></ion-icon>
                <CardPergunta>
                    <p>Tem certeza que que deseja assinar o plano</p>
                    <p>{name} ({price})</p>
                    <ContainerButton>
                        <Button>
                            <button onClick={() => clickNao()}>Não</button>
                        </Button>
                        <button onClick={() => clickSim()}>SIM</button>
                    </ContainerButton>
                </CardPergunta>
            </ContainerPergunta>

        </>
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

    position: relative;
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
const ContainerPergunta = styled.div`
    width:375px;
    height: 586px;
    
    background-color:#000000B2;
    top:0px;
    
    position: absolute;

    ion-icon{
        display: flex;
        width: 28px;
        height: 28px;

        position: absolute;
        left: 327px;
        top: 20px;

        border-radius: 5px;
        background-color: #FFFFFF;
        color:  black;
    }
`

const CardPergunta = styled.div`
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    width: 248px;
    height: 210px;
    background-color: #FFFFFF;
    border-radius: 12px;

    position: absolute;
    bottom: 220px;
    left: 65px;

    text-align: center;

    p{
        font-family: Roboto;
        font-size: 18px;
        font-weight: 700;
        line-height: 21px;
        letter-spacing: 0em;
        text-align: center;
    }
`

const ContainerButton = styled.div`
    display: flex;
    width: 205px;
    justify-content: space-between;


    button{
    width: 95px;
    height: 52px;
    
    border-radius: 8px;
    margin-top: 30px ;

    background-color:  #FF4791;
    border: 1px solid  #FF4791;

    color: #FFFFFF;
    }
`
const Button = styled.div`
    
    button{
    background-color:  #CECECE;
    border: 1px solid  #CECECE;
    }
`