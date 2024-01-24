import {AiFillShopping} from 'react-icons/ai';
import styled from 'styled-components';
import { CartContext } from '../context/Cart-Context';
import { useContext } from 'react';

const CartIcon = () =>
{
  const { isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
    
    return (
        <Wrapper onClick={toggleIsCartOpen}>
            <AiFillShopping className='shopping-icon'/>
            <span className='item-count'>{cartCount}</span>
        </Wrapper>
    )
};

export default CartIcon;

const Wrapper=styled.div`
width: 3rem;
height: 3rem;
position: relative;
display: grid;
place-items: center;
margin-left: auto;
cursor: pointer;
.shopping-icon
{
  width: 2rem;
  height: 2rem;
}

.item-count
{
    position: absolute;
    font-size: .7rem;
    font-weight: bold;
    bottom: .8rem;
    color: #ebebeb;
    z-index: 10;
}
`;