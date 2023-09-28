import {COUNTRY_ACTIONS} from "./actions";

const INITIAL_STATE = {
    countries: [],
}

export function countryStoreReducer(state = INITIAL_STATE, {type, payload}) {
    switch (type) {
        case COUNTRY_ACTIONS.ADD_COUNTRIES:
            return {...state, countries: [...state.countries, ...payload]};
        case COUNTRY_ACTIONS.REMOVE_COUNTRY:
            return  {...state, countries: state.filter(country => country !== payload)};
        default:
            return state;
    }
}