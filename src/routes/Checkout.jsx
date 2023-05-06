import styled from "styled-components";
import { useContext } from "react";
import { CartContext } from "../context/Cart-Context";
import {AiOutlineCaretDown, AiOutlineCaretUp} from 'react-icons/ai';
import {FaTrash} from 'react-icons/fa';
import PaymentForm from "../components/Payment-Form";
import ScrollTop from '../components/ScrollTop';

const Checkout = () => {
    const {
    cartItems, 
    addItemToCart, 
    removeItemFromCart, 
    clearItemFromCart,
    cartTotal
} = useContext(CartContext);
    
    return (
     
        <Wrapper>
            {cartItems.map((cartItem) => {
                const {name, quantity, id, imageUrl, price} = cartItem;
                return <div key={id} className='container'>
                <img src={imageUrl} alt={name}/>
                <h4>{name}</h4>
               <div className="quantity">
                <div className="left">
                <p>{quantity}</p>
                </div>
                <div className="right">
                <button onClick={() => removeItemFromCart(cartItem)}>
                    <AiOutlineCaretDown/>
                </button>
                <button onClick={() => addItemToCart(cartItem)}>
                    <AiOutlineCaretUp/>
                </button>
                </div>
               </div>
               <div className="price">
               <button className="clear-btn" onClick={() => clearItemFromCart(cartItem)}>
                <FaTrash/>
               </button>
               <p>${price}</p>
               </div>
                </div>
            })}
             {cartTotal?  <div className="total-price"> Items total: ${cartTotal}</div> 
            :<p className="empty-bag">Your bag is empty</p>
        }
        <PaymentForm/>
        <ScrollTop/>
        </Wrapper>
    )
    };

    export default Checkout;

    const Wrapper=styled.div`
    margin-top:12rem;
    margin-bottom:3rem;
    width:90vw;
    display: grid;
    
    h3{
        margin-bottom:8rem;
        text-align: center;
        font-weight: bolder;
        font-size:clamp(1rem, 2vw, 1.2rem);
    }
    .container{
       margin:0rem 2rem;
       display:flex;
       justify-content: center;
       align-items: center;
       margin-bottom:6rem;
       border-bottom: 1px solid #c3c5c9;
       width:60rem;
   
       h4{
           font-size:clamp(.7rem, 2vw, 1.1rem);
           margin-top:-14rem;
           margin-left:2rem;
           width:10rem;
           
       }
       
       img{
           width:8rem;
           object-fit: cover;
           margin-bottom:1.5rem;
       }
     }
    .quantity{
       display:flex;
       justify-content: center;
       align-items: center;
       border:1px solid #17181a;
       width:5.5rem;
       height:3rem;
       padding:2rem;
       cursor:pointer;
       margin-left:3rem;
       color:#17181a;
       
       button{
        color:#17181a;
       }
       .left,.right{
           flex:1;
       }
   
       .left{
           p{
               font-weight: bold;
               margin-right:.5rem;
               font-size:clamp(.8rem, 2vw,.9rem);
           }
       }
    }
   
   .price{
       margin-left:2rem;
       .clear-btn{
           cursor:pointer;
           color: #c3c5c9;
           font-size:1.1rem;
           
       }
       p{
           margin-top:2rem;
           font-weight: bold;
           font-size:clamp(.8rem, 2vw,1rem);
       }
   }
   .total-price, .empty-bag{
       text-align: center;
       font-weight: bold;
       font-size:clamp(1.2rem, 2vw, 1.5rem);
   }

   
   @media (max-width:768px){
       .container{
           width:100%;
           flex-direction: row;
           justify-content: center;
           align-items: center;
           margin-left:1rem;

           .left, .right{
            display:grid;
           }
           h4{
            width:5rem;
           }
           img{
            width:4.5rem;
           }
         
           .quantity{
               padding:1rem;
               margin-top:1rem;
               width:3rem;
               margin-left:0rem;
           
           }
           .price{
               margin-top:3rem;
               flex-direction:column;
               display:flex;
               margin-right:.4rem;
               p{
                   margin-top:1rem;
                   margin-left:1rem;
               }
           }
       }
   }
   `;
   
   