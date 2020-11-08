import React from 'react'
import './Home.css'
import Product from './Product'
import Limitedoffer from './Limitedoffer'

function Sale() {
    return (
        <div className="home">
            <div style={{marginTop:'30px'}}>
            <Limitedoffer/>
            </div>
            <div className="home__row">
            <Product id="123456" title="BackPrinted Ecru Hoodie" price={17.00} rating={5} image="https://media.boohooman.com/i/boohooman/mzz34860_grey_xl?$product_image_category_page$&fmt=webp"/>
            
            <Product id="123456" title="Funnel Nick Gilet" price={31.97} rating={5} image="https://media.boohooman.com/i/boohooman/mzz34651_white_xl?$product_image_category_page$&fmt=webp"/>
        
            <Product id="123456" title="Applique B T-Shirt" price={9.87} rating={5} image="https://media.boohooman.com/i/boohooman/mzz38164_black_xl?$product_image_category_page$&fmt=webp"/>    
            
            <Product id="123456" title="Utility Camo T-Shirt" price={10.87} rating={5} image="https://media.boohooman.com/i/boohooman/mzz38180_camo_xl?$product_image_category_page$&fmt=webp"/>
            
            </div>

            <div className="home__row">
            <Product id="123456" title="Utility Camo Jacket" price={13.87} rating={5} image="https://media.boohooman.com/i/boohooman/mzz38006_camo_xl?$product_image_category_page$&fmt=webp"/>
            
            <Product id="123456" title="Acid Wash T-Shirt" price={119.87} rating={5} image="https://media.boohooman.com/i/boohooman/mzz38165_charcoal_xl?$product_image_category_page$&fmt=webp"/>
        
            <Product id="123456" title="Tie Dye T-Shirt" price={96.87} rating={5} image="https://media.boohooman.com/i/boohooman/mzz38223_yellow_xl?$product_image_category_page$&fmt=webp"/>    
            
            <Product id="123456" title="Graffiti Oversized Print" price={100.87} rating={5} image="https://media.boohooman.com/i/boohooman/mzz32033_stone_xl?$product_image_category_page$&fmt=webp"/>
            
            </div>
        </div>
    )
}

export default Sale;
