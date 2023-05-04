import styled from "styled-components";
import { useState, useContext } from "react";
import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from '../utils/firebase/firebase';
import FormInput from "./FormInput";
import Button from "./Button";
import {Form} from '../styles';
import { UserContext } from "../context/User-Context";

const initialState = {
 displayName: "",
 email: "",
 password: "",
 confirmPassword: ""
};

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(initialState)
    const {displayName, email, password, confirmPassword} = formFields;
    const {setCurrentUser} =useContext(UserContext);

    const resetFormFields = () => {
        setFormFields(initialState);
    };

    const handleSubmit = async (event) => {
    event.preventDefault();

    if(password !== confirmPassword){
        alert('passwords do not match');
        return;
    }

    try{
      const {user} = await createAuthUserWithEmailAndPassword(
         email,
         password);
         setCurrentUser(user);
         await createUserDocumentFromAuth(user, {displayName});
         resetFormFields();
 
    } catch(error){
      if(error.code === 'auth/email-already-in-use'){
        alert(' Cannot create user, email already in use')
      }
      console.log('user created encountered an error', error)
    }
    };

    const handleChange = (event) => {
    const {name, value} = event.target;
    setFormFields({...formFields, [name]: value})
    };

    return (
        <Wrapper>
         <div className="form-container">
         <Form onSubmit={handleSubmit}>
         <h2>Sign up with your email and password</h2>
            <FormInput label='Name' required type='text' onChange={handleChange} name='displayName' value={displayName}/>
            <FormInput label='Email' required type='email' onChange={handleChange} name='email' value={email}/>
            <FormInput label='Password' required type='password' onChange={handleChange} name='password' value={password}/>
            <FormInput label='Confirm Password' required type='password' onChange={handleChange} name='confirmPassword' value={confirmPassword}/>
            <Button type='submit'>Create account</Button>
         </Form>
         </div>
        </Wrapper>
    )
};

export default SignUpForm;

const Wrapper = styled.div`
display:grid;
place-content: center;
`;

