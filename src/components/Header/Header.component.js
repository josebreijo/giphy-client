import React from 'react';
import { Link } from '@reach/router';
import './Header.css';

const NavigationBar = () => (
  <div className="header">
    <h1 className="Random-header">best client ever</h1>
    <Link to="/">Trending</Link>
    <Link to="random">Random</Link>
    <Link to="favourites">Favourites</Link>
  </div>
);

export default NavigationBar;
