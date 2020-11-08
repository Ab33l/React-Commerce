import React from 'react'
import './Home.css'
import Product from './Product'
import Limitedoffer from './Limitedoffer'

function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://i1.adis.ws/i/boohooamplience/271020_NEWIN_ROTATE_DESK?$homesplash_desktop_full$" alt=""/>
            {/* Product properties (id, name, image, price, ratings) */}
            <Limitedoffer/>
            {/* <div className="home__row">
                
            </div> */}
            <div className="home__row">
            <Product id="123456" title="Blue Bandana Shirt" price={10.87} rating={5} image="https://media.boohooman.com/i/boohooman/mzz38384_navy_xl?$product_image_category_page_2x$&fmt=webp"/>
            
            <Product id="123456" title="Multi-Colored Checked Shirt" price={11.87} rating={5} image="https://media.boohooman.com/i/boohooman/mzz17621_blue_xl?$product_image_category_page$&fmt=webp"/>
        
            <Product id="123456" title="Vert Multi-Striped" price={9.87} rating={5} image="https://media.boohooman.com/i/boohooman/mzz64146_silver_xl?$product_image_category_page$&fmt=webp"/>    
            
            <Product id="123456" title="Horizontal Multi-Striped" price={10.87} rating={5} image="https://media.boohooman.com/i/boohooman/mzz53769_black_xl?$product_image_category_page$&fmt=webp"/>
            
            </div>

            <div className="home__row">
            <Product id="123456" title="Burna T-Shirt" price={17.87} rating={5} image="https://media.boohooman.com/i/boohooman/mzz38190_black_xl?$product_image_category_page$&fmt=webp"/>
            
            <Product id="123456" title="TMT TrackSuit" price={17.87} rating={5} image="https://media.boohooman.com/i/boohooman/mzz27563_light%20blue_xl?$product_image_category_page$&fmt=webp"/>
            
            <Product id="123456" title="Summer Homme" price={5.87} rating={5} image="https://media.boohooman.com/i/boohooman/mzz32336_mint_xl?$product_image_category_page$&fmt=webp"/>
            
            <Product id="123456" title="Swae TrackSuit" price={21.87} rating={5} image="https://media.boohooman.com/i/boohooman/mzz31292_white_xl?$product_image_category_page$&fmt=webp"/>
            
            </div>
        </div>
    )
}

export default Home;
