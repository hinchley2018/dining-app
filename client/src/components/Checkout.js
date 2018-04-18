import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {clearCart, confirmOrder, removeItem} from "../redux/orders";
import {CartItem} from "./Cart";
import {getTotal} from "../utils/orders";
import { Field, reduxForm } from 'redux-form'

const radio = () => {
    return <input type={'radio'}/>
}
const Checkout =({cartItems, handleSubmit, pristine, reset, submitting }) => {
    return (
        <div>
            <div style={{display: 'flex', flexDirection: 'row', padding: '20px', justifyContent: 'space-evenly'}}>
                <Link to="/"><button onClick={clearCart}>Cancel</button></Link>
                <h1>Checkout</h1>
                <Link to="/cart"><button>View Cart</button></Link>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', padding: '20px', justifyContent: 'space-evenly', height:'400px'}}>
                {cartItems.map(item => <CartItem title={item.title} price={item.price} removeItem={removeItem}/>)}
            </div>
            <h2>Total ${getTotal(cartItems)}</h2>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                <form onSubmit={handleSubmit(confirmOrder)}>
                    <div>
                        <label><Field name={'payment'} component={radio} value={'vendor'}/>Pay at Vendor</label>
                        <br/>
                        <label><Field name={'payment'} component={radio} value={'card'}/>Pay with Card</label>
                    </div>
                    <br/>
                    <hr/>
                    <div>
                        <h3>I am at least 13 years old and agree to the <Link to="/license">terms and conditions</Link></h3>
                        <Field name={'terms'} component={radio} value={''}/>
                    </div>
                    <div>
                        <button className={'btn btn-primary'} type="submit">Submit Order</button>
                    </div>
                </form>
            </div>
        </div>
    )
};
function mapStateToProps(state) {
    return{
        cartItems: state.orders.cart
    }
}
export default connect(mapStateToProps,{clearCart,removeItem, confirmOrder})(
    reduxForm({form: 'simple'}
    )(Checkout));