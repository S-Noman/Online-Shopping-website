import ShoppingBag from "../../assests/ShoppingBag.svg";
import { CartContanier, ShoppingCartIcon, CartCount } from "./CartIcon-Style";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartCount,
  selectIsCartOpen,
} from "../../redux/selectors/cartSelectors";
import { setIsCartOpen } from "../../redux/actions/actions";

const CartIcon = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartContanier onClick={toggleIsCartOpen}>
      <ShoppingCartIcon src={ShoppingBag} />
      <CartCount>{cartCount}</CartCount>
    </CartContanier>
  );
};
export default CartIcon;
