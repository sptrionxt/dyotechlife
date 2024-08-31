import React from 'react';
import "./Header.css";
import logo from "../../../images/logo.jpg"
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <nav className="main-nav">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/products">Products</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
                <div className="header-right">
                    <a href="/search" className="search-icon"><FaSearch size={24} /></a>
                    <a href="/cart" className="cart-icon"><FaShoppingCart size={24} /></a>
                    <a href="/login" className="login-icon"><FaUser size={24} /></a>
                </div>
            </div>
        </header>
    );
};

export default Header;



