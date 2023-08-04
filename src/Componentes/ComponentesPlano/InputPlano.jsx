import { useState } from "react"
import { styled } from "styled-components"
import ButtonChose from "./ButtonChose"

export default function InputPlano({ id, name, price }) {

    const [disabled, setDisabled] = useState("waitchose")
    const [form, setForm] = useState({ membershipId: "", cardName: "", cardNumber: "", securityNumber: "", expirationDate: "" })


    const formStorage = JSON.stringify(form)
    localStorage.setItem("formHome", formStorage)

    function BuyShip(e) {
        e.preventDefault()
        setForm({ ...form, membershipId: id })
        setDisabled("finalizar")

    }


    if (disabled === "waitchose") {
        return (

            <Container onSubmit={BuyShip}>

                <form>
                    <input
                        type="text"
                        placeholder="   Nome impresso no cartão"
                        value={form.cardName}
                        onChange={(e) => setForm({ ...form, cardName: e.target.value })}
                        required
                    />
                    <input
                        type="text"
                        placeholder="   Digitos do cartão"
                        value={form.cardNumber}
                        onChange={(e) => setForm({ ...form, cardNumber: e.target.value })}
                        required
                    />

                    <SegurançaCartao>
                        <input
                            type="text"
                            placeholder="   Código de segurança"
                            value={form.securityNumber}
                            onChange={(e) => setForm({ ...form, securityNumber: e.target.value })}
                            required
                        />
                        <input
                            type="text"
                            placeholder="   Validade"
                            value={form.expirationDate}
                            onChange={(e) => setForm({ ...form, expirationDate: e.target.value })}
                            required
                        />
                    </SegurançaCartao>

                    <button type="submit" > ASSINAR</button>
                </form>

            </Container>
        )
    } else {
        return (
            <ButtonChose
                setDisabled={setDisabled}
                name={name}
                price={price}
                form={form}
            />
        )
    }

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