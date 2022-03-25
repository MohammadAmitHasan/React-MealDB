import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import FoodItem from './FoodItem/FoodItem';
import './Meal.css';

const Meal = () => {
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [])

    return (
        <div className='meals'>
            <div className='meal-container'>
                {
                    meals.map(meal => <FoodItem
                        meal={meal}
                        key={meal.idMeal}
                    ></FoodItem>)
                }
            </div>

            <div className='selected-meal'>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Meal;