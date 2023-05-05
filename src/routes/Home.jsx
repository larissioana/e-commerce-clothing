import styled from "styled-components";
import { useState, useEffect } from "react";
import Banner from "../components/Banner";
import Directory from "../components/Directory";
import { useNavigate } from "react-router-dom";
import {motion} from 'framer-motion';
import { pageAnimation } from "../animations";
import ScrollTop from "../components/ScrollTop";

const fashionDresses = [
'https://i.ibb.co/DkykDsS/pexels-godisable-jacob-833186.png',
'https://i.ibb.co/PQNTX8C/pexels-godisable-jacob-833187.png',
'https://i.ibb.co/bWtQXD9/pexels-godisable-jacob-833185.png'
];


const Home = ({categories}) => {
    const [currentImage, setCurrentImage] = useState(fashionDresses);
    
    const navigate = useNavigate();
    const onNavigateHandler = () => {
     navigate('/shop/dresses')
     };
    
    useEffect(() => {
    const time = setInterval(() => {
        setCurrentImage(fashionDresses[Math.floor(Math.random() * fashionDresses.length)])
    }, 1000)
        return () => clearInterval(time)
     }, []);

    return (
        <motion.div variants={pageAnimation} exit="exit" animate="show" initial="hidden">
        <Banner/>
        <Wrapper>
         <div className="homepage-container">
            <div className="left-container">
            <img src={currentImage} alt='special occasion dresses'/>
            </div>
            <div className="right-container">
                <h3>Special Occasion <br/> Dresses</h3>
                <p onClick={onNavigateHandler}>See collection</p>
            </div>
         </div>
        </Wrapper>
        <Directory categories={categories}/>
        <ScrollTop/>
        </motion.div>
    )
};

export default Home;

const Wrapper = styled(motion.div)`
padding:0rem 3rem;
overflow-x: hidden;
.homepage-container{
    display:flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

}
 .right-container{
    margin-left:3rem;
    h3{
        font-family: 'Calligraffitti', cursive;
        font-size:clamp(2rem, 5vw, 4.5rem);
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
   .left-container{
        img{
            width:40rem;
            height:40rem;
            object-fit: cover;
            object-position: top;
        }
    }

    @media (max-width:490px){
        img{
          width:25rem;
        }
    }
`
