import styled from "styled-components";
import {motion} from 'framer-motion';

const CartItem = ({cartItem}) =>
{
    const {name, quantity, imageUrl, price} = cartItem;

    return (
        <Wrapper>
            <motion.img src={imageUrl} alt={name} animate={{opacity:1}} initial={{opacity:0}}/>
            <div className="item-detail">
                <p className="name">{name}</p>
                <p className="price">{quantity} x ${price}</p>
            </div>
        </Wrapper>
    )
};

export default CartItem;

const Wrapper=styled.div`
width: 100%;
display: flex;
height: 7rem;
margin-bottom: 2rem;
img
{
  object-fit: cover;
  width: 5rem;
}

.item-detail
{
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  .name,
  .price
  {
    font-size: .9rem;
  }
  .price
  {
    margin-top: .5rem;
  }
}
`;