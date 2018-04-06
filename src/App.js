import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Link,BrowserRouter,Route} from 'react-router-dom';
import Menu from './Menu';
import Orders from './Orders';
import Cart from './Cart';
import Checkout from './Checkout'; 
const Nav =() => {
  return (
  <header className="App-header">
      <div style={{display: 'flex', flexDirection: 'row', padding: '20px', justifyContent: 'space-evenly'}}>
          <div><Link to="/">Menu</Link></div>
          <div><Link to="/orders">Orders</Link></div>
      </div>
  </header>
  )
}
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div >
            <Nav/>
            <Route exact path="/" component={Menu}/>
            <Route path="/orders" component={Orders}/>
            <Route path="/cart" component={Cart}/>
            <Route path="/checkout" component={Checkout}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
