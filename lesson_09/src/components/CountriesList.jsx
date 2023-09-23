import {useCountryData} from "../hooks/useCountryData";
import {Button, Card, ListGroup} from "react-bootstrap";

export default function CountriesList() {
    const {countryData} = useCountryData();

    if (!countryData) {
        return;
    }
    const CountryListItem = ({flag, name}) => {
        return <ListGroup.Item
            className="d-flex justify-content-between align-items-start"
        >
            <div className="ms-2 me-auto">
                {flag} <a href={`/country/${name}`}>{name}</a>
            </div>
            <Button size="sm" onClick={() => alert('Not implemented yet!')}>Delete</Button>
        </ListGroup.Item>
    }
    return <Card>
        <Card.Header>Countries List</Card.Header>
        <Card.Body>
            <ListGroup>
                {countryData.map(country => <CountryListItem flag={country.flag} name={country.name.official}/>)}
            </ListGroup>
        </Card.Body>
    </Card>;
}