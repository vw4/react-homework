import {Button, Card} from "react-bootstrap";
import {KvList} from "./KvList";
import {dispatch} from "../store/store";
import {removeCountryByName} from "../store/actions";
import {useNavigate} from "react-router-dom";

export function CountryCard({translation, country}) {
    const navigate = useNavigate();

    const countryName = country.name.official;
    const countryNameTranslated = translation ? country.translations[translation].official : countryName;

    const handleDelete = () => {
        dispatch(removeCountryByName(countryName));
        navigate('/countries', {state: {notification: `"${countryName}" deleted!`}});
    }

    return <Card>
        <Card.Header>
            {countryNameTranslated} <Button size="sm" variant="danger" onClick={handleDelete}>Delete</Button>
        </Card.Header>
        <Card.Body>
            <KvList value={country}/>
        </Card.Body>
    </Card>;
}