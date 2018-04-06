import React from 'react';
import {Link} from 'react-router-dom';
const items = [
    {
        title: 'Chicken Sandwich',
        price: '6.75'
    },
    {
        title: 'Spicy Deluxe',
        price: '6.75'
    },
    {
        title: '8 Ct. Chicken Nuggets',
        price: '6.75'
    }
]
const Cart =() => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', padding: '20px', justifyContent: 'space-evenly', height:'400px'}}>
            <h1>Cart</h1>
            {items.map(item => <div>{item.title} <br/> ${item.price}</div>)}
        </div>
    )
}
export default Cart;