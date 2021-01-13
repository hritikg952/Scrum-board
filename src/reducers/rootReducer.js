import { combineReducers } from "redux";
import listReducer from "../reducers/listReducer";
import cardReducer from "../reducers/cardReducer";
const rootReducer = combineReducers({
  list: listReducer,
  card: cardReducer,
});
export default rootReducer;
