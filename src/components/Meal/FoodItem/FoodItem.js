import React from 'react';
import './FoodItem.css'
const FoodItem = ({ meal }) => {
    const { strMealThumb, strMeal, strTags, strArea } = meal;
    return (
        <div className='food-item'>
            < div className='item-details' >
                <img src={strMealThumb} alt="" />
                <h4>Name: {strMeal}</h4>
                <p>Type: {strTags ? strTags : 'General'}</p>
                <p>Dish Of: {strArea}</p>
            </div >
            <button>Select Item</button>
        </div>
    );
};

export default FoodItem;