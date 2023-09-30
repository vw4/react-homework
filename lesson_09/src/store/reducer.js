import {COUNTRY_ACTIONS} from "./actions";

const INITIAL_STATE = {
    countries: [],
};

export function countryStoreReducer(state = INITIAL_STATE, {type, payload}) {
    switch (type) {
        case COUNTRY_ACTIONS.SET_COUNTRIES:
            return {...state, countries: payload};
        case COUNTRY_ACTIONS.REMOVE_COUNTRY:
            return  {...state, countries: state.countries.filter(country => country !== payload)};
        case COUNTRY_ACTIONS.REMOVE_COUNTRY_BY_NAME:
            console.log(payload, state.countries.find(country => country.name.official === payload))
            return {...state, countries: state.countries.filter(country => country.name.official !== payload)}
        default:
            return state;
    }
}