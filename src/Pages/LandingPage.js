import '../custom.css';
import { Container, Image } from 'react-bootstrap';








function LandingPage() {
    return (
        <div>
            <div className='row center' style={{ background: '#3F2E3E', width: '100%', padding: '40px' }}>
                <div className='row'>
                    <Container className='iconHover'>
                        <Image src={require('../Assets/studiopic.jpg')} roundedCircle='true' style={{ height: '300px' }} />
                    </Container>
                    
                    <div>
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12 text-center animate-charcter">
                                    <h1 className='fontRubik font-weight-bold' style={{ padding: '40px' }}>
                                        <span className='font-weight-bold' style={{ color: '#DDE6ED' }}>
                                            Hello World! my name is Adrian Adriano
                                        </span>
                                        <br />
                                        <span className='text-color1 font-weight-bold' style={{ color: '#9DB2BF' }}>I'm a Front-End Developer</span>
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    <span className='text-color1 font-weight-bold' style={{ color: '#9DB2BF' }}>
                        I create user-centered User Interface for Web and Mobile Applications
                    </span>
                </div>
                <br />
                <br />

                <div style={{ height: '50px' }}></div>


                <div className="card center border-round bg-dark" style={{ width: '800px' }}>
                    <div class="card-body">
                        <h4 className='text-white fontRubik font-weight-bold'>EDUCATIONAL BACKGROUND</h4>
                        <div class="d-flex justify-content-center mb-3" >
                            <div class="p-2">
                                <Image src={require('../Assets/Ateneo_de_Naga_University_logo.png')} roundedCircle='true' style={{ height: '150px' }} />
                            </div>
                            <div class="p-2 text-white ">
                                <br />
                                <span>Bachelor of Science in Information Technology</span><br />
                                <span>Ateneo de Naga University</span><br />
                                <span>Naga City, Camarines Sur</span><br />
                                <span>Class of 2023</span><br /></div>
                        </div>
                    </div>
                </div>

                <div style={{ height: '50px' }}></div>
                <h4 className='text-white fontRubik font-weight-bold'>
                    TECHNICAL SKILLS
                </h4>
                <div class="d-flex justify-content-center mb-3" >
                    <div class="p-2 iconHover">
                        <Image src={require('../Assets/JavaScript-logo.png')} style={{ height: '150px' }} />
                    </div>
                    <div class="p-2 text-white iconHover">
                        <Image src={require('../Assets/HTML5_logo.png')} style={{ height: '150px' }} />
                    </div>
                    <div class="p-2 text-white iconHover">
                        <Image src={require('../Assets/CSS3_logo.png')} style={{ height: '150px' }} />
                    </div>
                </div>
                <div class="d-flex justify-content-center mb-3" >
                    <div class="p-2 iconHover">
                        <Image src={require('../Assets/ReactJS.png')} rounded='true' style={{ height: '150px' }} />
                    </div>
                    <div class="p-2 text-white iconHover">
                        <Image src={require('../Assets/flutter-review.jpeg')} rounded='true' style={{ height: '150px' }} />
                    </div>
                </div>
                <div class="d-flex justify-content-center mb-3" >
                    <div class="p-2 iconHover">
                        <Image src={require('../Assets/ISO_C++_Logo.png')} rounded='true' style={{ height: '150px' }} />
                    </div>
                    <div class="p-2 iconHover">
                        <Image src={require('../Assets/firebase.png')} rounded='true' style={{ height: '150px' }} />
                    </div>
                </div>

                <div style={{ height: '50px' }}></div>

                <div className="card center border-round bg-dark" style={{ width: '800px' }}>
                    <div class="card-body">
                        
                        <h4 class="card-title text-white fontRubik font-weight-bold">
                            EXPERIENCE
                        </h4>
                        <div class="d-flex justify-content-center mb-3" >
                            <div class="p-2">
                                <Image src={require('../Assets/pandalivery-logo.jpg')} rounded='true' style={{ height: '200px' }} />
                            </div>
                            <div class="p-2 text-white ">
                                <br />
                                <span>Intern / Mobile Application Developer</span><br />
                                <span>Pandalivery Naga</span><br />
                                <span>Naga City, Camarines Sur</span><br />
                                <br />
                                <span style={{ fontSize: '12px' }}>Responsible for the front-end development of the mobile Application,</span><br />
                                <span style={{ fontSize: '12px' }}>Flutter technology was used to develop to cater Android </span><br />
                                <span style={{ fontSize: '12px' }}>and iOS users of Woop! a bicycle based errand services</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div >
            <div className='row center' style={{ background: '#331D2C', width: '100%', padding: '40px' }}>
                <h3 className='text-white fontRubik font-weight-bold'>
                    PROJECTS
                </h3>
                <div className='row'>
                    <div className='col'>
                        <div className='card'>
                            <h1>hi</h1>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='card'>
                            <h1>hi</h1>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    );
}
export default LandingPage;
