import CheckOutItem from '../components/check-out-item/CheckOutItem';
import { useSelector } from "react-redux";
import {selectCartItems,selectCartTotal } from '../redux/selectors/cartSelectors'
import {CheckOutContainer , CheckOutHeader , CheckOutTotal , CheckOutBlock} from './CheckOut-Style'

const CheckOut = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <CheckOutContainer>
      <CheckOutHeader>
        <CheckOutBlock>
          <span>Product</span>
        </CheckOutBlock>
        <CheckOutBlock>
          <span>Description</span>
        </CheckOutBlock>
        <CheckOutBlock>
          <span>Quantity</span>
        </CheckOutBlock>
        <CheckOutBlock>
          <span>Price</span>
        </CheckOutBlock>
        <CheckOutBlock>
          <span>remove</span>
        </CheckOutBlock>
      </CheckOutHeader>
      {cartItems.map((cartItem) => (
         <CheckOutItem key ={cartItem.id} cartItem={cartItem} />
      ))}
      <CheckOutTotal>Total: ${cartTotal}</CheckOutTotal>
    </CheckOutContainer>
  );
};
export default CheckOut;
