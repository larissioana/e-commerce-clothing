import styled from "styled-components";
import Button from "./Button";
import {
    CardNumberElement,
    CardCvcElement,
    CardExpiryElement,
    AddressElement,
    useStripe,
    useElements
} from "@stripe/react-stripe-js";
import { UserContext } from "../context/User-Context";
import { CartContext } from "../context/Cart-Context";
import { useContext} from "react";

const PaymentForm = () =>
{
    const stripe = useStripe();
    const elements = useElements();
    const {currentUser} = useContext(UserContext);
    const {cartTotal} = useContext(CartContext);
    const amount = cartTotal;

    const paymentHandler = async (event) =>
    {
        event.preventDefault();
    
    if (!stripe || !elements)
    {
        return;
    }
        
    const response = await fetch('/.netlify/functions/create-payment-intent',
    {
        method: 'post',
        headers:
        {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: amount * 100}),
    }).then((res) => {
        return res.json();
        });
      
    const{paymentIntent: {client_secret}} = response;

    const paymentResult = await stripe.confirmCardPayment(client_secret,
    {
        payment_method:
        {
            card: elements.getElement(CardCvcElement, CardExpiryElement, CardNumberElement, AddressElement),
            billing_details:
            {
                name: currentUser ? currentUser.displayName : 'Guest',
            }
        }
    });

    if (paymentResult.error)
    {
        alert(paymentResult.error)
    } else
    {
        if (paymentResult.paymentIntent.status === 'succeeded')
        {
           alert('Your order has been successfully placed')
        }
    }
    }

    return (
        <Wrapper>
            <h2>Credit card payment: test payment</h2>
            <form onSubmit={paymentHandler}>
                <AddressElement
                    className = "card card-adress"
                    options = {{
                    mode: 'shipping',
                    }}
                />
                <span className="test-card">Enter the test card number: 4242 4242 4242 4242</span>
                <span>Card number</span>
                <CardNumberElement className="card" placeholder="test"/>
                <span>Expiration</span>
                <CardExpiryElement className="card"/>
                <span>CVC</span>
                <CardCvcElement className="card"/>
                <Button>Pay now</Button>
            </form>
        </Wrapper>
    )
};

export default PaymentForm;

const Wrapper = styled.div`
    margin-top: 10rem;
    width: 100vw;
    display: grid;
    place-items: center;

    h2 
    {
        margin-bottom: 2rem;
        font-size: clamp(1rem, 2vw, 1.2rem);
    }

    form
    {
        display: grid;
        width: 30rem;
        border: 1px solid #171a1a;
        padding: 2rem;
        filter: drop-shadow(5px 5px 10px rgba(0,0,0,0.2));

    span
    {
        margin-bottom: 6rem;
        text-indent: .6rem;
        font-size: .9rem;
    }
    
    .test-card
    {
        color: #ca4705;
        text-align: center;
        line-height: 1.3rem;
        padding-bottom: 1rem;
        font-weight: bolder;
    }

    }
    .card
    {
        margin-bottom: 1rem;
        width: 100%;
        padding: 1rem;
        background: #FDFDFD;
    }

    .card-adress
    {
        border: none;
        background: none;
    }

    @media (max-width: 495px)
    {
        form
        {
            width: 20rem;
        }
    }
    
    @media (max-width: 340px)
    {
        form
        {
            width: 16rem;
        }
     }
`;



