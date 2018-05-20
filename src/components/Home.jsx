import React from 'react';
import {
  NavLink,
} from 'react-router-dom';

const Home = () => (
  <nav className="top_nav">
    <ul>
      <li><NavLink to="/about">ABOUT</NavLink></li>
      <li><NavLink to="/contact">CONTACT</NavLink></li>
    </ul>
  </nav>
);

export default Home;
