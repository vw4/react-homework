import {useCountryData} from "../hooks/useCountryData";
import {Button, Card, Form} from "react-bootstrap";
import {useEffect, useState} from "react";
import _ from "lodash";
import {useNavigate} from "react-router-dom";

const getTranslationsByCountry = (countryData, official) => {
    const {translations} = _.find(countryData, {name: {official}});
    if (!translations) {
        return [];
    }
    return _.entries(translations);
}

export default function CapitalForm() {
    const navigate = useNavigate();
    const {countryData} = useCountryData();
    const [selectedCountry, setSelectedCountry] = useState();
    const [currentCountryTranslations, setCurrentCountryTranslations] = useState();
    const [selectedTranslation, setSelectedTranslation] = useState();

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
        const translationsByCountry = getTranslationsByCountry(countryData, selectedCountry);
        setCurrentCountryTranslations(translationsByCountry);
        setSelectedTranslation(translationsByCountry[0][0]);
    }, [selectedCountry]);

    const onSelectCountry = (e) => {
        e.preventDefault();
        setSelectedCountry(e.target.value);
    }
    const onSelectTranslation = (e) => {
        e.preventDefault();
        setSelectedTranslation(e.target.value);
    }
    const onFormSubmit = (e) => {
        e.preventDefault();
        const formElements = e.target.elements;
        const {country: {value: country}, translation: {value: translation}} = formElements;
        navigate(`/country/${country}?translation=${translation}`);
    }

    if (!countryData) return;

    return <Card>
        <Card.Header>Capital Form Component</Card.Header>
        <Card.Body>
            <Form onSubmit={onFormSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Select Capital</Form.Label>
                    <Form.Select name='country' value={selectedCountry} onChange={onSelectCountry}>
                        {countryData.map(country =>
                            <option key={country.name.official}
                                    value={country.name.official}>{country.flag} {country.capital?.join(',')}</option>)
                        }
                    </Form.Select>
                </Form.Group>
                {currentCountryTranslations &&
                    <Form.Group className="mb-3">
                        <Form.Label>Select Translation</Form.Label>
                        <Form.Select name='translation' value={selectedTranslation} onChange={onSelectTranslation}>
                            {currentCountryTranslations.map(([translationCode]) =>
                                <option key={translationCode} value={translationCode}>{translationCode}</option>
                            )}
                        </Form.Select>
                    </Form.Group>
                }
                {selectedCountry && selectedTranslation &&
                    <Button variant="primary" type="submit">
                        Read more about {selectedCountry}
                    </Button>}
            </Form>
        </Card.Body>
    </Card>;
}