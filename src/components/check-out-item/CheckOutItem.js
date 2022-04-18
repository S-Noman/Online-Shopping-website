
import {
  CheckOutItemContainer,
  CheckOutItemImageContainer,
  CheckOutItemImage,
  CheckOutItemNamePrice,
  RemoveItemIcon,
  Arrow,
  CartValue,
  CheckOutItemQuantity,
} from "./CheckOutItem-Style";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../redux/selectors/cartSelectors";
import {addItemToCart, removeItemFromCart,clearItemFromCart } from '../../redux/actions/actions'

const CheckOutItem = ({ cartItem }) => {
  const { title, image, price, quantity } = cartItem;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));

  return (
    <CheckOutItemContainer>
      <CheckOutItemImageContainer>
        <CheckOutItemImage src={image} alt={`${title}`} />
      </CheckOutItemImageContainer>
      <CheckOutItemNamePrice>{title}</CheckOutItemNamePrice>
      <CheckOutItemQuantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <CartValue>{quantity}</CartValue>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </CheckOutItemQuantity>
      <CheckOutItemNamePrice>{`${price} x ${quantity}`}</CheckOutItemNamePrice>
      <RemoveItemIcon onClick={clearItemHandler}>&#10005;</RemoveItemIcon>
    </CheckOutItemContainer>
  );
};
export default CheckOutItem;
