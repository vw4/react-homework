import {Button, Card, ListGroup} from "react-bootstrap";
import _ from "lodash";
import './style.css';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {addCountries, removeCountry} from "../../store/actions";
import {useEffect} from "react";
import {getCountries} from "../../services/restcountries";
import {dispatch} from "../../store/store";
import {countriesSelector} from "../../store/selectors";

export default function CountriesList() {
    const countries = useSelector(countriesSelector);

    useEffect(() => {
        if (_.isEmpty(countries)) {
            getCountries().then(r => dispatch(addCountries(...r)));
        }
    }, [countries])

    if (_.isEmpty(countries)) {
        return;
    }

    const onCountryDeleteClick = (e) => {
        const {countryButton} = e.target.dataset;
        e.target.disabled = true;
        const containerElement = document.querySelector(`[data-country-item="${countryButton}"]`);
        containerElement.classList.add('hide');
        const targetCountry = _.find(countries, {name: {official: countryButton}});
        setTimeout(() => removeCountry(targetCountry), 200);
    }

    const CountryListItem = ({flag, name}) => {
        return <ListGroup.Item
            className="d-flex justify-content-between align-items-start country-list-item collapsable-container"
            data-country-item={name}
        >
            <div className="ms-2 me-auto">
                {flag} <Link to={`/country/${name}`}>{name}</Link>
            </div>
            <Button size="sm" onClick={onCountryDeleteClick} data-country-button={name}>Delete</Button>
        </ListGroup.Item>
    }

    return <Card>
        <Card.Header>Countries List</Card.Header>
        <Card.Body>
            <ListGroup>
                {countries.map(country => <CountryListItem key={country.name.official} flag={country.flag}
                                                             name={country.name.official}/>)}
            </ListGroup>
        </Card.Body>
    </Card>;
}