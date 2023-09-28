export const COUNTRY_ACTIONS = {
    ADD_COUNTRIES: 'ADD_COUNTRIES',
    REMOVE_COUNTRY: 'REMOVE_COUNTRY',
}

export function addCountries(...countries) {
    return {type: COUNTRY_ACTIONS.ADD_COUNTRIES, payload: countries};
}

export function removeCountry(country) {
    return {type: COUNTRY_ACTIONS.REMOVE_COUNTRY, payload: country};
}