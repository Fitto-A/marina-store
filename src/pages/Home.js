import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import setMatero from '../images/Set-matero-edit.png'
import bolsoMatero from '../images/Bolso-matero-edit.png'

import HomeOffers from '../components/HomeOffers/index'

const Home = () =>{
    const [hover, setHover] = useState(false)

    const imageMoveStyle = ({hover}) => ({
        transitionTimingFunction: 'ease-in-out',
        transition: '0.9s',
        transform: hover ? 'translate(-80px, 40px)' : 'translate(0)',
    })


    return(
        <>
            <div className='home'>
                <div className="home-banner" >
                    <div className='home-left'>
                        <img  
                            className='set-matero'
                            src={setMatero} alt="" 
                        />
                    </div>
                    <div className="info-content">
                        <article className='home-info'>
                            <h3>Los mejores equipos playeros! Encontralos en nuestra tienda!</h3>
                            <Link to='/shop'>
                                <button className='btn btn-home'>Ver más productos</button>
                            </Link>
                        </article>

                    </div>
                    <div 
                        style={imageMoveStyle({hover})} 
                        className="item-right" 
                        onMouseOver={() => setHover(true)} 
                        onMouseLeave={() => setHover(false)}
                    >
                        <img src={bolsoMatero} 
                            className='bolso-matero'
                            alt="" 
                        />
                    </div>
                </div>
            </div>
            <div className="other-products">
                <h4 className='subtitle-home'>Los más elegidos del mes!</h4>
                <div className="images-home">
                    <HomeOffers />
                </div>
            </div>

        </>
    )
}

export default Home