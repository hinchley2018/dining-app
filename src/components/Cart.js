import React from 'react';
import {connect} from "react-redux";
import {removeItem} from "../redux/orders";

const CartItem = ({title, price, removeItem}) => {
    return (
        <div>
            {title}
            <br/>
            ${price}
            <button onClick={removeItem}>Remove</button>
        </div>
    )
}

const Cart =({cartItems, removeItem}) => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', padding: '20px', justifyContent: 'space-evenly', height:'400px'}}>
            <h1>Cart</h1>
            {cartItems.map(item => <CartItem title={item.title} price={item.price} removeItem={removeItem}/>)}
        </div>
    )
};

function mapStateToProps(state) {
    return{
        cartItems: state.orders.cart
    }
}
export default connect(mapStateToProps, {removeItem})(Cart);