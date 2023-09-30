import {applyMiddleware, createStore} from 'redux';
import {countryStoreReducer} from "./reducer";
import reduxThunk from "redux-thunk";
import reduxLogger from "redux-logger";
import {setCountriesThunk} from "./thunks";

const store = createStore(
    countryStoreReducer,
    applyMiddleware(
        reduxThunk,
        reduxLogger,
    )
);
store.dispatch(setCountriesThunk());

const dispatch = store.dispatch.bind(store);
export {store, dispatch};
