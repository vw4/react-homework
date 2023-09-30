import {applyMiddleware, createStore} from 'redux';
import {countryStoreReducer} from "./reducer";
import reduxThunk from "redux-thunk";
import reduxLogger from "redux-logger";

const store = createStore(
    countryStoreReducer,
    applyMiddleware(
        reduxThunk,
        reduxLogger,
    )
);
const dispatch = store.dispatch.bind(store);

export {store, dispatch};
