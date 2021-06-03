import { combineReducers } from "redux";
import { productReducer , selectedProductsReducer} from "./productReducer";

const allReducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductsReducer,
});

export default allReducers;
