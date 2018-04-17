import React from 'react';
import {Link} from 'react-router-dom';
const Nav =() => {
    return (
        <header className="App-header">
            <div style={{display: 'flex', flexDirection: 'row', padding: '20px', justifyContent: 'space-evenly'}}>
                <div><Link to="/">Menu</Link></div>
                <div><Link to="/orders">Orders</Link></div>
            </div>
        </header>
    )
};
export default Nav;