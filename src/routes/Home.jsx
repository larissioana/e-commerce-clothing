import styled from "styled-components";
import { useState, useEffect } from "react";
import Banner from "../components/Banner";
import Directory from "../components/Directory";
import { useNavigate } from "react-router-dom";
import {motion} from 'framer-motion';
import { pageAnimation } from "../animations";
import ScrollTop from "../components/ScrollTop";
import { fashionDresses } from "../data/dresses-data";


const Home = ({categories}) =>
{
    const [currentImage, setCurrentImage] = useState(fashionDresses);
    
    const navigate = useNavigate();

    const onNavigateHandler = () =>
    {
     navigate('/shop/dresses');
    };
    
    useEffect(() =>
    {
        const time = setInterval(() =>
        {
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
padding: 0rem 3rem;

.homepage-container
{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    overflow-x: hidden;
}

.right-container
{
    margin-left: 3rem;

        h3
        {
            font-family: 'Calligraffitti', cursive;
            font-size: clamp(2rem, 5vw, 4.5rem);
        }

        p
        {
            text-transform: uppercase;
            font-weight: bolder;
            font-size: .9rem;
            letter-spacing: .2rem;
            transition: all .4s ease-in;
            cursor: pointer;

            :hover
            {
                transform: translateY(-5px);
            }
        }
}
.left-container
{
        img
        {
            width: 40rem;
            height: 40rem;
            object-fit: cover;
            object-position: top;
        }
}

@media (max-width: 490px)
{
        img
        {
          max-width: 100%;
          max-height: 30rem;
          margin-bottom: 1rem;
        
        }
}
`;
