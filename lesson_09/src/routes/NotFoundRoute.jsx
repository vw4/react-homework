import {Link, useNavigate} from "react-router-dom";
import {useEffect} from "react";

const REDIRECT_TIMOUT_S = 5;

export function NotFoundRoute() {
    const navigate = useNavigate();
    useEffect( () => {
        let timeoutId = setTimeout(() => {
            timeoutId = null;
            navigate('/');
        }, REDIRECT_TIMOUT_S * 1000);
        return () => {
            clearTimeout(timeoutId);
        };
    }, [navigate]);
    return <>
        <h3>Page not found!</h3>
        <p>Redirecting to <Link to='/'>the home page</Link> in 5 seconds.</p>
    </>
}