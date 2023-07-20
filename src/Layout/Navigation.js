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
                    <Navbar.Brand className="text-white m-auto" href="/">
                        A Adriano
                    </Navbar.Brand>
                   
                </Container>
            </Navbar>
            <Outlet />
        </>
    )
};

export default Navigation;