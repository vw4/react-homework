import {useCountryData} from "../hooks/useCountryData";
import {Button, Card, Form} from "react-bootstrap";
import {useEffect, useState} from "react";
import _ from "lodash";

const getCurrenciesByCountry = (countryData, official) => {
    const {currencies} = _.find(countryData, {name: {official}});
    if (!currencies) {
        return [];
    }
    return _.entries(currencies);
}

export default function CapitalForm() {
    const {countryData} = useCountryData();
    const [selectedCountry, setSelectedCountry] = useState();
    const [currentCountryCurrencies, setCurrentCountryCurrencies] = useState();
    const [selectedCurrency, setSelectedCurrency] = useState();

    useEffect(() => {
        if (!countryData) {
            return;
        }
        setSelectedCountry(countryData[0].name.official);
    }, [countryData])

    useEffect(() => {
        if (!selectedCountry) {
            return;
        }
        const currenciesByCountry = getCurrenciesByCountry(countryData, selectedCountry);
        setCurrentCountryCurrencies(currenciesByCountry);
        setSelectedCurrency(currenciesByCountry[0][0]);
    }, [selectedCountry]);

    if (!countryData) return;

    return <Card>
        <Card.Header>Capital Form Component</Card.Header>
        <Card.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Select Capital</Form.Label>
                        <Form.Select value={selectedCountry}>
                            {countryData.map(country =>
                                <option key={country.name.official} value={country.name.official}>{country.flag} {country.capital?.join(',')}</option>)
                            }
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Select Translation</Form.Label>
                        <Form.Select>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Read more about ...
                    </Button>
                </Form>
        </Card.Body>
    </Card>;
}