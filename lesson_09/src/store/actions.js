export const COUNTRY_ACTIONS = {
    SET_COUNTRIES: 'SET_COUNTRIES',
    REMOVE_COUNTRY: 'REMOVE_COUNTRY',
    REMOVE_COUNTRY_BY_NAME: 'REMOVE_COUNTRY_BY_NAME',
}

export function setCountries(...countries) {
    return {type: COUNTRY_ACTIONS.SET_COUNTRIES, payload: countries};
}

export function removeCountry(country) {
    return {type: COUNTRY_ACTIONS.REMOVE_COUNTRY, payload: country};
}

export function removeCountryByName(name) {
    return {type: COUNTRY_ACTIONS.REMOVE_COUNTRY_BY_NAME, payload: name};
}