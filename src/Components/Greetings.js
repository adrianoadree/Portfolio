import { Responsive } from 'typed-responsive-react';
import { Image } from 'react-bootstrap';

const Greetings = () => {



    return (
        <>
            <Responsive displayIn={["laptop"]}>
                <div className='shadowBottom container-fluid' style={{ backgroundColor: '#F5F5F5' }}>
                    <div className='row m-auto' id='about' style={{ width: '1000px', height: '90vh', }}>
                        <div className='col-md-7 col-xs-12 p-5 bounce-in-right'
                        >
                            <p className='fontBorel m-auto' style={{ fontSize: '120px', paddingTop: '100px' }}>
                                hello!<span className="wave">👋🏻</span>
                            </p>
                            <p className='fontBree' style={{ fontSize: '50px', textAlign: 'center' }}>I'm Adrian </p>
                            <p className='fontBree' style={{ fontSize: '20px', textAlign: 'center' }}>A Front-End Developer and Digital Artist</p>
                        </div>
                        <div className='col-md-5 col-xs-12 bounce-in'>
                            <Image className='m-5' src={require('../Assets/vectorportrait.png')} style={{ height: '500px' }} />
                        </div>
                    </div>
                </div>
            </Responsive>
            <Responsive displayIn={["mobile", "tablet"]}>
                <div className='shadowBottom container-fluid' style={{ height: '80vh', backgroundColor: '#F5F5F5' }}>
                    <div className="pt-4 d-flex justify-content-center bounce-in">
                        <Image src={require('../Assets/vectorportrait.png')} style={{ height: '300px' }} />
                    </div>
                    <div className="bounce-in-right"
                        style={{ paddingTop: '40px', paddingBottom: '50px' }}>
                        <p className='d-flex justify-content-center fontBorel' style={{ fontSize: '40px' }}>
                            hello!<span className="wave">👋🏻</span>
                        </p>
                        <p className='justify-content-center fontBree' style={{ fontSize: '20px', textAlign: 'center' }}>I'm Adrian </p>
                        <p className='justify-content-center fontBree' style={{ fontSize: '15px', textAlign: 'center' }}>A Front-End Developer and Digital Artist</p>
                    </div>
                </div>
            </Responsive>
        </>
    )

};

export default Greetings;


