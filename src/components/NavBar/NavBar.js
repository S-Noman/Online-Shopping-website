import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react";
import './NavBar.scss'
import Logo from '../../assests/Logo.png'

const NavBar = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="./">
          <img src={Logo} className='logo' style={{height : '50px'}}/>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          <Link className="nav-link" to="/auth">
            Sign in 
          </Link>
        </div>
        </div>
      <Outlet />
    </>
  );
};

export default NavBar;
