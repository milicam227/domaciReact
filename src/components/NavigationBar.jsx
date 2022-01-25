import React from 'react';
import {BiCookie} from "react-icons/bi";

function NavigationBar() {
  return (
    <div className="navBar">
        <a>Recipes</a>
        <a className="favourites">Favourites</a>
        <BiCookie className='logo'></BiCookie>
    </div>);
}

export default NavigationBar;
