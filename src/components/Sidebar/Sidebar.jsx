import React, { useContext } from 'react';
import './Sidebar.scss';
import { NavLink } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalContext';

const Sidebar = () => {
  const { menuOpen, menuToggle } = useContext(GlobalContext);
  return (
    <>
      <div className="sidebar" style={{ right: menuOpen ? '0' : '-100%' }}>
        <div className="side-btn" onClick={menuToggle}></div>
        <ul className="sidebar-menu">
          <li className="sidebar-menu__item">
            <NavLink
              to="/"
              onClick={menuToggle}
              className="navbar-menu__link"
              activeclassname="active"
            >
              home
            </NavLink>
          </li>
          <li className="sidebar-menu__item">
            <NavLink
              to="/breeds"
              onClick={menuToggle}
              className="navbar-menu__link"
              activeclassname="active"
            >
              Breeds
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
