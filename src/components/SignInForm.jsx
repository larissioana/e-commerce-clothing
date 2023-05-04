import FormInput from "./FormInput";
import { Form } from "../styles";
import { useState, useContext } from "react";
import Button from "./Button";
import styled from "styled-components";
import { signInWithGooglePopup, createUserDocumentFromAuth, signInUserWithEmailAndPassword } from "../utils/firebase/firebase";
import {FcGoogle} from 'react-icons/fc';
import {UserContext} from '../context/User-Context';

const initialState = {
    email: "",
    password: "",
   };
    

const SignInForm = () => {
    const [formFields, setFormFields] = useState(initialState)
    const {email, password} = formFields;
    const {setCurrentUser} = useContext(UserContext);

    const resetFormFields = () => {
        setFormFields(initialState);
    };

    const signInWithGoogle = async () => {
        const {user} = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user)
        setCurrentUser(user);
    };

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
        };
    
        const handleSubmit = async (event) => {
            event.preventDefault();
        
            try{
              const {user} =  await signInUserWithEmailAndPassword(email, password);
               setCurrentUser(user);
               resetFormFields();
         
            }catch(error){
                switch(error.code){
                   case 'auth/wrong-password':
                       alert('incorrect password for email');
                       break;
                   case 'auth/user-not-found':
                       alert('no user associated with this email');
                       break;
                       default:
                     console.log(error);
                }
               }
            };

    return (
        <Wrapper>
         <div className="form-container">
         <Form onSubmit={handleSubmit}>
         <h2>Already have an account? <br/> Sign in</h2>
            <FormInput label='Email' required type='email' onChange={handleChange} name='email' value={email}/>
            <FormInput label='Password' required type='password' onChange={handleChange} name='password' value={password}/>
            <Button type='submit'>Sign in</Button>
            <Button onClick={signInWithGoogle} buttonType='google' type='button'>
            <FcGoogle className="google-icon"></FcGoogle>
            <span>Google sign in</span>
            </Button>
         </Form>
         </div>
        </Wrapper>
    )
};

export default SignInForm;

const Wrapper = styled.div`
display:grid;
place-items: center;
   /* .form-container{
    display:flex;
   
   } */
   .google-icon{
        margin-right:.4rem;
    }
   
`