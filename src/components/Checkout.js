import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import { useStateValue } from '../StateProvider'
import CheckoutProduct from './CheckoutProduct';
import Limitedoffer from './Limitedoffer'

function Checkout() {
    const [{cart, user}, dispatch] = useStateValue();
    let cartNumber;
    if(cart.length > 1){
        cartNumber = 'has ' + cart.length + ' items';
    }else if(cart.length == 1){
        cartNumber = 'has ' + cart.length + ' item';
    }else{
        cartNumber = 'is Empty';
    }
    return (
        <div className="checkout">
            {/* <Limitedoffer/> */}
            <div className="checkout__left">
                <img className="checkout__ad" src="https://i1.adis.ws/i/boohooamplience/cat-banner-mens-newin-aw20-web?$catbanner$" alt="" />
    <div><h3>Hi {user?.email}</h3><h2 className="checkout__title">Your Cart {cartNumber}</h2>

                {cart.map(item => (
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    rating={item.rating}
                    image={item.image}
                    price={item.price} 
                    />
                ))}
                
                </div>
                
            </div>

            <div className="checkout__right">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout;
