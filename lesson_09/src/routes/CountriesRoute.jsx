import {useCountryData} from "../hooks/useCountryData";
import {useEffect} from "react";
import {INITIAL_STATE} from "../constants/countryDataStorage";

export function CountriesRoute() {
    const {countryData, setCountryData} = useCountryData();
    useEffect(() => {
        setCountryData(INITIAL_STATE);
    }, []);
    return <>
        <h1>CountriesRoute</h1>
        <pre>{JSON.stringify(countryData, null, 4)}</pre>
    </>
}