import {CartItmesStyle , CartDrodownContainer, EmptyMsg} from "./CartDropdown-Style";
import Button from "../button/button";
import CartItem from "../cart-item/CartItem";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
    const {cartItems} = useContext(CartContext)
    const navigate = useNavigate();

    const goToCheckOutHandler = ()=>{
      navigate('/checkout');
    }
  return (
    <CartDrodownContainer>
      <CartItmesStyle>
        {
          cartItems.length ? (cartItems.map((item) => (<CartItem key={item.id} cartItem={item} />
          ))) : (<EmptyMsg>Your cart is empty</EmptyMsg>)
        } 
      </CartItmesStyle>
      <Button onClick={goToCheckOutHandler} >Go to checkout</Button>
    </CartDrodownContainer>
  );
};
export default CartDropdown;
