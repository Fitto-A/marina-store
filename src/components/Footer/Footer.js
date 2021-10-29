import React from 'react';
import './style.css';

import { Link } from 'react-router-dom';
import { FaGithubSquare, FaInstagram, FaFacebookF } from "react-icons/fa";
import Logo from '../../images/logo-marina-m.png';

const Footer = () => {
    return (
        <div className='footer'>
                <div className="redes">
                    <Link to='/shopping-cart/'>
                        <img className='logo-footer' src={Logo} alt="Logo Marina letra M" />
                    </Link>
                    <div className="footer-social">
                        <a href="https://www.instagram.com/marinastoremdq/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                        <a href="https://www.facebook.com/marinastoremdq" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF />
                        </a>
                    </div>
                </div>

                <div className="footer-division"></div>

                <div className="page-links">
                    <Link to='/shopping-cart/'>
                        Home
                    </Link>
                    <Link to='/shop'>
                        Tienda
                    </Link>
                    <Link to='/cart'>
                        Carro
                    </Link>
                </div>

                <div className="github">
                    <a 
                        className="footer-github-icon"
                        href='https://github.com/Fitto-A/shopping-cart' 
                        target= "_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithubSquare />
                    </a>
                    <p>© 2021 | Site made by <a className='portfolio-link' href="https://fitto-a.github.io/portfolioPage/" target="_blank" rel="noopener noreferrer">AF</a></p>
                </div>
        </div>
    )
};

export default Footer
