import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
import products from '../../catalog'

const HomeOffers = () => {

    const product1 =  products.find(product => product.id === 3)
    const product2 =  products.find(product => product.id === 4)
    const product3 =  products.find(product => product.id === 8)

    return (
        <>
            <div className="offers-product">
                <Link to='/shop'>
                    <div className="offers-img-bg">
                        <img src={product1.src} alt="Bolso Negro" />
                    </div>
                </Link>
                <div className="offers-info">
                    <p className='offers-name'>{product1.name}</p>
                    <span className='old-price'>${product1.oldPrice}</span>
                    <p className='offers-price'>${product1.price}</p>
                </div>
                <div className="offers-link">
                    <Link to='/shop'>
                        <button className='offers-btn'> ir a TIENDA</button>
                    </Link>                
                </div>
            </div>

            <div className="offers-product">
                <Link to='/shop'>
                    <div className="offers-img-bg">
                        <img src={product2.src} alt="Portalentes" />
                    </div>
                </Link>
                <div className="offers-info">
                    <p className='offers-name'>{product2.name}</p>
                    <span className='old-price'>${product2.oldPrice}</span>
                    <p className='offers-price'>${product2.price}</p>
                </div>
                <div className="offers-link">
                    <Link to='/shop'>
                        <button className='offers-btn'> ir a TIENDA</button>
                    </Link>                
                </div>
            </div>

            <div className="offers-product">
                <Link to='/shop'>
                    <div className="offers-img-bg">
                        <img src={product3.src} alt="Riñonera" />
                    </div>
                </Link>
                <div className="offers-info">
                    <p className='offers-name'>{product3.name}</p>
                    <span className='old-price'>${product3.oldPrice}</span>
                    <p className='offers-price'>${product3.price}</p>
                </div>
                <div className="offers-link">
                    <Link to='/shop'>
                        <button className='offers-btn'> ir a TIENDA</button>
                    </Link>                
                </div>
            </div>    
        </>
    )
}

export default HomeOffers
