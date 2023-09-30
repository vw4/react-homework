import {Card} from "react-bootstrap";
import KvList from "./KvList";

export function CountryCard({translation, country}) {
    return <Card>
        <Card.Header>{translation ? country.translations[translation].official : country.name.official}</Card.Header>
        <Card.Body>
            <KvList value={country}/>
        </Card.Body>
    </Card>;
}