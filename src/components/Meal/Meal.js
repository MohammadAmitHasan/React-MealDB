import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import FoodItem from './FoodItem/FoodItem';
import './Meal.css';

const Meal = () => {
    const [meals, setMeals] = useState([]);
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        let newCart = [];

        if (item['quantity']) {
            item['quantity'] += 1;
            console.log('quantity added', item['quantity']);

            const restItems = cart.filter(product => product.idMeal !== item.idMeal)
            newCart = [...restItems, item];
        }
        else {
            item['quantity'] = 1;
            console.log('quantity given 1', item['quantity']);
            newCart = [...cart, item]
        }
        setCart(newCart);
    }

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
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
                        addToCart={addToCart}
                    ></FoodItem>)
                }
            </div>

            <div className='selected-meal'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Meal;