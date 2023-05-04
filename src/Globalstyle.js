import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }

  body{
    overflow-x: hidden;
    background:#ffff;
    font-family: 'Raleway', sans-serif;
   }

   li{
    list-style: none;
   }

   a{
    text-decoration: none;
    color:#17181a;
    }

   button{
    border:none;
    background:none;
    cursor:pointer;
   }
`