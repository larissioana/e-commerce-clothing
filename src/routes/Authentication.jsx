import styled from "styled-components";
import { useState } from "react";
import SignUpForm from "../components/SignUpForm";
import SignInForm from "../components/SignInForm";
import {motion} from 'framer-motion';
import { pageAnimation } from "../animations";

const Authentication = () => {
   const [auth, setAuth] = useState(true);

    return (
        <Wrapper variants={pageAnimation} exit="exit" animate="show" initial="hidden">
            <h1>My Yasemin account.</h1>
            <div className="auth-container">
            <button onClick={() => setAuth(true)}
            style={{
                borderTop: auth ? '3px solid #17181a' : '',
                borderBottom: auth ? 'none' : ''
              }}
            >Login</button>
            <button onClick={() => setAuth(false)}
             style={{
                borderTop: auth ? '' : '3px solid #17181a',
                borderBottom: auth ? '' : 'none'
              }}
            >Create account</button>
            </div>
            {auth ? <SignInForm/> : <SignUpForm/>}
        </Wrapper>
    )
};

export default Authentication;

const Wrapper = styled(motion.div)`
    margin-top:8rem;
    margin-bottom:5rem;
   
    h1{
        text-align: center;
        font-size:clamp(1.3rem, 2vw, 1.8rem);
        margin-bottom:2rem;
        font-weight: bolder;
    }

    .auth-container{
        display:flex;
        justify-content: center;
        align-items: center;
        button{
            width:10rem;
            border:1px solid #17181a;
            height:4rem;
            padding:1rem 1.2rem;
            font-weight: bolder;
        }
    }
`