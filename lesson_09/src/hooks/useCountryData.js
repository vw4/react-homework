import {useContext} from "react";
import {CountryDataContext} from "../contexts/CountryDataProvider";

export function useCountryData () {
    return useContext(CountryDataContext);
}