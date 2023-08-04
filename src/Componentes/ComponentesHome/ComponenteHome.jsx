
import { styled } from "styled-components"
import { TokenAut } from "../../Contex/Token"
import { useContext } from "react"
import ButtonHome from "./ButtonHome"

export default function ComponenteHome() {

    const { token , setToken} = useContext(TokenAut)
    const { membership, name } = token

    return (
        <Container>
            <Topo>
                <img src={membership.image} alt="logo-do-plano" />
                <ion-icon name="person-circle"></ion-icon>
            </Topo>
            <p>Olá, {name}</p>

            <Button>
                {membership.perks.map((m) =>

                    <button key={m.id}> {m.title} </button>
                )}
            </Button>
            <ButtonHome
                token={token}
                setToken={setToken}
                id={membership.id}
            />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    
    
    p{
        font-family: Roboto;
        font-size: 24px;
        font-weight: 700;
        line-height: 28px;
        letter-spacing: 0em;
        text-align: center;
        color: #FFFFFF;

        margin-top: 20px;
    
    }

   
    
`
const Button = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;

    height: 240px;

    margin-top: 20px;
    margin-bottom: 60px;


    button{
        margin-top: 10px;

        width: 300px;
        height: 52px;

        border-radius: 8px;
        border: 1px solid #FF4791;

        background-color: #FF4791;
        color: #FFFFFF;


        text-align: center;
        font-family: Roboto;
        font-size: 14px;
        font-weight: 700;
        line-height: 16px;
        letter-spacing: 0em;
       
    }

    
`

const Topo = styled.div`
    display: flex;
    justify-content: space-between;

    
    ion-icon{
        margin-top: 15px;
        margin-right: 15px;
        width: 34px;
        height: 34px;

        color: #FFFFFF;

        
    }

    img{

        margin-left: 40px;
        margin-top: 30px;
        width: 75px;
        height: 50px;
    }
`