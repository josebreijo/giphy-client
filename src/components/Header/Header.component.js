import React from 'react';
import './Header.css';
import NavLink from './NavLink.component';

const NavigationBar = () => (
  <div className="header">
    <h1 className="Random-header">Best client ever</h1>
    <NavLink to="/">Trending</NavLink>

    <NavLink to="random">Random</NavLink>
    <NavLink to="favourites">Favourites</NavLink>
  </div>
);

export default NavigationBar;
