import { Responsive } from 'typed-responsive-react';
import {
    MDBFooter,
    MDBContainer,
} from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faDiscord, faGithub, faReact } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const Footer = () => {



    return (
        <>
            <Responsive displayIn={["laptop"]}>
                <MDBFooter id='contact' className='text-center mt-5' color='white' bgColor='dark'>
                    <MDBContainer className='p-4 ' style={{ height: '100px' }}>
                        <section className='mb-4'   >
                            <a className='mx-3' href="mailto:adrianoadriannn@gmail.com" style={{ display: 'inline-block' }}>
                                <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '50px' }} />
                            </a>
                            <a className='mx-3' href="https://www.linkedin.com/in/adrianoadriannn/" style={{ display: 'inline-block' }}>
                                <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '50px' }} />
                            </a>
                            <a className='mx-3' href="https://www.facebook.com/ADRIANOadriann/" style={{ display: 'inline-block' }}>
                                <FontAwesomeIcon icon={faFacebook} style={{ fontSize: '50px' }} />
                            </a>
                            <a className='mx-3' href="https://www.discordapp.com/users/adriannn#3845" style={{ display: 'inline-block' }}>
                                <FontAwesomeIcon icon={faDiscord} style={{ fontSize: '50px' }} />
                            </a>
                            <a className='mx-3' href="https://github.com/adrianoadree" style={{ display: 'inline-block' }}>
                                <FontAwesomeIcon icon={faGithub} style={{ fontSize: '50px' }} />
                            </a>
                        </section>
                    </MDBContainer>
                    <div className='text-center p-3' style={{ height: '50px', backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                        <p> ©Adrian Adriano 2023 </p>
                    </div>
                </MDBFooter>
            </Responsive>

            <Responsive displayIn={["mobile", "tablet"]}>

                <MDBFooter id='contact' className='text-center mt-5' color='white' bgColor='dark' >
                    <MDBContainer className='p-4' style={{ height: '70px' }}>
                        <div class="d-flex justify-content-center">
                            <a className='mx-3' href="mailto:adrianoadriannn@gmail.com" style={{ display: 'inline-block' }}>
                                <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '20px' }} />
                            </a>
                            <a className='mx-3' href="https://www.linkedin.com/in/adrianoadriannn/" style={{ display: 'inline-block' }}>
                                <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '20px' }} />
                            </a>
                            <a className='mx-3' href="https://www.facebook.com/ADRIANOadriann/" style={{ display: 'inline-block' }}>
                                <FontAwesomeIcon icon={faFacebook} style={{ fontSize: '20px' }} />
                            </a>
                            <a className='mx-3' href="https://www.discordapp.com/users/adriannn#3845" style={{ display: 'inline-block' }}>
                                <FontAwesomeIcon icon={faDiscord} style={{ fontSize: '20px' }} />
                            </a>
                            <a className='mx-3' href="https://github.com/adrianoadree" style={{ display: 'inline-block' }}>
                                <FontAwesomeIcon icon={faGithub} style={{ fontSize: '20px' }} />
                            </a>
                        </div>
                    </MDBContainer>
                    <div className='text-center p-3' style={{ height: '50px', backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                        <p> ©Adrian Adriano 2023 </p>
                    </div>
                </MDBFooter>
            </Responsive>

        </>

    )

};

export default Footer;


