import "./CheckOut.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckOutItem from "../check-out-item/CheckOutItem";

const CheckOut = () => {
  const { cartItems , cartTotal } =
    useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
         <CheckOutItem key ={cartItem.id} cartItem={cartItem} />
      ))}
      <span className="total">Total: ${cartTotal}</span>
    </div>
  );
};
export default CheckOut;

{/* <div key={id}>
<h2>{name}</h2>
<span>{quantity}</span>
<br />
<span onClick={() => removeItemFromCart(cartItem)}>decrement</span>
<br />
<span onClick={() => addItemToCart(cartItem)}>increment</span>
</div> */}