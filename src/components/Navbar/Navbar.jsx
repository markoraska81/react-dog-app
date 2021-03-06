import React from 'react';
import './Navbar.scss';
import { Link, NavLink } from 'react-router-dom';
import { navLogo } from '../../services/Services';
import MenuBtn from '../MenuBtn/MenuBtn';

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/">
            <img src={navLogo} alt="Logo" />
          </Link>
        </div>
        <ul className="navbar-menu">
          <li className="navbar-menu__item">
            <NavLink
              to="/"
              className="navbar-menu__link"
              activeClassName="active"
            >
              Home
            </NavLink>
          </li>
          <li className="navbar-menu__item">
            <NavLink
              to="/breeds"
              className="navbar-menu__link"
              activeClassName="active"
            >
              Breeds
            </NavLink>
          </li>
        </ul>
        <MenuBtn />
      </nav>
    </>
  );
};

export default Navbar;
