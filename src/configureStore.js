import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/index";
import reduxImmutableStateInveriant from "redux-immutable-state-invariant";

export default function configureStore(initialState) {
  const componentEnhancer =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    rootReducer,
    initialState,
    componentEnhancer(applyMiddleware(reduxImmutableStateInveriant()))
  );
}
