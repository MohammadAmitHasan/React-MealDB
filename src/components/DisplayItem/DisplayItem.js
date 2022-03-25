import React from 'react';
import './DisplayItem.css';

const DisplayItem = ({ cartItem }) => {
    const { strMealThumb, strMeal } = cartItem;
    return (
        <div className='cart-item'>
            <img src={strMealThumb} alt="Food" />
            <h3>{strMeal}</h3>
        </div>
    );
};

export default DisplayItem;