import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav>
            <h1>NASAH MealDB</h1>
            <div>
                <a href="/home">Home</a>
                <a href="/catagories">Catagories</a>
                <a href="/items">Items</a>
                <a href="/about">About</a>

            </div>
        </nav>
    );
};

export default Header;