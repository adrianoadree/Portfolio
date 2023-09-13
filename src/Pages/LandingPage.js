import '../custom.css';
import ContactMe from '../Components/ContactMe';
import Greetings from '../Components/Greetings';
import AboutMe from '../Components/AboutMe';
import Skills from '../Components/Skills';
import Projects from '../Components/Projects';
import Arts from '../Components/Arts';
import Footer from '../Components/Footer';

function LandingPage() {


    return (
        <>
            <Greetings />
            <AboutMe />
            <Skills />
            <Projects />
            <Arts />
            <ContactMe />
            <Footer />
        </>

    );
}
export default LandingPage;
