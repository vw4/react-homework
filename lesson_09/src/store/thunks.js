import {restcountries} from "../services/restcountries";
import {setCountries} from "./actions";

const setCountriesThunk = () =>
    async (dispatch) =>
        dispatch(setCountries(...await restcountries.getAll()));

export {setCountriesThunk};