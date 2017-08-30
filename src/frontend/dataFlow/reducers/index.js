import { combineReducers } from "redux";
import searchReducer from "./searchReducer";

const rootReducer = combineReducers({
  searchState: searchReducer,
});

export default rootReducer;