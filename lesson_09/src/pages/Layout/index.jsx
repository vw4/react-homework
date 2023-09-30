import {Outlet} from "react-router-dom";
import {Navigation} from "../../components/Navigation";
import "./style.css";
import {Col, Container, Row} from "react-bootstrap";
import {ScrollToTop} from "../../components/ScrollToTop";

export function Layout() {
    return <>
        <ScrollToTop/>
        <header>
            <Navigation/>
        </header>
        <main>
            <Container>
                <Row>
                    <Col className='main-content'>
                        <Outlet/>
                    </Col>
                </Row>
            </Container>
        </main>
    </>;
}