import {useCountryData} from "../hooks/useCountryData";
import {Button, Card, ListGroup} from "react-bootstrap";
import _ from "lodash";

export default function CountriesList() {
    const {countryData, setCountryData} = useCountryData();

    if (!countryData) {
        return;
    }

    const onCountryDeleteClick = (e) => {
        const {country} = e.target.dataset;
        setCountryData(_.reject(countryData, {name: {official: country}}));
    }

    const CountryListItem = ({flag, name}) => {
        return <ListGroup.Item
            className="d-flex justify-content-between align-items-start"
        >
            <div className="ms-2 me-auto">
                {flag} <a href={`/country/${name}`}>{name}</a>
            </div>
            <Button size="sm" onClick={onCountryDeleteClick} data-country={name}>Delete</Button>
        </ListGroup.Item>
    }

    return <Card>
        <Card.Header>Countries List</Card.Header>
        <Card.Body>
            <ListGroup>
                {countryData.map(country => <CountryListItem key={country.name.official} flag={country.flag} name={country.name.official}/>)}
            </ListGroup>
        </Card.Body>
    </Card>;
}