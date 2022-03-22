import React from 'react';
import "./Product.css"

const Product = (props) => {
    const { img, name, price, ratings, seller } = props.product;
    const {addTOCartHandler } = props;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='productInfo'>
            <p className='productName'>{name}</p>
            <p>Price: {price}</p>
            <p>Rating: {ratings}</p>
            <p>Seller: {seller}</p>
            </div>
            <button onClick={() => addTOCartHandler(props.product)}className='btnInfo'>
                <p>Add to cart</p>
            </button>
        </div>
    );
};

export default Product;