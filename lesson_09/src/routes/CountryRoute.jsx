import {useLoaderData, useSearchParams} from "react-router-dom";
import {getCountriesByName} from "../services/restcountries";
import KvList from "../components/KvList";
import {Card} from "react-bootstrap";
import {NavigationButton} from "../components/NavigationButton";

export function CountryRoute() {
    const [searchParams] = useSearchParams();
    const translation = searchParams.get('translation');
    const {country} = useLoaderData();
    return <>
        <h3>Country <NavigationButton to='/countries#'>Back to Countries</NavigationButton></h3>
        <Card>
            <Card.Header>{translation ? country.translations[translation].official : country.name.official}</Card.Header>
            <Card.Body>
                <KvList value={country}/>
            </Card.Body>
        </Card>
    </>
}

export async function countryLoader({params: {name}}) {
    const [country] = await getCountriesByName(name);
    return {country};
}