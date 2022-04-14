import ShoppingBag from "../../assests/ShoppingBag.svg";
import {CartContanier, ShoppingCartIcon, CartCount} from "./CartIcon-Style";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {

    const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext)

    const toggleIsCartOpen = ()=> {setIsCartOpen(!isCartOpen)}

  return (
    <CartContanier onClick={toggleIsCartOpen}>
      <ShoppingCartIcon src={ShoppingBag} />
      <CartCount>{cartCount}</CartCount>
    </CartContanier>
  );
};
export default CartIcon;
