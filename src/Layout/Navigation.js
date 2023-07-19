import { Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navigation = () => {
    return (
        <>
            <Navbar className="bg-dark fontInconsolata" >
                <Container>
                    <Navbar.Brand className="text-white animate-charcter" href="/">
                        A Adriano
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className="text-white" href="/arts">Digital Arts</Nav.Link>
                            <Nav.Link className="text-white" href="/projects">Projects</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </>
    )
};

export default Navigation;