import { ActionTypes } from "../constants/action-types";
// Set Products
export const setProucts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

//Selected Prodcuts
export const selectedProucts = (products) => {
  return {
    type: ActionTypes.SELECTED_PRODCUTS,
    payload: products,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODCUTS,
  };
};
