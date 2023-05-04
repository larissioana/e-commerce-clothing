import styled from "styled-components";
import { CategoriesContext } from "../context/Categories-Context";
import { useContext, useEffect, useState } from "react";
import CategoryPreview from "../components/Category-Preview";

const photos = [
    'https://i.ibb.co/61kfRRZ/pexels-godisable-jacob-987577.jpg',
    'https://i.ibb.co/nMd2H0n/pexels-godisable-jacob-910062.jpg',
    'https://i.ibb.co/LxLfssZ/pexels-mart-production-8945083.jpg',
    'https://i.ibb.co/fdhKBF6/pexels-godisable-jacob-1942882.jpg',
    'https://i.ibb.co/gRnFjPP/pexels-godisable-jacob-2703181.jpg',
    'https://i.ibb.co/smnSV32/pexels-mikhail-nilov-7625122.jpg'
    
];

const CategoriesPreview = () => {
    const [currentImage, setCurrentImage] = useState(photos);
    const {categoriesMap} = useContext(CategoriesContext);

    useEffect(() => {
    const time = setInterval(() => {
    setCurrentImage(photos[Math.floor(Math.random() * photos.length)])
    },1500);
     return () => clearInterval(time);
   },[])

    return (
        <div className="categories-preview-container">
        <Wrapper>
        <div className="image-gallery">
        <img src={currentImage} alt='clothes gallery'/>
        </div>
        <div className="title">
            <h1 className="color">New <br/> Connection</h1>
            <h1>With the</h1>
            <h1>New generation</h1>
        </div>
        <Categories>
            <div className="category-preview">
        {
        Object.keys(categoriesMap).map((title) => {
            const products = categoriesMap[title];
            return <CategoryPreview key={title} title={title} products={products}/>
        })
                
    }
            </div>
        </Categories>
        </Wrapper>
        </div>
    )
};

export default CategoriesPreview;


const Wrapper = styled.div`
    background:#eeebeb;
    width:100vw;

    .image-gallery{
     width:100vw;
     margin-top:-24rem;
   

    img{
        width:100%;
        object-fit: cover;
        transform: rotate(90deg);
    }
    @media (max-width:1100px){
        margin-top:5rem;
        margin-bottom:14rem;
        
    img{
        transform:none;
        width:100vw;
   }
  }
  
}
.title{
    display:grid;
    place-content: center;
    padding-bottom:8rem;
    margin-top:-10rem;
  
     h1{
        color:#17181a;
        text-transform: uppercase;
        font-size:clamp(2rem, 4vw, 3.8rem);
    }
    .color{
        color:#A61A4C;
    }
  }
`;
   
const Categories = styled.div`
   margin-top:15rem;

  `
   
   

