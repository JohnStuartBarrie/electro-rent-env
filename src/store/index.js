import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import combineReducers from "./combine_reducers";

const store = createStore(combineReducers, applyMiddleware(thunk));

export default store;
