import React from 'react';
import {Link} from 'react-router-dom';

const MenuItem = ({title,price}) => {
    return (
        <div>
            {title}
            <br/>
            ${price}
        </div>
    )
}

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

const Menu =() => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', padding: '20px', justifyContent: 'space-evenly', height:'400px'}}>
          {items.map(item => <div>{item.title} <br/> ${item.price}</div>)}
        </div>
    )
}
export default Menu;