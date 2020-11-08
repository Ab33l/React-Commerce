import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search'
import CartIcon from '@material-ui/icons/ShoppingBasket'
import { useStateValue } from '../StateProvider'
import { auth } from "../firebase";

function Header() {
    const [{cart, user}, dispatch] = useStateValue();

    const handleAuthenticaton = () => {
        if (user) {
          auth.signOut();
        }
      }
    return (
        <div className="header">
            {/* Logo */}
            {/* <img className="header__logo" src="https://logopond.com/logos/8eaaac3a2fe79ea70f852b5c332c7efb.png"/> */}
            <Link to="/">
            <img className="header__logo" src="https://cdn.vox-cdn.com/thumbor/U5ZBT72oETXcQigaLiPRepYuT08=/0x0:2560x1600/1120x0/filters:focal(0x0:2560x1600):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/19779111/e2bfa93fb1b77cffcd517d7c4f4fe4e8.jpg" alt=""/>
            </Link>

            {/* Search */}
            <div className="header__search">
            {/* <input type="text" className="header__searchInput" value="Search Here..."/>
            <SearchIcon className="header__searchIcon"/> */}
            </div>

                <Link to="/" className="header__link">
                <div className="header__option">
                    <span className="header_optionLineOne header__Home">Home</span>
                </div>
                </Link>

                <Link to="/collections" className="header__link">
                <div className="header__option">
                    <span className="header_optionLineOne header__Home">Collections</span>
                </div>
                </Link>

                <Link to="/tracks" className="header__link">
                <div className="header__option">
                    <span className="header_optionLineOne header__Home">Tracksuits</span>
                </div>
                </Link>

                <Link to="/sale" className="header__link">
                <div className="header__option">
                    <span className="header_optionLineOne header__Home">Sale</span>
                </div>
                </Link>

            {/* Container with Links */}
            <div className="header__nav">
                <Link to={!user && "/login"} className="header__link">
                <div onClick={handleAuthenticaton} className="header__option">
                    <span className="header__optionLineOne header__Username">{!user ? 'Hello Guest' : user.email}</span>
                    <span className="header__optionLineTwo header__Auth">{user ? 'Sign Out' : 'Sign In'}</span>
                </div>
                </Link>

                <Link to="/orders" className="header__link">
                <div className="header__option">
                    <span className="header_optionLineOne">Your</span>
                    <span className="header_optionLineTwo">Orders</span>
                </div>
                </Link>

                <Link to="/checkout" className="header__link">
                <div className="header__optionCart">
                    <CartIcon/>
                     <span className="header_optionLineTwo header__cartCount">{cart?.length}</span>
                </div>
                </Link>
            </div>
        </div>
    )
}

export default Header;
