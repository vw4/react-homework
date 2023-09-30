import {useNavigate} from "react-router-dom";
import {Button} from "react-bootstrap";

export function NavigationButton({children, to, ...options}) {
    const navigate = useNavigate()
    const navigateTo = () => navigate(to);
    return <Button onClick={navigateTo} {...options}>{children}</Button>;
}