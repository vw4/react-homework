import {useCountryData} from "../hooks/useCountryData";

export function CountriesRoute() {
    const {countryData} = useCountryData();
    return <>
        <h1>CountriesRoute</h1>
        <pre>{JSON.stringify(countryData, null, 4)}</pre>
    </>
}