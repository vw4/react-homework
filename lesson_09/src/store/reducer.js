import {COUNTRY_ACTIONS} from "./actions";

const INITIAL_STATE = {
    countries: [],
    isLoaded: false,
};

export function countryStoreReducer(state = INITIAL_STATE, {type, payload}) {
    switch (type) {
        case COUNTRY_ACTIONS.SET_COUNTRIES:
            return {...state, countries: payload, isLoaded: true};
        case COUNTRY_ACTIONS.REMOVE_COUNTRY:
            return  {...state, countries: state.countries.filter(country => country !== payload)};
        default:
            return state;
    }
}