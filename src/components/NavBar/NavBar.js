import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import "./NavBar.scss";
import Logo from "../../assests/Logo.png";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

const NavBar = () => {
  const { currentUser } = useContext(UserContext);


  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="./">
          <img src={Logo} className="logo" style={{ height: "50px" }} />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}> SIGN OUT </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavBar;
