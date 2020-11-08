import React from 'react'
import './Home.css'
import Product from './Product'
import Limitedoffer from './Limitedoffer'

function Tracks() {
    return (
        <div className="home">
            <div style={{marginTop:'30px'}}>
            <Limitedoffer/>
            </div>
            <div className="home__row">
            <Product id="123456" title="Velour Tape TrackSuit" price={17.00} rating={5} image="https://media.boohooman.com/i/boohooman/mzz38999_brown_xl?$product_image_category_page$&fmt=webp"/>
            
            <Product id="123456" title="Acid Watch TrackSuit" price={31.97} rating={5} image="https://media.boohooman.com/i/boohooman/mzz38784_charcoal_xl?$product_image_category_page$&fmt=webp"/>
        
            <Product id="123456" title="ColorBlock TrackSuit" price={9.87} rating={5} image="https://media.boohooman.com/i/boohooman/mzz37093_black_xl?$product_image_category_page$&fmt=webp"/>    
            
            <Product id="123456" title="Graffiti Match" price={10.87} rating={5} image="https://media.boohooman.com/i/boohooman/mzz27300_black_xl?$product_image_category_page$&fmt=webp"/>
            
            </div>

            <div className="home__row">
            <Product id="123456" title="Drop Face Match" price={13.87} rating={5} image="https://media.boohooman.com/i/boohooman/mzz29542_blue_xl?$product_image_category_page$&fmt=webp"/>
            
            <Product id="123456" title="Swae ColorBlock" price={119.87} rating={5} image="https://media.boohooman.com/i/boohooman/mzz31310_black_xl?$product_image_category_page$&fmt=webp"/>
        
            <Product id="123456" title="Butterfly TrackSuit" price={96.87} rating={5} image="https://media.boohooman.com/i/boohooman/mzz31608_blue_xl?$product_image_category_page$&fmt=webp"/>    
            
            <Product id="123456" title="Block TrackSuit" price={100.87} rating={5} image="https://media.boohooman.com/i/boohooman/mzz31606_stone_xl?$product_image_category_page$&fmt=webp"/>
            
            </div>
        </div>
    )
}

export default Tracks;
