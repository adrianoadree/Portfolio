import '../custom.css';
import { Image } from 'react-bootstrap';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faEye } from '@fortawesome/free-regular-svg-icons';

function Projects() {

    const [projectButtonBool, setProjectButtonBool] = useState(true);
    const [artButtonBool, setArtButtonBool] = useState(false);

    return (

        <>
            <div className='row center' style={{ width: '100%', padding: '40px' }}>
                <div className='card shadow bgImage' style={{ width: '100%', padding: '50px', borderRadius: '30px' }}>
                    <h2 className='fontRubik font-weight-bold' style={{ padding: '40px' }}>
                        <span style={{ color: '#27374D', fontWeight: 'bold' }}>
                            Hello World! my name is <span style={{ color: '#19A7CE' }}>Adrian Adriano</span>
                        </span>
                        <br />
                        <span className='text-color1 font-weight-bold' style={{ color: '#526D82' }}>I'm a Front-End Developer</span>
                    </h2>
                    <span className='text-color1 font-weight-bold' style={{ color: '#9DB2BF' }}>
                        I create user-centered User Interface for Web and Mobile Applications
                    </span>
                </div>
                <div className='row' style={{ height: '50px' }}></div>
                <div className='row center mt-5'>
                    <h6 className='fontRubik' style={{ fontWeight: 'bold' }} >
                        scroll down to know more
                        <span style={{ color: '#19A7CE' }}> about me</span>
                    </h6>

                    <div className='row' style={{ height: '50px' }} />
                </div>

                <div class="section"></div>
            </div>

            <div className='row' style={{ paddingLeft: '300px', paddingRight: '300px', paddingTop: '20px', backgroundColor: '#EDE4FF' }}>
                <div className='row center'>

                    <div class="card-body">
                        <div className='separator'>
                            <h4 className='fontRubik' style={{ fontWeight: 'bold' }}>EDUCATIONAL <span style={{ color: '#FF8400' }}>BACKGROUND</span></h4>
                        </div>
                        <div class="d-flex justify-content-center mb-3" >
                            <div class="p-2">
                                <Image src={require('../Assets/Ateneo_de_Naga_University_logo.png')} roundedCircle='true' style={{ height: '150px' }} />
                            </div>
                            <div class="p-2 ">
                                <br />
                                <div className='fontKanit'>
                                    <span >Bachelor of Science in Information Technology</span><br />
                                    <span>Ateneo de Naga University</span><br />
                                    <span>Naga City, Camarines Sur</span><br />
                                    <span>Class of 2023</span><br />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body pt-5">
                        <div className='separator'>
                            <h4 className='fontRubik' style={{ fontWeight: 'bold' }}>INTERNSHIP <span style={{ color: '#FF8400' }}>EXPERIENCE</span></h4>
                        </div>
                        <div class="d-flex justify-content-center mb-3" >
                            <div class="p-2">
                                <Image src={require('../Assets/pandalivery-logo.jpg')} rounded='true' style={{ height: '180px' }} />
                            </div>
                            <div class="p-2">
                                <span className='fontKanit'>Intern / Mobile Application Developer</span><br />
                                <span className='fontKanit'>Pandalivery Naga</span><br />
                                <span className='fontKanit'>Naga City, Camarines Sur</span><br />
                                <span className='fontInconsolata' style={{ fontSize: '14px' }}>- Responsible for the front-end development of the mobile Application. Flutter technology was
                                    used to develop to cater Android and iOS users of Woop! a bicycle based errand services</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div >
            <div className='center mt-5'>
                <div className='separator'>
                    <h4 className='fontRubik' style={{ fontWeight: 'bold' }}>MY <span style={{ color: '#19A7CE' }}>CAPABILITIES</span></h4>
                </div>
                <div className='row'>
                    <span className='fontKanit'>• ReachJS • Flutter Technology • Firebase Database • Firestore •  JavaScript • HTML • CSS • C++ • Adobe Illustrator • Adobe Photoshop •  Adobe Lightroom • </span><br />
                </div>
            </div>

            <div className='row mt-5'>

                <div className='row center' style={{ justifyContent: 'center' }}>
                    {projectButtonBool ?
                        <button className='mx-2 fontKanit shadow'
                            style={{ width: '350px', height: '70px', border: '5px solid #19A7CE', borderRadius: '20px', fontWeight: 'bold', backgroundColor: '#EDE4FF', fontSize: '25px' }}
                            onClick={(event) => {
                                setProjectButtonBool(!projectButtonBool);
                                setArtButtonBool(!artButtonBool);
                            }}
                        >
                            PROJECTS
                        </button>
                        :
                        <button className='mx-2 fontKanit shadow'
                            style={{ width: '350px', height: '70px', border: '1px solid white', borderRadius: '20px', fontWeight: 'bold', backgroundColor: '#EDE4FF', fontSize: '20px', color: '#526D82' }}
                            onClick={(event) => {
                                setProjectButtonBool(!projectButtonBool);
                                setArtButtonBool(!artButtonBool);
                            }}
                        >
                            PROJECTS
                        </button>
                    }
                    {artButtonBool ?
                        <button className='mx-2 fontKanit shadow'
                            style={{ width: '350px', height: '70px', border: '5px solid #19A7CE', borderRadius: '20px', fontWeight: 'bold', backgroundColor: '#EDE4FF', fontSize: '25px' }}
                            onClick={(event) => {
                                setProjectButtonBool(!projectButtonBool);
                                setArtButtonBool(!artButtonBool);
                            }}
                        >
                            DIGITAL ARTS
                        </button>
                        :
                        <button className='mx-2 fontKanit shadow'
                            style={{ width: '350px', height: '70px', border: '1px solid white', borderRadius: '20px', fontWeight: 'bold', backgroundColor: '#EDE4FF', fontSize: '20px', color: '#526D82' }}
                            onClick={(event) => {
                                setProjectButtonBool(!projectButtonBool);
                                setArtButtonBool(!artButtonBool);
                            }}
                        >
                            DIGITAL ARTS
                        </button>
                    }

                </div>
            </div>

            {artButtonBool ?
                <div className='row mt-3'>
                    <div className='row center' style={{ justifyContent: 'center' }}>
                        <div className='guide card shadow' style={{ width: '720px', borderRadius: '20px', backgroundColor: '#EDE4FF' }}>
                            <div className='row mt-5 bg-white shadow' style={{ height: '170px' }}>
                                <svg>
                                    <symbol id="s-text">
                                        <text text-anchor="middle" x="50%" y="80%">ARTS </text>
                                        <text text-anchor="middle" x="51%" y="80%">ARTS </text>
                                    </symbol>
                                    <g class="g-ants">
                                        <use xlinkHref="#s-text" class="text-copy"></use>
                                        <use xlinkHref="#s-text" class="text-copy"></use>
                                        <use xlinkHref="#s-text" class="text-copy"></use>
                                        <use xlinkHref="#s-text" class="text-copy"></use>
                                        <use xlinkHref="#s-text" class="text-copy"></use>
                                    </g>
                                </svg>
                            </div>
                            <div className='row mt-5 iconHover' style={{ justifyContent: 'center', display: 'inline-block' }}>
                                <div className='card bg-white shadow bgImageArt1 mx-3' style={{ height: "250px", width: '250px', backgroundPosition: 'center', display: 'inline-block' }}></div>
                                <div className='card bg-white shadow bgImageArt2 mx-3' style={{ height: "250px", width: '250px', backgroundPosition: 'center', display: 'inline-block' }}></div>
                            </div>
                            <div className='row mt-5 iconHover' style={{ justifyContent: 'center', display: 'inline-block' }}>
                                <div className='card bg-white shadow bgImageArt3 mx-3' style={{ height: "250px", width: '250px', backgroundPosition: 'center', display: 'inline-block' }}></div>
                                <div className='card bg-white shadow bgImageArt4 mx-3' style={{ height: "250px", width: '250px', backgroundPosition: 'center', display: 'inline-block' }}></div>
                            </div>
                            <div className='row mt-5 iconHover' style={{ justifyContent: 'center', display: 'inline-block' }}>
                                <div className='card bg-white shadow bgImageArt5 mx-3' style={{ height: "350px", width: '250px', backgroundPosition: 'center', display: 'inline-block' }}></div>
                                <div className='card bg-white shadow bgImageArt6 mx-3' style={{ height: "350px", width: '250px', backgroundPosition: 'center', display: 'inline-block' }}></div>
                            </div>
                            <div className='row mt-5 iconHover' style={{ justifyContent: 'center', display: 'inline-block' }}>
                                <div className='card bg-white shadow bgImageArt7 mx-3' style={{ height: "250px", width: '250px', backgroundPosition: 'center', display: 'inline-block' }}></div>
                                <div className='card bg-white shadow bgImageArt8 mx-3' style={{ height: "250px", width: '250px', backgroundPosition: 'center', display: 'inline-block' }}></div>
                            </div>

                            <div className='row my-5  iconHover' style={{ justifyContent: 'center', display: 'inline-block' }}>
                                <div className='card bg-white shadow bgImageArt9 mx-3' style={{ height: "250px", width: '250px', backgroundPosition: 'center', display: 'inline-block' }}></div>
                                <div className='card bg-white shadow bgImageArt10 mx-3' style={{ height: "250px", width: '250px', backgroundPosition: 'center', display: 'inline-block' }}></div>
                            </div>
                        </div>
                    </div>
                </div>

                :
                <div className='row mt-3'>
                    <div className='row center' style={{ justifyContent: 'center' }}>
                        <div className='guide card shadow' style={{ width: '720px', borderRadius: '20px', backgroundColor: '#EDE4FF' }}>
                            <div className='row mt-5 bg-white shadow' style={{ height: '170px' }}>
                                <svg>
                                    <symbol id="s-text">
                                        <text text-anchor="middle" x="50%" y="80%">PROJECTS </text>
                                        <text text-anchor="middle" x="51%" y="80%">PROJECTS </text>
                                    </symbol>
                                    <g class="g-ants">
                                        <use xlinkHref="#s-text" class="text-copy"></use>
                                        <use xlinkHref="#s-text" class="text-copy"></use>
                                        <use xlinkHref="#s-text" class="text-copy"></use>
                                        <use xlinkHref="#s-text" class="text-copy"></use>
                                        <use xlinkHref="#s-text" class="text-copy"></use>
                                    </g>
                                </svg>
                            </div>

                            <div className='row' style={{ justifyContent: 'center' }}>
                                <div className='card m-5' style={{ width: '650px' }}>
                                    <div className='card-header' >

                                        <div>
                                            <a className='fontRubik'
                                                style={{ height: '20px', fontWeight: 'bold', fontSize: '20px' }}
                                                href='/view-project-ims'>
                                                <span style={{ color: 'black' }}>IMS:</span><span style={{ color: '#FF8400' }}> Inventory Management System</span>
                                            </a>
                                        </div>
                                        <div className="pt-2 d-flex flex-row-reverse bd-highlight">
                                            <a className="px-3 bd-highlight" href='https://github.com/adrianoadree/IMSweb'>
                                                <FontAwesomeIcon className='buttonHover' icon={faGithub} style={{ fontSize: '30px', }} />
                                            </a>
                                            <a className="px-3 bd-highlight" href='https://inventoryapp-330808.web.app'>
                                                <FontAwesomeIcon className='buttonHover' icon={faEye} style={{ fontSize: '30px', }} />
                                            </a>
                                        </div>
                                    </div>
                                    <div className='card-body m-auto' style={{ justifyContent: 'center' }}>
                                        <Image className=' card' src={require('../Assets/Projects/IMS/IMS1.png')} rounded='true' style={{ height: '250px' }} />
                                    </div>
                                    <div className='center' style={{ display: 'inline-block', width: '600px' }}>
                                        <div className='card mx-3' style={{ display: 'inline-block' }}>
                                            <Image className=' card' src={require('../Assets/Projects/IMS/IMS2.png')} rounded='true' style={{ height: '120px' }} />
                                        </div>
                                        <div className='card' style={{ display: 'inline-block' }}>
                                            <Image className=' card' src={require('../Assets/Projects/IMS/IMS3.png')} rounded='true' style={{ height: '120px' }} />
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className='row' style={{ justifyContent: 'center' }}>
                                <div className='card m-5' style={{ width: '450px' }}>
                                    <div className='card-header align-middle'>
                                        <a className='fontRubik '
                                            href='/view-project-woop'
                                            style={{ fontWeight: 'bold', fontSize: '20px' }}>
                                            <span style={{ color: 'black' }}>Woop!</span>
                                            <span style={{ color: '#FF8400' }}> (Internship Project)</span>
                                        </a>
                                        <div className="pt-2 d-flex flex-row-reverse bd-highlight">
                                            <a className="px-3 bd-highlight" href='https://github.com/markguchi/woop/tree/main/mobile_customer'>
                                                <FontAwesomeIcon className='buttonHover' icon={faGithub} style={{ fontSize: '30px', }} />
                                            </a>
                                        </div>
                                    </div>
                                    <div className='card-body m-auto' style={{ justifyContent: 'center' }}>
                                        <Image className=' card' src={require('../Assets/Projects/Woop/Woop1.png')} rounded='true' style={{ height: '450px' }} />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div >
            }

            <div className='footer' style={{ height: '200px', marginTop: '100px', backgroundColor: '#EDE4FF' }}>
                <div className='center'>
                    <h5 className='fontRubik my-5' style={{ fontWeight: 'bold' }}> my personal <span style={{ color: '#FF8400' }}>accounts</span> </h5>
                    <div className='my-5' style={{ fontSize: '7px' }}>
                        <a className='mx-3' href="mailto:adrianoadriannn@gmail.com" style={{ display: 'inline-block' }}>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                        <a className='mx-3' href="https://www.linkedin.com/in/adrianoadriannn/" style={{ display: 'inline-block' }}>
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a className='mx-3' href="https://www.facebook.com/ADRIANOadriann/" style={{ display: 'inline-block' }}>
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a className='mx-3' href="https://www.discordapp.com/users/adriannn#3845" style={{ display: 'inline-block' }}>
                            <FontAwesomeIcon icon={faDiscord} />
                        </a>
                        <a className='mx-3' href="https://github.com/adrianoadree" style={{ display: 'inline-block' }}>
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>
                </div>

            </div >



        </>
    );
}
export default Projects;
