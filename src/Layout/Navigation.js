import { Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from "react-bootstrap";

const Navigation = () => {
    return (
        <>
            <Navbar className="bg-white fontRubik shadow" >
                <Container>
                    <Navbar.Brand className="text-black buttonHover" href="/">
                        Adrian
                    </Navbar.Brand>
                    <div className='d-flex justify-content-end'>
                        <Nav.Link href="#projects" className="mx-3">Project</Nav.Link>
                        <Nav.Link href="#arts" className="mx-3">Arts</Nav.Link>
                        <Nav.Link href="#contact" className="mx-3">Contact</Nav.Link>

                    </div>

                </Container>
            </Navbar>
            <Outlet />
        </>
    )
};

export default Navigation;