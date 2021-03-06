import { createStore, applyMiddleware } from "redux";
import authReducer from "./authReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

// change to true only in dev
const configureStore = (addLogger = false) => {
  const middleware = addLogger
    ? applyMiddleware(thunk, logger)
    : applyMiddleware(thunk);
  return createStore(authReducer, middleware);
};

export default configureStore;
