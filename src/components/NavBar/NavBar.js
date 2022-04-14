import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import {NavigationContainer , LogoContainer , NavLinksContainer , NavLink} from './NavBarStyle'
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
      <NavigationContainer>
        <LogoContainer to="./">
          <img src={Logo} className="logo" style={{ height: "50px" }} />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to="/shop">
            Shop
          </NavLink>
          {currentUser ? (
            <NavLink as= 'span' onClick={signOutUser}> Sign out </NavLink>
          ) : (
            <NavLink to="/auth">
              Sign in
            </NavLink>
          )}
          <CartIcon/>
        </NavLinksContainer>
        {isCartOpen && <CartDropdown/> }
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default NavBar;
