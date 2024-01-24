 import styled from "styled-components";
 
export const Form = styled.form`

h2
{
    text-align: center;
    font-size:1rem;
    padding:  2rem 0rem;
}

   margin-top: 3rem;
   display: grid;
   place-content: center;
   max-width: 35rem;
   border: 1px solid black;
   padding: 1rem;
   filter: drop-shadow(5px 5px 10px rgba(0,0,0,0.2));

input
{
    margin-bottom: 1.5rem;
    height: 2.5rem;
    width: 25rem;
    position: relative;
    text-indent: .7rem;

   &:focus
   {
    background:rgb(234, 231, 231);
   }
}

label
{
    text-indent: .4rem;
    margin-bottom: .5rem;
}

@media (max-width: 435px)
{
   width: 20rem;

   input
   {
      width: 17rem;
   }
}

@media (max-width: 348px)
{
   width: 15rem;

   input
   {
      width: 13rem;
   }
 }
`;
