import * as actions from '../actions/actionTypes'


const CART_INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
};

export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case actions.CART_ACTION.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload,
      };
    case actions.CART_ACTION.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    default:
      return state;
  }
};