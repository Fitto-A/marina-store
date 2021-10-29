import React,{ useState, useEffect } from 'react'
import './style.css'
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Logo from '../../images/logo-marina-m.png';


const SideBar = ({selectedCategory, setSelectedCategory}) => {

    const initialLinks = [
        {
            id: 'all',
            name: 'Mostrar todos',
            className: 'side-link'
        },
        {
            id: 'carteras',
            name: 'Carteras',
            className: 'side-link'
        },
        {
            id: 'accesorios',
            name: 'Accesorios',
            className: 'side-link'
        },
        {
            id: 'riñoneras',
            name: 'Riñoneras',
            className: 'side-link'
        }
    ]

    const [links, setLinks] = useState(initialLinks)

    const filterCategory = id => {
        let category = id
        setSelectedCategory(category)
    }

    return (
        <div className="sideBar">
            <div className="routes">
                <div className="side-division1"></div>
                {links.map((link, index) => {
                    return (
                        <div key={index}>
                                <button
                                    onClick={() => filterCategory(link.id)}
                                    className={link.className + ' ' + (link.id === selectedCategory ? 'active-link' : '')}
                                >
                                    {link.name}
                                </button>
                        </div>
                    )
                })}

                <div className="side-division"></div>
            </div>
            <div className="sideBar-socials">
                <Link to='/shopping-cart/'>
                    <img className='logo-sideBar' src={Logo} alt="Logo Marina letra M" />
                </Link>
                <div className="sideBar-redes">
                    <a href="https://www.instagram.com/marinastoremdq/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                    <a href="https://www.facebook.com/marinastoremdq" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF />
                    </a>
                </div>
                <div className="side-division2"></div>
            </div>
        </div>
    )
}

export default SideBar
