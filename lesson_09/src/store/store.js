import {createStore} from 'redux';
import {countryStoreReducer} from "./reducer";

const store = createStore(countryStoreReducer);
const dispatch = store.dispatch.bind(store);

export {store, dispatch};
