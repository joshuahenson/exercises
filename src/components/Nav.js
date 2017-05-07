import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return (
    <nav className="nav fixed">
      <div className="container">
        <Link to="/">
          <span className="logo-saponi">saponi</span><span className="logo-calc">Calc</span>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
