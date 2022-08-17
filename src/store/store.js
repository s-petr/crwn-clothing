import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import { rootReducer } from "./root-reducer";

// const middleWares = [process.env.NODE_ENV !== "production" ?? logger].filter(
//   Boolean
// );
const middleWares = [logger, thunk];

const thunkMiddleware = (store) => (next) => (action) => {
  if(typeof(action) === "function") {
    action(dispatch);
  }
}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);
