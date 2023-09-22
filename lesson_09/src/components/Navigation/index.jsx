import {NavLink} from "react-router-dom";
import './style.css';
import {Container, Nav, Navbar} from "react-bootstrap";

export function Navigation() {
    return <Navbar expand="lg" className="bg-body-tertiary"  bg="dark" data-bs-theme="dark">
        <Container>
            <Navbar.Brand>ДЗ 6. Countries App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavLink className={'nav-link'} to='/'>Home</NavLink>
                    <NavLink className={'nav-link'} to='/countries'>Countries</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}