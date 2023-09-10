import { Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from "react-bootstrap";

const Navigation = () => {
    return (
        <>
            <Navbar className="bg-white fontBree shadow container-fluid" >
                <div style={{float:"right"}}> 
                    <Navbar.Brand className="text-black buttonHover px-5" href="/">
                        Adrian
                    </Navbar.Brand>
                   

                </div>
            </Navbar>
            <Outlet />
        </>
    )
};

export default Navigation;