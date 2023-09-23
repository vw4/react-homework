import {useContext} from "react";
import {CountryDataContext} from "../contexts/CountryDataProvider";
import {getCountryData} from "../services/restcountries";

export function useCountryData() {
    const {countryData, setCountryData} = useContext(CountryDataContext);
    if (!countryData) {
        getCountryData().then(setCountryData);
    }
    return {countryData, setCountryData};
}