import styled from "styled-components";
import {GiHamburgerMenu} from 'react-icons/gi';
import {IoClose} from 'react-icons/io5';
import { useState, useContext} from "react";
import {NavLink} from 'react-router-dom';
import { UserContext } from "../context/User-Context";
import { CartContext } from "../context/Cart-Context";
import {signOutUser} from '../utils/firebase/firebase';
import CartIcon from "../components/Cart-Icon";
import CartDropdown from "../components/Cart-Dropdown";


const Navigation = () =>
{
    const [showLinks, setShowLinks] = useState(false);
    const {currentUser, setCurrentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);
    
 
    const signOutHandler = async () =>
    {
    await signOutUser();
    setCurrentUser(null)
    };

    return (
         <>
         <Nav>
              <div className="nav-flex">
                  <div className="nav-header">
                      <button className="nav-toggle" onClick={() => setShowLinks(!showLinks)}>
                        {
                          showLinks ? 
                            <IoClose/> 
                          : 
                            <GiHamburgerMenu/>
                        }
                      </button>
                      <NavLink to='/' className="logo">
                           Yasemin
                      </NavLink>
                  </div>
                  <div className={`${showLinks? "nav-links show-navLinks" :'nav-links'}`}>
                      <ul className='links'>
                        <li>
                          <NavLink to='/'>Home</NavLink>
                        </li>
                        <li>
                          <NavLink to='/shop'>Shop</NavLink>
                        </li>
                        <li>
                        {
                          currentUser ? (
                            <span onClick={signOutHandler}>Sign out</span>
                          ) : (
                          <NavLink to='/auth'>Sign in</NavLink>
                          )
                        }
                        </li>
                      </ul>
                  </div>
                  <CartIcon/>
                  {
                    isCartOpen &&  <CartDropdown/>
                  }
              </div>
            </Nav>
             </>
    )
};

export default Navigation

const Nav=styled.nav`
width: 100vw;
min-height: 10vh;
display: flex;
justify-content: center;
align-items: center;
position: fixed;
top: 0rem;
left: 0;
z-index: 10;
color:#17181a;
padding: 0rem 2rem;
background:#ffff;

.nav-flex
{
    width: 100vw;
    display: flex;
    align-items: center;
}

.nav-header 
{
    display: flex;
    align-items: center;
}

.logo
{
 margin-left: 1rem;
 font-size: clamp(1.7rem, 3vw, 2.3rem);
 font-weight: bolder;
}

.nav-links
{
    align-items: center;
    display: flex;
    justify-content: center;
    font-size: .9rem;
    margin-right: 8rem;
    margin-left: auto;
    text-transform: uppercase;

.links
{
    display: flex;
    justify-content: center;
    align-items: center;

        span
        {
            cursor:pointer;
        }

       li
       {
        padding-left: 2rem;
        letter-spacing: 0.1rem;
        font-weight: 800;
       }
}
}

.nav-toggle
{
    font-size: 2rem;
    cursor: pointer;
    margin-right: 2rem;
    margin-left: 2rem;
    display: none;  
}

@media screen and (max-width: 768px)
{
 background:#faf9f9;
 height: 5rem;
 backdrop-filter: blur(50px);

 .nav-toggle
 {
    display: block;
    color:#17181a;
}

.nav-links
{
    position: absolute;
    z-index: 10;
    left: 0;
    top: 10vh;
    width: 100%;
    height: 100vh;
    background: rgb(250, 250, 250);
    transform: translateX(-100%);
    transition:transform .5s ease-in;
  
.links
{
    flex-direction: column;
   
    li
    {
        padding-bottom: 3rem;
        padding-left: 0rem;
    }
}
}

.show-navLinks
{
    transform: translateX(0%);
}

.logo
{
    margin-right: 2rem;
}
}
`;