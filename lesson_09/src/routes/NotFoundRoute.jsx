import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

const REDIRECT_TIMOUT_S = 5;

export function NotFoundRoute() {
    const [redirectTimoutCounter, setRedirectTimoutCounter] = useState(REDIRECT_TIMOUT_S);
    const navigate = useNavigate();
    useEffect( () => {
        const pageTimoutCounterIntervalId = setInterval(() => {
            setRedirectTimoutCounter(prevState => prevState > 0 ? prevState - 1 : 0);
        }, 1000);
        const timeoutId = setTimeout(() => {
            navigate('/');
        }, REDIRECT_TIMOUT_S * 1000);
        return () => {
            clearInterval(pageTimoutCounterIntervalId);
            clearTimeout(timeoutId);
        };
    }, [navigate]);
    return <>
        <h3>Page not found!</h3>
        <p>Redirecting to <Link to='/'>the home page</Link> in {redirectTimoutCounter} seconds.</p>
    </>
}