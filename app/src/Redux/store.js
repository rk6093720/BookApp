import { applyMiddleware, compose, legacy_createStore } from "redux";
import { reducer } from "../Redux/reducer";
import {thunk} from "redux-thunk"; // ✅ Correct import

// ✅ Correct DevTools integration
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = legacy_createStore(
  reducer, // ✅ Pass reducer function, not object
  composeEnhancers(applyMiddleware(thunk))
);

export { store };
