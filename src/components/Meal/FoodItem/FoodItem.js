import React from 'react';
import './FoodItem.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBowlFood } from '@fortawesome/free-solid-svg-icons'

const FoodItem = ({ meal, addToCart }) => {
    // console.log(meal)
    const { strMealThumb, strMeal, strTags, strArea } = meal;
    return (
        <div className='food-item'>
            < div className='item-details' >
                <img src={strMealThumb} alt="" />
                <h4>Name: {strMeal}</h4>
                <p>Type: {strTags ? strTags : 'General'}</p>
                <p>Dish Of: {strArea}</p>
            </div >
            <button onClick={() => addToCart(meal)}>
                Select Item
                <span><FontAwesomeIcon icon={faBowlFood} /></span>
            </button>
        </div>
    );
};

export default FoodItem;