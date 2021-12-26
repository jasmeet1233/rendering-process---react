import { createStore, applyMiddleware } from "redux";
import { countReducer } from "./reducer";
import thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  countReducer,
  composeEnhancer(applyMiddleware(thunk))
);
