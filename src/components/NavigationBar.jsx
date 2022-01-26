import React from 'react';
import {BiCookie} from "react-icons/bi";
import {Link} from "react-router-dom";

function NavigationBar() {
  return (
    <div className="navBar">
        <Link to="/">Recipes</Link>
        <Link to="/favourites" className="favourites">Favourites</Link>
        <BiCookie className='logo'></BiCookie>
    </div>);
}

export default NavigationBar;
