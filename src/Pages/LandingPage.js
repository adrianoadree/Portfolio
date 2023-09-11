import '../custom.css';
import { Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faDiscord, faGithub, faReact } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { motion } from "framer-motion";
import {
    MDBFooter,
    MDBContainer,
} from 'mdb-react-ui-kit';
import { Responsive } from 'typed-responsive-react';
import ArtCard from '../Components/ArtCard';
import ProjectCardWeb1 from '../Components/ProjectCardWeb1';
import ProjectCardWeb2 from '../Components/ProjectCardWeb2';

import bgIMS from '../Assets/Projects/IMS/IMS1.png';
import bgTuwayan from '../Assets/Projects/Tuwayan/tuwayan1.png';
import bgBrickBreaker from '../Assets/Projects/Brickbreaker/brickbreaker.png';
import WoopLogo from '../Assets/Projects/Woop/Woop_Logo_Outlined.png';
import WoopDisplay from '../Assets/WoopDisplay.png'
import IMSDisplay from '../Assets/IMSDisplay.png'
import TuwayanDisplay from '../Assets/TuwayanDisplay.png'
import BrickBreakerDisplay from '../Assets/Brickbreakerdisplay.png'
import { Tooltip } from '@mui/material';
import Fade from '@mui/material/Fade';

import ProjectCardMobile1 from '../Components/ProjectCardMobile1';

import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

import ProjectCardMobileVer from '../Components/ProjectCardMobileVer';
import ProjectCardMobileVerDeployed from '../Components/ProjectCardMobileVerDeployed';
import { Icon } from '@iconify/react';
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
