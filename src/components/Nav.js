import React from 'react';
import {Link} from 'react-router-dom';
import title from '../assets/Title.png'
const Nav =() => {
    return (
        <header className="App-header">
                <div style={{display: 'flex', flexDirection: 'row', padding: '20px', justifyContent: 'space-evenly'}}>
                    <img src={title} alt={'WaitLis'} height={200} width={200}/>
                    <Link to="/"><button className={'btn btn-primary'}>Menu</button></Link>
                    <Link to="/orders"><button className={'btn btn-primary'}>Orders</button></Link>
                </div>
        </header>
    )
};
export default Nav;