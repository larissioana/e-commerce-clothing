import styled from "styled-components";
import { useState, useContext } from "react";
import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from '../utils/firebase/firebase';
import FormInput from "./FormInput";
import Button from "./Button";
import {Form} from '../styles';
import { UserContext } from "../context/User-Context";
import { useNavigate } from "react-router-dom";

const initialState =
{
 displayName: "",
 email: "",
 password: "",
 confirmPassword: ""
};

const SignUpForm = () =>
{
    const [formFields, setFormFields] = useState(initialState)
    const {displayName, email, password, confirmPassword} = formFields;
    const [userMsg, setUserMsg] = useState("");
    const {setCurrentUser} =useContext(UserContext);
    const navigate = useNavigate();

    const resetFormFields = () =>
    {
        setFormFields(initialState);
    };

    const handleSubmit = async (event) =>
    {
        event.preventDefault();
    
        if (password !== confirmPassword)
        {
            setUserMsg('passwords do not match');
            return;
        }

        try
        {
            const {user} = await createAuthUserWithEmailAndPassword(
            email,
            password);

            setCurrentUser(user);
            await createUserDocumentFromAuth(user, {displayName});
            resetFormFields();
            navigate('/shop')
    
        } catch(error)
        {
          switch(error.code)
          {
            case 'auth/email-already-in-use':
              setUserMsg('Cannot create user, email already in use');
              break;
            case 'auth/weak-password':
              setUserMsg('Password should be at least 6 characters');
              break;
              default:
            console.log('User created encountered an error', error)
          }
        }
    };

    const handleChange = (event) =>
    {
    setUserMsg("");
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
                    <p className="userMsg">{userMsg}</p>
                    <Button type='submit'>Create account</Button>
                </Form>
            </div>
        </Wrapper>
    )
};

export default SignUpForm;

const Wrapper = styled.div`
display: grid;
place-content: center;

.userMsg
{
  text-transform: capitalize;
}
`;

