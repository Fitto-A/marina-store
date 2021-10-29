import React from 'react';
import products from '../catalog';
import SingleProduct from './SingleProduct';

const Products = ({selectedCategory}) =>{
    return(
        <section className='container'>
            <div className="shop-title">
                <h3 className='shop-title-text'><span className='shop-title-text2'>Catálogo temporada 2021</span>Catálogo temporada 2021</h3>

            </div>
            <div className="shop-container">
                {
                    selectedCategory === 'all' ?
                    products.map((item)=> {
                        return <SingleProduct key={item.id} {...item}/>
                    })
                    :
                    products.filter(product => product.category === selectedCategory).map((item)=> {
                        return <SingleProduct key={item.id} {...item}/>
                })}
            </div>
        </section>
    )
}

export default Products
