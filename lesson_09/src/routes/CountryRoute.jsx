import {useLoaderData, useSearchParams} from "react-router-dom";
import {restcountries} from "../services/restcountries";
import {Col, Container, Row} from "react-bootstrap";
import {NavigationButton} from "../components/NavigationButton";
import {CountryCard} from "../components/CountryCard";

export function CountryRoute() {
    const [searchParams] = useSearchParams();
    const translation = searchParams.get('translation');
    const {country} = useLoaderData();
    return <Container fluid>
        <Row>
            <Col md={6}>
                <h3>Country</h3>
            </Col>
            <Col md={6} className='text-end'>
                <NavigationButton to='/countries' size='sm'>Back to Countries</NavigationButton>
            </Col>
        </Row>
        <Row>
            <Col>
                <CountryCard translation={translation} country={country}/>
            </Col>
        </Row>
    </Container>;
}

export async function countryLoader({params: {name}}) {
    const [country] = await restcountries.getByName(name);
    return {country};
}