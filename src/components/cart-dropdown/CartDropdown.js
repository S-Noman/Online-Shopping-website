import {CartItmesStyle , CartDrodownContainer, EmptyMsg} from "./CartDropdown-Style";
import Button from "../button/button";
import CartItem from "../cart-item/CartItem";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {selectCartItems} from '../../redux/selectors/cartSelectors'

const CartDropdown = () => {
  
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };
  return (
    <CartDrodownContainer>
      <CartItmesStyle>
        {
          cartItems.length ? (cartItems.map((item) => (<CartItem key={item.id} cartItem={item} />
          ))) : (<EmptyMsg>Your cart is empty</EmptyMsg>)
        } 
      </CartItmesStyle>
      <Button onClick={goToCheckoutHandler} >Go to checkout</Button>
    </CartDrodownContainer>
  );
};
export default CartDropdown;
