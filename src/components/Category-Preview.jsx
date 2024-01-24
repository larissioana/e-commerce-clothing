import styled from "styled-components";
import ProductCard from "./ProductCard";

const CategoryPreview = ({title, products}) =>
{
    return (
        <Wrapper>
            <div className="category-container">
                <h2>
                    {title}
                </h2>
                <div className="products">
                    {
                      products.filter((_, index) => index <4)
                        .map((product) => 
                        <ProductCard key={product.id} product={product}/>
                    )
                }
                </div>
            </div>
        </Wrapper>
    )
};

export default CategoryPreview;

const Wrapper = styled.div`
display: grid;
place-items: center;

.category-container
{
    display: grid;
    place-content: center;
    place-items: center;
    margin-top:-17rem;
   
    h2
    {
        font-size: clamp(1.5rem, 2vw, 2.5rem);
        text-transform: uppercase;
        margin-top: 4rem;
        font-family: 'Calligraffitti', cursive;
    }
}

.products
{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    column-gap: 1rem;
    margin-bottom: 22rem;
    margin-top: 2rem;
    
    img
    {
        width: 20rem;
        height: 25rem;
        object-fit: cover;
    }
}
`;