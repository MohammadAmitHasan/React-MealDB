import React from 'react';
import DisplayItem from '../DisplayItem/DisplayItem';
import './Cart.css'
const Cart = ({ cart }) => {
    let itemNo = 0;
    cart.map(item => {
        itemNo += item.quantity;
    })
    return (
        <div className='cart'>
            <h1>Selected Meals</h1>

            <div className='cart-list'>
                <p>No Of Items: {itemNo}</p>
                {
                    cart.map(item => <DisplayItem
                        key={item.idMeal}
                        cartItem={item}
                    ></DisplayItem>)
                }
            </div>
        </div>
    );
};



export default Cart;