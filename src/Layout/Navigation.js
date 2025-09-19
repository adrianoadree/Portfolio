import { Outlet, NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import AALogo from '../Assets/AA-white.png'

const Navigation = () => {
    return (
        <>
            <nav className='navstyle'>
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
            </nav>
            <nav className="mobile-nav">
                <div className='nav-logo'>
                    <NavLink className='text-link' to="/" style={{ float: 'left' }}>
                        <img
                            className="dropshadow-hover"
                            src={AALogo}
                            style={{ height: '4em' }}
                            alt="Adrian Adriano"
                        />
                    </NavLink>
                </div>
            </nav>
            <Outlet />
        </>
    )
};

export default Navigation;