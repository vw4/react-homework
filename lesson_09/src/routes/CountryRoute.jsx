import {useParams} from "react-router-dom";

export function CountryRoute() {
    let {id} = useParams();
    return <h1>CountryRoute {id}</h1>
}