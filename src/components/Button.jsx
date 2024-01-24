import styled from "styled-components";

const BUTTON_TYPES =
{
  google: 'google',
  inverted: 'inverted'
};

const Button = ({children, buttonType, ...otherProps}) =>
{
    return (
        <ButtonStyles className={`${BUTTON_TYPES[buttonType]}`} {...otherProps}>{children}</ButtonStyles>
    )
};

export default Button;

const ButtonStyles = styled.button`
  width: auto;
  height: 3rem;
  line-height: 2rem;
  padding: 0.5rem 1rem;
  font-size: .8rem;
  font-weight: bolder;
  background-color: #17181a;
  opacity:.8;
  color: #ebebeb;
  cursor: pointer;
  margin-top: 1rem;
 

&:hover 
{
  background-color: #ebe6e6;
  color: #17181a;
  border: 1px solid black;
}

&.google 
{
  background-color: rgb(239, 235, 235);
  color: #353232;
  border: 1px solid #17181a;

&:hover
{
    background-color: rgb(65, 62, 62);
    color: #e3e4e5;
      
}
}

&.inverted
{
  background-color: #ece6e6;
  color: #17181a;
  border: 1px solid black;

&:hover
{
    background-color: #17181a;
    color: #ebebeb;
    border: none;
}
}
`;