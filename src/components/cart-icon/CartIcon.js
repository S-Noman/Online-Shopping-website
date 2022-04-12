import ShoppingBag from "../../assests/ShoppingBag.svg";
import "./CartIconStyle.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {

    const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext)

    const toggleIsCartOpen = ()=> {setIsCartOpen(!isCartOpen)}

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <img src={ShoppingBag} className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};
export default CartIcon;
