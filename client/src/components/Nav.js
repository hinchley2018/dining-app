import React from 'react';
import {Link} from 'react-router-dom';
import title from '../assets/Title.png'
import './nav.css';
import { Button } from 'reactstrap';

const Nav =() => {
    return (
        <header className="App-header">
                <div className={'nav'}>
                    <img src={title} alt={'WaitLis'} className={'img'}/>
                    <Link to="/"><button className={'btn btn-lg'}>Menu</button></Link>
                    <Link to="/orders"><button className={'btn btn-lg'}>Orders</button></Link>
                </div>
        </header>
    )
};
export default Nav;