import { Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import AALogo from '../Assets/AA-white.png'

const Navigation = () => {
    return (
        <>
            <nav className='navstyle'>
                <div className='nav-logo'>
                    <a className='text-link' href="/">
                        <img className="dropshadow-hover" src={AALogo} style={{ height: '4em' }} alt="Adrian Adriano" />
                    </a>
                </div>
                <div className='text-link-container ' >
                    <a className='text-link' href="/about-me">About Me</a>
                    <a className='text-link' href="/projects">Projects</a>
                    <a className='text-link' href="/arts">Arts</a>
                </div>

            </nav >
            <Outlet />
        </>
    )
};

export default Navigation;