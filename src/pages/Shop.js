import React,{ useState } from 'react';

import SideBar from '../components/SideBar';
import Products from '../components/Products';

const Shop = () =>{
    const [selectedCategory, setSelectedCategory] = useState('all')

    return(
        <main className='shop'>
            <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            <Products selectedCategory={selectedCategory}/>
        </main>
    )
}

export default Shop