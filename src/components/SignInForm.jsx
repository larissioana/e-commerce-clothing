import FormInput from "./FormInput";
import { Form } from "../styles";
import { useState, useContext } from "react";
import Button from "./Button";
import styled from "styled-components";
import { signInWithGooglePopup, createUserDocumentFromAuth, signInUserWithEmailAndPassword } from "../utils/firebase/firebase";
import {FcGoogle} from 'react-icons/fc';
import {UserContext} from '../context/User-Context';
import { useNavigate } from "react-router-dom";

const initialState =
{
    email: "",
    password: "",
};

const SignInForm = () =>
{
    const [formFields, setFormFields] = useState(initialState);
    const [userMsg, setUserMsg] = useState("");
    const {email, password} = formFields;
    const {setCurrentUser} = useContext(UserContext);
    const navigate = useNavigate();

    const resetFormFields = () =>
    {
        setFormFields(initialState);
    };

    const signInWithGoogle = async () =>
    {
        const {user} = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user)
        setCurrentUser(user);
        navigate('/shop')
    };

    const handleChange = (event) =>
    {
        setUserMsg("");
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    };
    
    const handleSubmit = async (event) =>
    {
        event.preventDefault();
       
        try
        {
            const {user} =  await signInUserWithEmailAndPassword(email, password);
            setCurrentUser(user);
            resetFormFields();
            navigate('/shop');
        }catch(error)
        {
            switch(error.code)
            {
                case 'auth/wrong-password':
                      setUserMsg('Incorrect password for this email');
                       break;
                case 'auth/user-not-found':
                       setUserMsg('No user associated with this email');
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
                    <p className="userMsg">{userMsg}</p>
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
display: grid;
place-items: center;

.userMsg
{
    text-transform: capitalize;
}
.google-icon
{
    margin-right: .4rem;
}   
`;