import { faBoltLightning } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Greetings = () => {



    return (
        <div className="row hero" style={{ margin: '0px' }}>
            <div className="col-lg-5 text-center justify-center job-title" style={{ color: 'wheat', backgroundColor: '#1d1d1dff', height: '100%' }}>
                <p className='fade-text' style={{ marginTop: '30%', fontSize: '12.5em', transform: 'rotate(345deg)' }}>
                    Sup! I'm
                </p>
                <p className='fade-text' style={{ fontSize: '7.1em', transform: 'rotate(345deg)' }}>
                    Adrian Adriano
                </p>
                <span className="thunder-container" style={{ fontSize: '13em', marginTop: '-50px' }}>
                    <FontAwesomeIcon icon={faBoltLightning} className="thunder-crazy" style={{ float: 'right', fontSize: '1em' }} />
                </span>

            </div>
            <div className="col-lg-7 job-title" style={{ color: 'wheat', backgroundColor: '#1d1d1dff', height: '100%' }}>
                <p className="text-end fade-text" style={{ marginTop: '20%', fontSize: '9em', transform: 'rotate(15deg)' }}>
                    Web Designer
                </p>

                <p className="text-end fade-text" style={{ marginTop: '.3em', fontSize: '11em', transform: 'rotate(15deg)' }}>
                    Front End
                </p>
                <p className=" fade-text" style={{ marginTop: '-.8em', paddingLeft: '1em', fontSize: '7.3em', transform: 'rotate(15deg)' }}>
                    Developer
                </p>
            </div>
        </div>

    )

};

export default Greetings;


