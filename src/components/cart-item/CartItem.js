import {CartItemContainer, CartItemImage, CartItemDetails, CartItemName} from './CartItem-Style'


const CartItem =({cartItem})=>{
    const {name, quantity, image, price} = cartItem;
    return(
        <CartItemContainer>
            <CartItemImage src={image} alt={`${name}`} />
            <CartItemDetails>
            <CartItemName>{name}</CartItemName>
            <span > {quantity} x ${price}</span>
            </CartItemDetails>
        </CartItemContainer>
    );
};
export default CartItem