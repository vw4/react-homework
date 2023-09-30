import {countryStoreReducer} from "./reducer";
import {configureStore} from "@reduxjs/toolkit";
import {setCountriesThunk} from "./thunks";

const store = configureStore({
    reducer: countryStoreReducer,
});
store.dispatch(setCountriesThunk());

const dispatch = store.dispatch.bind(store);
export {store, dispatch};
