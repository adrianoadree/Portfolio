import '../custom.css';
import ContactMe from '../Components/ContactMe';
import Greetings from '../Components/Greetings';
import AboutMe from '../Components/AboutMe';
import Skills from '../Components/Skills';
import Footer from '../Components/Footer';

function Home() {


    return (
        <>
            <Greetings />
            <AboutMe />
            <Skills />
            <div className='row' style={{ height: 'auto', backgroundColor: '#0F0E0E' }}>

                <h1 className='text-center fontTitle px-5 pt-5' style={{ marginTop: '.2em', fontSize: "10em", color: "#948979" }}>
                    Arts & Projects
                </h1>
                <div className='col-lg-6 px-5 text-center projects-bg overlay-color' style={{ height: '70vh' }}>
                    <a href='/projects'>
                        <button
                            className='view-button dropshadow-hover fontRaleway px-5 py-3'
                        >
                            View Projects
                        </button>
                    </a>
                </div>
                <div className='col-lg-6 px-5 text-center arts-bg overlay-color ' style={{ height: '70vh' }}>
                    <a href='/arts'>
                        <button
                            className='view-button dropshadow-hover fontRaleway px-5 py-3'
                            style={{ width: '100%' }}
                        >
                            View Arts
                        </button>
                    </a>
                </div>
            </div>
            <ContactMe />
            <Footer />
        </>

    );
}
export default Home;
