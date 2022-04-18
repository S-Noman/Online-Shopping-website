import Button, { BUTTON_TYPE_CLASSES } from "../button/button";
import "./ProductCard.scss";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../redux/actions/actions";
import { selectCartItems } from "../../redux/selectors/cartSelectors";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { title, price, image } = product;
  const addProductToCart = () => {
    dispatch(addItemToCart(cartItems, product));
  };

  return (
    <div className="product-card-container">
      <img src={image} alt={`${title}`} />
      <div className="footer">
        <span className="title">{title}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
    </div>
  );
};
export default ProductCard;
