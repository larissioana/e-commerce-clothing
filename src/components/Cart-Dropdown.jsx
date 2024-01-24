import styled from "styled-components";
import Button from "./Button";
import CartItem from "./Cart-Item";
import { useContext} from "react";
import { CartContext } from "../context/Cart-Context";
import { useNavigate } from "react-router-dom";

const CartDropdown = () =>
{
  const {cartItems} = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () =>
  {
    navigate('/checkout')
  };

    return (
        <Wrapper>
              <div className="cart-items">
                {
                  cartItems.map((item) => {
                  return <CartItem cartItem={item} key={item.id}/>
                })}
              </div>
             <Button onClick={goToCheckoutHandler}>Go to checkout</Button>
        </Wrapper>
    )
};
export default CartDropdown;

const Wrapper=styled.div`
position: absolute;
width: 23rem;
height: 25rem;
display: flex;
flex-direction: column;
padding: 1rem;
border: 1px solid #17181a;
background-color: rgb(243, 241, 241);
top: 5.5rem;
right: 3rem;
z-index: 10;

.cart-items
{
  height: 17rem;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
}

@media (max-width: 425px)
{
  width:15rem;
}
`;