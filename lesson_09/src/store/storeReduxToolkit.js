import {countryStoreReducer} from "./reducer";
import {configureStore} from "@reduxjs/toolkit";

const store = configureStore({
    reducer: countryStoreReducer,
});
const dispatch = store.dispatch.bind(store);

export {store, dispatch};
