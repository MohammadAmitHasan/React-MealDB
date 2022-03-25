import React from 'react';
import './DisplayItem.css';

const DisplayItem = ({ cartItem }) => {
    const { strMealThumb, strMeal, quantity } = cartItem;
    return (
        <div className='cart-item'>
            <img src={strMealThumb} alt="Food" />
            <div>
                <h3>{strMeal}</h3>
                <h4>Quantity: {quantity}</h4>
            </div>
        </div>
    );
};

export default DisplayItem;