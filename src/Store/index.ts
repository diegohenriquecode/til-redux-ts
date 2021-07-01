import { applyMiddleware, createStore } from "redux";
import { ICartState } from "./modules/cart/types";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddlerware from "redux-saga";
import rootReducer from "./modules/rootReducer";
import rootSaga from "./modules/rootSaga";

export interface IState {
  cart: ICartState;
}

const sagaMiddlerware = createSagaMiddlerware();

const middlerware = [sagaMiddlerware];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlerware))
);

sagaMiddlerware.run(rootSaga);

export default store;
