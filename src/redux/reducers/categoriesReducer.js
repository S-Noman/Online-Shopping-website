import * as actions from "../actions/actionTypes";

export const CategorInitialState = {
  categoriesMap: {},
};
export const categoriesReducer = (state = CategorInitialState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case actions.SET_CATEGORIES_MAP:
      return { ...state, categoriesMap: payload };
    default:
      return state;
  }
};
