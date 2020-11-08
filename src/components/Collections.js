import React from 'react'
import './Home.css'
import Product from './Product'
import Limitedoffer from './Limitedoffer'

function Collections() {
    return (
        <div className="home">
            <div style={{marginTop:'30px'}}>
            <Limitedoffer/>
            </div>
            <div className="home__row">
            <Product id="123456" title="Signature TrackSuit" price={17.00} rating={5} image="https://media.boohooman.com/i/boohooman/mzz27558_navy_xl?$product_image_category_page$&fmt=webp"/>
            
            <Product id="123456" title="Paisley Sleeve" price={31.97} rating={5} image="https://media.boohooman.com/i/boohooman/mzz52798_white_xl?$product_image_category_page$&fmt=webp"/>
        
            <Product id="123456" title="Oversized Blue Jumper" price={9.87} rating={5} image="https://media.boohooman.com/i/boohooman/mzz36287_blue_xl?$product_image_category_page$&fmt=webp"/>    
            
            <Product id="123456" title="Oversized Hoodie" price={10.87} rating={5} image="https://media.boohooman.com/i/boohooman/mzz38188_black_xl?$product_image_category_page$&fmt=webp"/>
            
            </div>

            <div className="home__row">
            <Product id="123456" title="Tennis Hoodie" price={13.87} rating={5} image="https://media.boohooman.com/i/boohooman/mzz00579_white_xl?$product_image_category_page$&fmt=webp"/>
            
            <Product id="123456" title="ColorBlock Hoodie" price={119.87} rating={5} image="https://media.boohooman.com/i/boohooman/mzz34411_black_xl?$product_image_category_page$&fmt=webp"/>
        
            <Product id="123456" title="Dragon Design Hoodie" price={96.87} rating={5} image="https://media.boohooman.com/i/boohooman/mzz38358_black_xl?$product_image_category_page$&fmt=webp"/>    
            
            <Product id="123456" title="Graffiti Oversize Hoodie" price={100.87} rating={5} image="https://media.boohooman.com/i/boohooman/mzz38557_khaki_xl?$product_image_category_page$&fmt=webp"/>
            
            </div>
        </div>
    )
}

export default Collections;
