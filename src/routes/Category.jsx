import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { CategoriesContext } from "../context/Categories-Context";
import ProductCard from "../components/ProductCard";

const Category = () =>
{
    const {category} = useParams();
    const {categoriesMap} = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() =>
    {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <Wrapper>
            {
                products && products.map((product) => {
                return <ProductCard key={product.id} product={product}/>
                })
            }
        </Wrapper>
    )
};

export default Category;

const Wrapper=styled.div`
margin-top: 10rem;
margin-bottom: 4rem;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
gap: 1rem;
`;
