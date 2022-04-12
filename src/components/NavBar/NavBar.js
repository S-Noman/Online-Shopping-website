import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import "./NavBar.scss";
import Logo from "../../assests/Logo.png";
import CartIcon from "../cart-icon/CartIcon";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartDropdown from "../cart-dropdown/CartDropdown";


const NavBar = () => {
  const { currentUser } = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext)

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
            <span className="nav-link" onClick={signOutUser}> Sign out </span>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign in
            </Link>
          )}
          <CartIcon/>
        </div>
        {isCartOpen && <CartDropdown/> }
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavBar;
