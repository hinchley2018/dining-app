import React from 'react';
import {connect} from "react-redux";
import {removeItem} from "../redux/orders";
import {Link} from "react-router-dom";

const CartItem = ({title, price, removeItem}) => {
    return (
        <div>
            {title}
            <br/>
            ${price}
            <button onClick={() => removeItem({title: title,price: price})}>Remove</button>
        </div>
    )
}

const Cart =({cartItems, removeItem}) => {
    return (
        <div>
            <h1>Cart</h1>
            <Link to="/checkout"><button>Checkout</button></Link>
            <div style={{display: 'flex', flexDirection: 'column', padding: '20px', justifyContent: 'space-evenly', height:'400px'}}>
                {cartItems.map(item => <CartItem title={item.title} price={item.price} removeItem={removeItem}/>)}
            </div>
            <h2>Total ${}</h2>
        </div>
    )
};

function mapStateToProps(state) {
    return{
        cartItems: state.orders.cart
    }
}
export default connect(mapStateToProps, {removeItem})(Cart);