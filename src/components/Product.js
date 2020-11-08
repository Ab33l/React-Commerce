import React from 'react'
import './Product.css'
import { useStateValue } from '../StateProvider'

function Product({id, title, price, rating, image}) {
    const [{}, dispatch] = useStateValue();

    const addToCart = () => {
        //add item to cart
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id,
                title,
                price,
                image,
                rating,
            },
        });
    };

    return (
        <div className="product">
            <img src={image} alt=""/>
            <button className="cart" onClick={addToCart}>Quick Buy</button>
            <div className="product__info">
                <p className="product__title">{title}</p>
                <p className="product__price"><strong>$</strong><strong>{price}</strong></p>
                <div className="product__rating">
                    {Array(rating).fill().map((_) => {<p>Star</p>})}
                </div>
            </div>
        </div>
    )
}

export default Product;
