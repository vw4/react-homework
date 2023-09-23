import {useCountryData} from "../../hooks/useCountryData";
import {Button, Card, ListGroup} from "react-bootstrap";
import _ from "lodash";
import './style.css';
import {Link} from "react-router-dom";

export default function CountriesList() {
    const {countryData, setCountryData} = useCountryData();

    if (!countryData) {
        return;
    }

    const onCountryDeleteClick = (e) => {
        const {countryButton: country} = e.target.dataset;
        e.target.disabled = true;
        const containerElement = document.querySelector(`[data-country-item="${country}"]`);
        containerElement.classList.add('hide');
        setTimeout(() => setCountryData((prevState) => _.reject(prevState, {name: {official: country}})), 200);
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
                {countryData.map(country => <CountryListItem key={country.name.official} flag={country.flag}
                                                             name={country.name.official}/>)}
            </ListGroup>
        </Card.Body>
    </Card>;
}