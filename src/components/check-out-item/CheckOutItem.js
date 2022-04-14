import "./CheckOutItem.scss";
import {CheckOutItemContainer, CheckOutItemImageContainer, CheckOutItemImage, CheckOutItemNamePrice ,RemoveItemIcon, Arrow , CartValue, CheckOutItemQuantity} from "./CheckOutItem-Style";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckOutItem = ({ cartItem }) => {
  const { title, image, price, quantity } = cartItem;
  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  const clearItemHandler = () => {
    clearItemFromCart(cartItem);
  };

  const addItemToCartHandler = () => {
    addItemToCart(cartItem);
  };

  const removetemToCartHandler = () => {
    removeItemFromCart(cartItem);
  };
  
  return (
    <CheckOutItemContainer>
      <CheckOutItemImageContainer>
        <CheckOutItemImage src={image} alt={`${title}`} />
      </CheckOutItemImageContainer>
      <CheckOutItemNamePrice>{title}</CheckOutItemNamePrice>
      <CheckOutItemQuantity>
        <Arrow onClick={removetemToCartHandler}>
          &#10094;
        </Arrow>
        <CartValue>{quantity}</CartValue>
        <Arrow onClick={addItemToCartHandler}>
          &#10095;
        </Arrow>
      </CheckOutItemQuantity>
      <CheckOutItemNamePrice>{`${price} x ${quantity}`}</CheckOutItemNamePrice>
      <RemoveItemIcon onClick={clearItemHandler}>
        &#10005;
      </RemoveItemIcon>
    </CheckOutItemContainer>
  );
};
export default CheckOutItem;
