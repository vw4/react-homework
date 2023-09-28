import {Button, Card, Form} from "react-bootstrap";
import {useMemo, useState} from "react";
import _ from "lodash";
import {createSearchParams, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {countriesSelector} from "../store/selectors";

export default function CapitalForm() {
    const navigate = useNavigate();
    const countries = useSelector(countriesSelector);

    const [selectedCapital, setSelectedCapital] = useState(null);
    const [selectedTranslation, setSelectedTranslation] = useState();

    const capitals = useMemo(() => {
        if (_.isEmpty(countries)) return [];
        return countries.map(country => ({
            country,
            countryName: _.get(country, 'name.official'),
            capital: `${country.flag || ''} ${country.capital?.join(',') || 'no capital'}`,
            translations: _.keys(_.get(country, 'translations', {})),
        }));
    }, [countries]);

    const onSelectCountry = (e) => {
        e.preventDefault();
        const selectedCapital = _.find(capitals, {countryName: e.target.value});
        setSelectedCapital(selectedCapital);
        setSelectedTranslation(selectedCapital.translations[0]);
    }
    const onSelectTranslation = (e) => {
        e.preventDefault();
        setSelectedTranslation(e.target.value);
    }
    const onFormSubmit = (e) => {
        e.preventDefault();
        const formElements = e.target.elements;
        const {country: {value: country}, translation: {value: translation}} = formElements;
        navigate({
            pathname: `country/${country}`,
            search: createSearchParams({translation}).toString()
        });
    }

    if (_.isEmpty(countries)) return;

    const currentCapital = selectedCapital || capitals[0];
    const currentTranslation = selectedTranslation || currentCapital.translations[0];

    return <Card>
        <Card.Header>Capital Form Component</Card.Header>
        <Card.Body>
            <Form onSubmit={onFormSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Select Capital</Form.Label>
                    <Form.Select name='country' value={currentCapital.countryName} onChange={onSelectCountry}>
                        {capitals.map(({capital, countryName}) => <option key={countryName} value={countryName}>{capital}</option>)}
                    </Form.Select>
                </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Select Translation</Form.Label>
                        <Form.Select name='translation' value={currentTranslation} onChange={onSelectTranslation}>
                            {currentCapital.translations.map(translation => <option key={translation} value={translation}>{translation}</option>)}
                        </Form.Select>
                    </Form.Group>
                    <Button variant="primary" type="submit">Read more about {currentCapital.countryName}</Button>
            </Form>
        </Card.Body>
    </Card>;
}