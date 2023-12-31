import {Button, Card, ListGroup} from "react-bootstrap";
import _ from "lodash";
import "./style.css";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {removeCountry} from "../../store/actions";
import {countriesSelector} from "../../store/selectors";
import {dispatch} from "../../store/store";

export function CountriesList() {
    const countries = useSelector(countriesSelector);

    if (_.isEmpty(countries)) {
        return <p>No countries...</p>;
    }

    const onCountryDeleteClick = (e) => {
        const {countryButton} = e.target.dataset;
        e.target.disabled = true;
        const containerElement = document.querySelector(`[data-country-item="${countryButton}"]`);
        containerElement.classList.add('hide');
        const targetCountry = _.find(countries, {name: {official: countryButton}});
        setTimeout(() => dispatch(removeCountry(targetCountry)), 200);
    }

    const CountryListItem = ({flag, name}) => {
        return <ListGroup.Item
            className="d-flex justify-content-between align-items-start country-list-item collapsable-container"
            data-country-item={name}
        >
            <div className="ms-2 me-auto">
                {flag} <Link to={`/country/${name}`}>{name}</Link>
            </div>
            <Button size="sm" variant="danger" onClick={onCountryDeleteClick} data-country-button={name}>Delete</Button>
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