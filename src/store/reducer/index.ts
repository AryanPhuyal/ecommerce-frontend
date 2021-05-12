import { combineReducers } from "redux";
import categoryreducer from "./category";
import productreducer from "./product";

const rootreducer = combineReducers({
  category: categoryreducer,
  product: productreducer,
});

export default rootreducer;
