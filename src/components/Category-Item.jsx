import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const CategoryItem = ({category}) => {
    const {imageUrl, title, route} = category;
    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route);

    return (
        <Wrapper onClick={onNavigateHandler}>
        <div className="category-container">
        <div className="background-image" style={{
          backgroundImage:`url(${imageUrl})`
        }}/>
        <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop now</p>
        </div>
        </div>
        </Wrapper>
    )
};

export default CategoryItem;

const Wrapper=styled.div`
overflow-x: hidden;
.category-container {
     height:40rem;
     display:grid;
     place-items: center;
     overflow:hidden;
     margin-bottom:1.5rem;
    
     &:hover {
      cursor: pointer;
  
      & .background-image {
        transform: scale(1.1);
        transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
      }
  
      & .category-body-container {
        background-color: rgba(0,0,0,0.7);
      }
    }
    .background-image {
      width: 90%;
      height: 80%;
      background-size: cover;
      background-position:center;
     
      &:hover{
        filter:grayscale(20%);
      }
    }
  
    .category-body-container {
      margin-top:3rem;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border: 2px solid #ebebeb;
      color:#ebebeb;
      background-color: rgba(0,0,0,0.3);
      position: absolute;

      h2{
        font-weight: lighter;
      }
      p {
        font-weight: lighter;
        font-size: clamp(.8rem, 2vw, 1rem);
      }
    }
  }
`;
