import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import AALogo from '../Assets/AA-white.png'

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            <nav className='navstyle'>
                {/* Hamburger menu (only visible on mobile/tablet) */}
                <button
                    className="hamburger"
                    onClick={toggleMenu}
                >
                    ☰
                </button>

                {/* Logo */}
                <div className='nav-logo'>
                    <NavLink className='text-link' to="/">
                        <img
                            className="dropshadow-hover"
                            src={AALogo}
                            style={{ height: '4em' }}
                            alt="Adrian Adriano"
                        />
                    </NavLink>
                </div>

                {/* Desktop links (unchanged) */}
                <div className='text-link-container nav-bar-right'>
                    <NavLink
                        to="/about-me"
                        className={({ isActive }) =>
                            isActive ? "text-link active-link" : "text-link"
                        }
                    >
                        About Me
                    </NavLink>
                    <NavLink
                        to="/projects"
                        className={({ isActive }) =>
                            isActive ? "text-link active-link" : "text-link"
                        }
                    >
                        Projects
                    </NavLink>
                    <NavLink
                        to="/arts"
                        className={({ isActive }) =>
                            isActive ? "text-link active-link" : "text-link"
                        }
                    >
                        Arts
                    </NavLink>
                </div>

                {/* Mobile dropdown */}
                <div className={`nav-links-mobile ${isOpen ? "open" : ""}`}>
                    <NavLink to="/about-me" className="text-link" onClick={() => setIsOpen(false)}>
                        About Me
                    </NavLink>
                    <NavLink to="/projects" className="text-link" onClick={() => setIsOpen(false)}>
                        Projects
                    </NavLink>
                    <NavLink to="/arts" className="text-link" onClick={() => setIsOpen(false)}>
                        Arts
                    </NavLink>
                </div>
            </nav>

            <Outlet />
        </>
    )
};

export default Navigation;