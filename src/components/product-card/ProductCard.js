import "./ProductCard.scss";
import Button , {BUTTON_TYPE_CLASSES} from "../button/button";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const ProductCard = ({ product }) => {
  const { title, price, image } = product;
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => {
    addItemToCart(product);
  };
  return (
    <div className="product-card-container">
      <img src={image} alt={`${title}`} />
      <div className="footer">
        <span className="title">{title}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>
        Add to cart
      </Button>
      {/* <Button buttonType="up" onClick={addProductToCart}>
        more
      </Button> */}
    </div>
  );
};
export default ProductCard;
