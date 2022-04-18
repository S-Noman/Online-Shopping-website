import React , {Fragment} from "react";
import { Outlet } from "react-router-dom";
import {NavigationContainer , LogoContainer , NavLinksContainer , NavLink} from './NavBarStyle'
import Logo from "../../assests/Logo.png";
import CartIcon from "../cart-icon/CartIcon";
import { useSelector } from "react-redux";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartDropdown from "../cart-dropdown/CartDropdown";
import {selectCurrentUser} from '../../redux/selectors/userSelectors'
import { selectIsCartOpen } from '../../redux/selectors/cartSelectors'


const NavBar = () => {

  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);


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
            <NavLink as= 'span'onClick={signOutUser}> Sign out </NavLink>
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
