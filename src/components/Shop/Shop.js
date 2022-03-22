import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css"

const Shop = () => {
    const [products, setProducts] = useState([]) 
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    },[])
  
    const addTOCartHandler = (product) => {
        console.log(product)
        const newCart = [...cart, product]
        setCart(newCart)
    }
   

    return (
        <div className='shopContainer'>
            <div className="productContainer">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        addTOCartHandler={addTOCartHandler}
                    ></Product>)
                }
              
            </div>
            <div className="cartContainer">
                <Cart cart={cart} />
            </div>
        </div>
    );
};

export default Shop;