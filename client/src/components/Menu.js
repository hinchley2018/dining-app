import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {addItem, getItems} from "../redux/orders";
import cart from '../assets/cart.png';

const MenuItem = ({title, price, addItem}) => {
    return (
        <div>
            {title}
            <br/>
            ${price}
            <button type="button" className="btn btn-default btn-lg" onClick={() => addItem({title: title, price: price})}>
                {/*<span className="glyphicon glyphicon-plus" aria-hidden="true"></span>*/}
                +
            </button>
        </div>
    )
};

class Nav extends Component {
    componentDidMount(){
        this.props.getItems();
    }

    render() {
        return (
            <div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                    <h1>Menu</h1>
                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <div>
                            <Link to="/cart"><img src={cart} alt={'cart'} width={'50'} height={'50'}/></Link>{this.props.cartItems.length}
                        </div>
                    </div>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', padding: '20px', justifyContent: 'space-evenly', height:'400px'}}>
                    {this.props.items.map(item =><MenuItem title={item.title} price={item.price} addItem={this.props.addItem}/>)}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        items: state.orders.menuItems,
        cartItems: state.orders.cart
    };
}
export default connect(mapStateToProps,{getItems,addItem})(Nav);