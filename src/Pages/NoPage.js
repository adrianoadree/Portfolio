import { faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../App.css'

const NoPage = () => {
    return (
        <div className='nopage'>
            <div className='container' style={{ textAlign: 'center' }}>
                <FontAwesomeIcon className='App-logo' icon={faCog} style={{ color: '#4A4947', fontSize: '100px', height: '100px' }} />
                <h1 className="marketing-message">404</h1>
                <hr style={{ borderTop: '5px solid #4A4947', maxWidth: '500px', margin: 'auto' }} />
                <h2 className="marketing-subtext">Page Not Found</h2>
            </div>
        </div>
    );
};

export default NoPage;