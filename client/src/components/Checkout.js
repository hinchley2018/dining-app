import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
const Checkout =() => {
    return (
        <div>
            <button onClick={clearCart}>Cancel</button><h1>Checkout</h1><Link to="/checkout"><button>Checkout</button></Link>
        </div>
    )
}
export default connect(null,{clearCart})(Checkout);