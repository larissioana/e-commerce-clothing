import styled from "styled-components";
import Button from "./Button";
import { useContext } from "react";
import { CartContext } from "../context/Cart-Context";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ProductCard = ({product}) =>
{
    const {name, price, imageUrl} = product;
    const {addItemToCart} = useContext(CartContext);
    
    const addProductToCart = () => addItemToCart(product);

    return (
        <Wrapper>
            <LazyLoadImage src={imageUrl} alt={name} width='300' height='300'/>
            <div className="products-details">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
           <Button onClick={addProductToCart}>Add to my bag</Button>
        </Wrapper>
    )
};

export default ProductCard;

const Wrapper=styled.div`
 display: grid;
 grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
 place-items: center;
 gap: 2rem;
 margin-bottom: 4rem;
 
button
{
  margin-top: -.6rem;
}

img
{
  width: 25rem;
  height: 35rem;
  object-fit: cover;
  margin-top: 2rem;
  transition: all .1s ease-in;
    &:hover
    {
      transform: translateY(-5px);
    }
}

@media (max-width: 600px)
{
  grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));

    img
    {
      width: 11rem;
      height: 15rem;
    }

    .products-details
    {
      display: grid;
      line-height: 2rem;
    }
}

.products-details
{
  margin-top: 1rem;

  .price
  {
    margin-left: 1rem;
  }
}
`;