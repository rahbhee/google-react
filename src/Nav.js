import React from 'react';
import menu from './images/menu.png'
import rabi from './images/rabi.png'
const Nav = () => {
    return(
        <div className="nav-bar">
        <a href="#">Gmail</a>
        <a href="#">Images</a>
        <img style={{height: 18}} src={menu}></img>
        <img style={{height: 25}} src={rabi}></img>
        </div>
    );
}

export default Nav;