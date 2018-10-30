import rootReducer from "./reducers";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "remote-redux-devtools";

//Anfangs Redux State
const initialState = {
  user: false
};

const enhancer = composeWithDevTools(applyMiddleware(...middleware));

const middleware = [thunk];

const store = createStore(rootReducer, initialState, enhancer);

export default store;
