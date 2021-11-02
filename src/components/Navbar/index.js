import React, { useState } from 'react'
import './style.css'
import styled from 'styled-components'

import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../context'
import logo from '../../images/Marina-logo.png';
import { HiShoppingCart } from "react-icons/hi";
import { HiMenu } from "react-icons/hi";

const Navbar = () =>{
    const {cartAmount} = useGlobalContext()
    const [ sideNavbarState, setSideNavbarState] = useState(true)

    const handleSideNavbar = () => {
        setSideNavbarState(!sideNavbarState)
    }

    const MobileMenu = styled.div`
        display: none;
        flex-direction: column;
        position: absolute;
        font-size: 2rem;
        right: 2rem;
        cursor: pointer;
        @media (max-width: 768px) {
            display: flex;
        }
    `

    return(
        <nav className='navbar'>
            <Link to='/shopping-cart/'>
                <img src={logo} alt='logo' className='nav-logo'/>
            </Link>

            <MobileMenu>
                <ul>
                    <li onClick={handleSideNavbar}>
                        <HiMenu />
                    </li>
                </ul>
            </MobileMenu>

            {sideNavbarState && 
                <ul className={sideNavbarState ? 'nav-links active-nav-links' : 'nav-links' }>
                    <li>
                        <Link to='/shopping-cart/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/shop'>Tienda</Link>
                    </li>
                    <div className="cart-link">
                        <li className='cart-icon'>
                            <Link to='/cart'> <HiShoppingCart/> </Link>
                        </li>
                        <li className='nav-amount'>
                            <p>{cartAmount}</p>
                        </li>
                    </div>
                </ul>
            }
        </nav>
    )
}
export default Navbar
