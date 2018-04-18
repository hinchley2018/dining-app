import React, { Component } from 'react';
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom';
import Menu from './components/Menu';
import Orders from './components/Orders';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Nav from "./components/Nav";

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
