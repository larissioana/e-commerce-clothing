import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Banner = () => {
    const navigate = useNavigate();

    const onNavigateHandler = () => {
    navigate('/shop/women')
    };

    return (
    <Wrapper>
     <div className="left-container">
        <h3>Celebrate</h3>
        <p onClick={onNavigateHandler}>Looks for occasions</p>
     </div>
     <div className="right-container">
        <img src='https://i.ibb.co/0YYW5y1/pexels-godisable-jacob-912787-1.png' alt='banner clothing'/>
     </div>
    </Wrapper>
    )
};

export default Banner;

 const Wrapper = styled.div`
    margin-top:5rem;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background:#F8F8F8;
    overflow-x: hidden;

   .left-container{
    h3{
        font-family: 'Calligraffitti', cursive;
        font-size:clamp(3rem, 6vw, 6rem);
     }
     p{
        text-transform: uppercase;
        font-weight: bolder;
        font-size:.9rem;
        letter-spacing: .2rem;
        transition:all .4s ease-in;
        cursor:pointer;
        :hover{
            transform:translateY(-5px);
        }
     }
   }
    .right-container{
        padding-left: 2rem;
        overflow-x: hidden;
        img{
            width:50rem;
            height:45rem;
            object-fit: cover;
            object-position: top;
            overflow-x: hidden;
        }
    }
    @media (max-width:490px){
        img{
          max-width:30rem;
          max-height:30rem;
        }
    }
`