import {CountriesList} from "../components/CountriesList/";
import {useLocation} from "react-router-dom";
import {Notification} from "../components/Notification";

export function CountriesRoute() {
    const {state} = useLocation();
    const renderNotification = () => {
        if (!state || !state.notification) {
            return;
        }
        return <Notification>{state.notification}</Notification>;
    }
    return <>
        <h3>Countries</h3>
        {renderNotification()}
        <CountriesList/>
    </>
}