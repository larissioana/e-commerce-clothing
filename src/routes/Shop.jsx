import styled from "styled-components";
import CategoriesPreview from "./Categories-Preview";
import Category from "./Category";
import {Routes, Route} from 'react-router-dom';
import { pageAnimation } from "../animations";
import {motion} from 'framer-motion';
import ScrollTop from "../components/ScrollTop";

const Shop = () => {

    return (
        <Wrapper variants={pageAnimation} exit="exit" animate="show" initial="hidden">
         <Routes>
            <Route index element={<CategoriesPreview/>}/>
            <Route path=":category" element={<Category/>}/>
         </Routes>
        <ScrollTop/>
        </Wrapper>
    )
};

export default Shop;

const Wrapper = styled(motion.div)``;


