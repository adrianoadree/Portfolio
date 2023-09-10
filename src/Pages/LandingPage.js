import '../custom.css';
import { Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faDiscord, faGithub, faReact } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import {
    MDBFooter,
    MDBContainer,
} from 'mdb-react-ui-kit';
import Fade from '@mui/material/Fade';
import { Tooltip } from '@mui/material';
import { Responsive } from 'typed-responsive-react';
import ArtCard from '../Components/ArtCard';
import ProjectCardWeb1 from '../Components/ProjectCardWeb1';
import ProjectCardWeb2 from '../Components/ProjectCardWeb2';

import bgIMS from '../Assets/Projects/IMS/IMS1.png';
import bgTuwayan from '../Assets/Projects/Tuwayan/tuwayan1.png';
import bgBrickBreaker from '../Assets/Projects/Brickbreaker/brickbreaker.png';
import bgWoop from '../Assets/Projects/Woop/Woop1.png';
import WoopLogo from '../Assets/Projects/Woop/Woop_Logo_Outlined.png';
import WoopDisplay from '../Assets/WoopDisplay.png'
import IMSDisplay from '../Assets/IMSDisplay.png'
import TuwayanDisplay from '../Assets/TuwayanDisplay.png'
import BrickBreakerDisplay from '../Assets/Brickbreakerdisplay.png'

import reactJsSkill from '../Assets/Skills/ReactJS.png';
import firebaseSkill from '../Assets/Skills/firebase.png';
import HTMLSkill from '../Assets/Skills/HTML.png';
import CSSSkill from '../Assets/Skills/CSS.png';
import FlutterSkill from '../Assets/Skills/flutter-review.jpeg';
import CSharpSkill from '../Assets/Skills/cSharp.jpg';
import UnitySkill from '../Assets/Skills/unity.png';
import ProjectCardMobile1 from '../Components/ProjectCardMobile1';
import Button from '@mui/material/Button';


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ProjectCardMobileVer from '../Components/ProjectCardMobileVer';
import ProjectCardMobileVerDeployed from '../Components/ProjectCardMobileVerDeployed';
import { Icon } from '@iconify/react';

function LandingPage() {


    return (

        <>
            <Responsive displayIn={["laptop"]}>
                <div className='shadowBottom container-fluid' style={{ backgroundColor: '#F5F5F5' }}>
                    <div className='row m-auto' id='about' style={{ width: '1000px', height: '90vh', }}>
                        <motion.div className='col-md-7 col-xs-12 p-5'
                            initial={{ x: "100%" }}
                            animate={{
                                x: "calc(100vw - 220%)", transition: { duration: 1.5 },
                            }}>
                            <p className='fontBorel m-auto' style={{ fontSize: '120px', paddingTop: '100px' }}>
                                hello!<span className="wave">👋🏻</span>
                            </p>
                            <p className='fontBree' style={{ fontSize: '50px', textAlign: 'center' }}>I'm Adrian </p>
                            <p className='fontBree' style={{ fontSize: '20px', textAlign: 'center' }}>A Front-End Developer and Digital Artist</p>
                        </motion.div>
                        <div className='col-md-5 col-xs-12'>
                            <Image className='m-5' src={require('../Assets/vectorportrait.png')} style={{ height: '500px' }} />
                        </div>
                    </div>
                </div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 }
                    }}>
                    <div className='mt-5'>
                        <div class="d-flex flex-row bd-highlight center">
                            <div class="bd-highlight"><Icon icon="flat-color-icons:about" style={{ height: '80px' }} /></div>
                            <div class="bd-highlight">
                                <p className='fontBree' style={{ float: 'left', fontSize: '50px', display: 'inline-block' }}>
                                    ABOUT ME
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='center fontRubik' style={{ textAlign: 'justify', fontSize: '20px' }}>
                        I recently completed my Bachelor of Science in Information Technology at Ateneo de Naga University, graduating in the class of 2023. I hail from Iriga City, Camarines Sur, and I have a strong ambition to become a front-end developer. My expertise lies in crafting web designs utilizing the React.js framework, and I am also passionate about graphic artistry, particularly in creating vector illustrations. I possess proficiency in various web development tools, including JavaScript, HTML, and CSS.
                    </div>
                </motion.div>
                <motion.div
                    style={{ marginTop: '100px' }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 }
                    }}>
                    <div class="d-flex flex-row bd-highlight center">
                        <div class="bd-highlight"><Icon icon="ph:code-bold" style={{ height: '80px' }} /></div>
                        <div class="bd-highlight">
                            <p className='fontBree' style={{ float: 'left', fontSize: '50px', display: 'inline-block' }}>
                                SKILLS & CAPABILITES
                            </p>
                        </div>
                    </div>

                    <div className='center fontRubik' style={{ textAlign: 'justify', fontSize: '20px' }}>
                        In my academic years, I cultivated a diverse set of technical skills as a Front-End Developer through hands-on project experiences. Below, you'll find the tools I employed for designing web and mobile applications.
                    </div>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 }
                    }}>
                    <div className="d-flex justify-content-between  mt-5" style={{ width: '670px', marginLeft: 'auto', marginRight: 'auto' }}>
                        <Icon icon="devicon:react" className='circleshadow bounce1' />
                        <Icon icon="vscode-icons:file-type-flutter" className='circleshadow bounce2' style={{ marginLeft: '30px' }} />
                        <Icon icon="logos:firebase" className='circleshadow bounce3' style={{ marginLeft: '30px' }} />
                        <Icon icon="icon-park:github" className='circleshadow bounce4' style={{ marginLeft: '30px' }} />

                    </div>
                    <div className="d-flex justify-content-between mt-3" style={{ width: '900px', marginLeft: 'auto', marginRight: 'auto' }}>
                        <Icon icon="logos:html-5" className='circleshadow' style={{ marginLeft: '30px', height: '100px' }} />
                        <Icon icon="logos:css-3" className='circleshadow' style={{ marginLeft: '30px', height: '100px' }} />
                        <Icon icon="vscode-icons:file-type-js-official" className='circleshadow' style={{ marginLeft: '30px', height: '100px' }} />
                        <Icon icon="logos:c-plusplus" className='circleshadow' style={{ marginLeft: '30px', height: '100px' }} />
                        <Icon icon="devicon:dart-wordmark" className='circleshadow' style={{ marginLeft: '30px', height: '100px' }} />
                        <Icon icon="logos:adobe-photoshop" className='circleshadow' style={{ marginLeft: '30px', height: '100px' }} />
                        <Icon icon="skill-icons:illustrator" className='circleshadow' style={{ marginLeft: '30px', height: '100px' }} />
                    </div>
                </motion.div>




                <div className='my-5'>
                    <motion.div style={{ marginTop: '150px' }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 }
                        }}
                    >
                        <div className='mt-5'>
                            <div class="d-flex flex-row bd-highlight center">
                                <div class="bd-highlight"><Icon icon="ant-design:code-outlined" style={{ height: '80px' }} /></div>
                                <div class="bd-highlight">
                                    <p className='fontBree' style={{ float: 'left', fontSize: '50px', display: 'inline-block' }}>
                                        PROJECTS
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='center fontRubik' style={{ textAlign: 'justify', fontSize: '20px' }}>
                            Here are several projects from my academic years, including internship assignments, capstone projects, and other academic endeavors. These projects showcase my versatility in programming languages across web development, mobile application development, and game development.
                        </div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 }
                        }}
                        className='shadow center p-5 my-5'
                        style={{ width: '900px', borderRadius: '20px' }}>
                        <div className='row'>

                            <div className='col-7 p-1'>
                                <Tooltip
                                    TransitionComponent={Fade}
                                    TransitionProps={{ timeout: 600 }}
                                    title="Click to view Project's screenshots"
                                    followCursor
                                >
                                    <a href='/view-project-woop' >
                                        <motion.img src={IMSDisplay} style={{ height: '270px' }}
                                            initial={{ opacity: 0.6 }}
                                            whileHover={{
                                                scale: 1.1,
                                                transition: { duration: 0.2 },
                                            }}
                                            whileTap={{ scale: 0.9 }}
                                            whileInView={{ opacity: 1 }}
                                        />
                                    </a>
                                </Tooltip>
                            </div>
                            <div className='col-5'>

                                <h5 className='fontKanit'
                                    style={{ textAlign: 'center', fontWeight: 'bold' }}>
                                    IMS: Inventory Management System 🖥️
                                </h5>
                                <p className='fontInconsolata' style={{ textAlign: 'center' }}>
                                    Capstone Project 2022
                                </p>
                                <p className='fontRubik'
                                    style={{ textAlign: 'justify' }}>
                                    Web-based applications designed specifically for small and medium-sized enterprises (MSMEs) enable them to efficiently monitor their inventory levels and establish a virtual warehouse. This virtual warehouse includes an indoor mapping feature to simplify the process of locating their products.
                                </p>
                            </div>
                        </div>
                        <div className="d-flex bd-highlight">
                            <div className="p-2 bd-highlight">
                                <Icon icon="devicon:react" className='circleshadow' style={{ width: '100', height: '100px', }} />
                            </div>
                            <div className="me-auto p-2 bd-highlight shado">
                                <Icon icon="vscode-icons:file-type-firebase" className='circleshadow' style={{ width: '100', height: '100px', }} />
                            </div>

                            <div className="py-2 px-2 bd-highlight text-black hoverColorChange">
                                <a href='https://github.com/markguchi/woop/tree/main/mobile_customer'>
                                    <motion.button className="boxshadow "
                                        initial={{ opacity: 0.6 }}
                                        whileHover={{
                                            scale: 1.1,
                                            transition: { duration: 0.2 },
                                        }}
                                        whileTap={{ scale: 0.9 }}
                                        whileInView={{ opacity: 1 }}>
                                        <Icon icon="icon-park:web-page" style={{ height: '50px', }} />Visit App
                                    </motion.button>
                                </a>
                            </div>
                            <div className="py-2 px-4 bd-highlight text-black hoverColorChange">
                                <a href='https://github.com/markguchi/woop/tree/main/mobile_customer'>
                                    <motion.button className="boxshadow "
                                        initial={{ opacity: 0.6 }}
                                        whileHover={{
                                            scale: 1.1,
                                            transition: { duration: 0.2 },
                                        }}
                                        whileTap={{ scale: 0.9 }}
                                        whileInView={{ opacity: 1 }}>
                                        <Icon icon="icon-park:github" style={{ height: '50px', }} />View Code
                                    </motion.button>
                                </a>
                            </div>
                        </div>
                    </motion.div>



                    <ProjectCardMobile1
                        bgImageProject={WoopDisplay}
                        projectTitle='Woop! Bicycle Errand Services 📱'
                        projectYear='Internship Project 2023'
                        projectDescription='Woop! operates as a bicycle-based errand service located in Naga City, encompassing three key elements: two mobile apps designed for Woop! riders and customers, along with a web application tailored for administrative purposes. Woop! provides a range of errand services, including Pasa-Buy, Parcel Pickups, and Bill Payments. Pasa-Buy is further divided into three distinct categories: Food, Medicine, and Grocery'
                        codeLink='https://github.com/markguchi/woop/tree/main/mobile_customer'
                        projectScreenshots='/view-project-woop'
                        skill1='vscode-icons:file-type-flutter'
                    />
                    <ProjectCardWeb1
                        bgImageProject={IMSDisplay}
                        projectTitle='IMS: Inventory Management System 🖥️'
                        projectYear='Capstone Project 2022'
                        projectDescription='A web applications catered for MSMEs to keep track of their products stock level and to create their own virtual warehouse that provides indoor mapping to ease locating products'
                        appLink='https://inventoryapp-330808.web.app'
                        codeLink='https://github.com/adrianoadree/IMSweb'
                        projectScreenshots='/view-project-ims'
                        skill1='devicon:react' skill2='logos:firebase'
                    />
                    <ProjectCardWeb2
                        bgImageProject={TuwayanDisplay}
                        projectTitle='Tuwayan: An Online Trading System for Barter Enthusiasts 🖥️'
                        projectYear='Course Project 2021'
                        projectDescription='A web-based platform designed to enable the seamless exchange of goods among online traders.'
                        appLink='https://tuwayan.vercel.app/index.html'
                        codeLink='https://github.com/adrianoadree/tuwayan'
                        projectScreenshots='/view-project-tuwayan'
                        skill1='logos:html-5' skill2='logos:css-3'
                    />
                    <ProjectCardWeb1
                        bgImageProject={BrickBreakerDisplay}
                        projectTitle='Brick Breaker 🎮'
                        projectYear='Course Project 2019'
                        projectDescription='A Unity-based Brick Breaker game, coded in C#, incorporates captivating visuals inspired by the Colgante Bridge of Naga City. The game utilizes background images and sprites inspired by this iconic bridge to enhance its aesthetics and gameplay.'
                        codeLink='https://github.com/adrianoadree/brickbreaker'
                        projectScreenshots='/view-project-brickbreaker'
                        skill1="logos:unity" skill2='devicon:csharp'
                    />

                </div>
                <>
                    <div style={{ width: '100%', }}>
                        <motion.div
                            style={{ marginTop: '100px' }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            variants={{
                                visible: { opacity: 1, scale: 1 },
                                hidden: { opacity: 0, scale: 0 }
                            }}>
                            <div className='mt-5'>
                                <div class="d-flex flex-row bd-highlight center">
                                    <div class="bd-highlight"><Icon icon="fluent:draw-shape-24-regular" style={{ height: '80px' }} /></div>
                                    <div class="bd-highlight">
                                        <p className='fontBree' style={{ float: 'left', fontSize: '50px', display: 'inline-block' }}>
                                            DIGITAL ARTS
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='center fontRubik' style={{ textAlign: 'justify', fontSize: '20px' }}>
                                Below is the compilation of some of my meticulously crafted Photoshop and Illustrator artworks, highlighting my creative prowess and artistic skills.
                            </div>
                        </motion.div>
                        <div className='m-auto p-5'
                            style={{ width: '900px', borderRadius: '20px' }}>

                            <div className='row'>
                                <div className='col-6'>
                                    <ArtCard
                                        title='Naruto Pixel Art'
                                        artType='Course Activity'
                                        source={require('../Assets/Arts/E11_Adriano.jpg')}
                                        height={'570px'}
                                        width={'380px'}
                                        imageHeight={'480px'}
                                    />
                                    <ArtCard
                                        title='Aesthetic Conventionalism 🐺'
                                        artType='Course Activity'
                                        source={require('../Assets/Arts/Aesthetic_Conventionalism1.jpg')}
                                        width={'380px'}
                                        imageHeight={'350px'}
                                    />
                                    <ArtCard
                                        title='Aesthetic Conventionalism 🐶'
                                        artType='Course Activity'
                                        source={require('../Assets/Arts/Aesthetic_Conventionalism2.jpg')}
                                        width={'380px'}
                                        imageHeight={'350px'}
                                    />
                                    <ArtCard
                                        title='Aesthetic Hedonism'
                                        artType='Course Activity'
                                        source={require('../Assets/Arts/Aesthetic_Hedonism.jpg')}
                                        height={'650px'}
                                        width={'380px'}
                                        imageHeight={'550px'}
                                    />
                                    <ArtCard
                                        title='Aesthetic Functionalism'
                                        artType='Course Activity'
                                        source={require('../Assets/Arts/Aesthetic_Functionalism.jpg')}
                                        width={'380px'}
                                        imageHeight={'350px'}
                                    />
                                </div>
                                <div className='col-6'>
                                    <ArtCard
                                        title='AdNU DCS Logo Entry'
                                        artType='Course Activity'
                                        source={require('../Assets/Arts/Logo.jpg')}
                                        width={'380px'}
                                        imageHeight={'350px'}
                                    />
                                    <ArtCard
                                        title='Family Business Logo'
                                        source={require('../Assets/Arts/Business_Logo.jpg')}
                                        width={'380px'}
                                        imageHeight={'350px'}
                                    />
                                    <ArtCard
                                        title='Jesse Robredo Sword ⚔️'
                                        artType='Course Activity'
                                        source={require('../Assets/Arts/robredosword.png')}
                                        height={'570px'}
                                        width={'380px'}
                                        imageHeight={'480px'}
                                    />
                                    <ArtCard
                                        title='Vector Art'
                                        artType='Course Activity'
                                        source={require('../Assets/Arts/VectorArt.jpg')}
                                        width={'380px'}
                                        imageHeight={'350px'}
                                    />
                                    <ArtCard
                                        title='Art as communication of emotion'
                                        artType='Course Activity'
                                        source={require('../Assets/Arts/Art_as_communication_of_emotion.jpg')}
                                        height={'530px'}
                                        width={'380px'}
                                        imageHeight={'440px'}
                                    />
                                </div>

                            </div>

                        </div>

                    </div >
                </>


                <MDBFooter id='contact' className='text-center mt-5' color='white' bgColor='dark'>
                    <MDBContainer className='p-4'>
                        <section className='mb-4' >
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
                        <p style={{ float: 'left' }}> ©Adrian Adriano 2023 </p>
                        <section style={{ float: 'right' }}>
                            <a className='text-white m-5' href='#about'>
                                profile
                            </a>
                            <a className='text-white m-5' href='#projects'>
                                project
                            </a>
                            <a className='text-white m-5' href='#arts'>
                                arts
                            </a>


                        </section>

                    </div>
                </MDBFooter>
            </Responsive >
            <Responsive displayIn={["mobile", "tablet"]}>
                <div className='shadowBottom container-fluid' style={{ backgroundColor: '#F5F5F5' }}>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 }
                        }}
                        className="pt-4 d-flex justify-content-center">
                        <Image src={require('../Assets/vectorportrait.png')} style={{ height: '300px' }} />
                    </motion.div>
                    <motion.div
                        style={{ paddingTop: '40px', paddingBottom: '50px' }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 }
                        }}>

                        <p className='d-flex justify-content-center fontBorel' style={{ fontSize: '40px' }}>
                            hello!<span className="wave">👋🏻</span>
                        </p>
                        <p className='justify-content-center fontBree' style={{ fontSize: '20px', textAlign: 'center' }}>I'm Adrian </p>
                        <p className='justify-content-center fontBree' style={{ fontSize: '15px', textAlign: 'center' }}>A Front-End Developer and Digital Artist</p>
                    </motion.div>

                </div>
                <div id='projects' className=' fontRubik p-5'>
                    <p className='fontBree' style={{ float: 'left', fontSize: '20px' }}>
                        PROJECTS ⚙️
                    </p>
                </div>
                <ProjectCardMobileVer
                    codeLink='https://github.com/markguchi/woop/tree/main/mobile_customer'
                    projectTitle='Woop! Bicycle Errand Services 📱'
                    projectYear='Internship Project 2023'
                    projectDescription='Woop! Is a bicycle errand service based in Naga City. Woop offers errand services such as Pasa-Buy, Parcel Pickups, and Bills payment.'
                    projectScreenshots='/view-project-woop'
                    bgImageProject={WoopLogo}
                />

                <ProjectCardMobileVerDeployed
                    appLink='https://inventoryapp-330808.web.app'
                    codeLink='https://github.com/adrianoadree/IMSweb'
                    projectTitle='IMS: Inventory Management System 🖥️'
                    projectYear='Capstone Project 2022'
                    projectDescription='A web applications catered for MSMEs to keep track of their product stock level and to create their own virtual warehouse that provides indoor mapping to ease locating products'
                    projectScreenshots='/view-project-ims'
                    bgImageProject={bgIMS}
                />

                <ProjectCardMobileVerDeployed
                    appLink='https://tuwayan.vercel.app/index.html'
                    codeLink='https://github.com/adrianoadree/tuwayan'
                    projectTitle='Tuwayan: An Online Trading System for Barter Enthusiasts 🖥️'
                    projectYear='Course Project 2021'
                    projectDescription='a web application that facilitate the exchange of goods between online traders.'
                    projectScreenshots='/view-project-tuwayan'
                    bgImageProject={bgTuwayan}
                />

                <ProjectCardMobileVer
                    codeLink='https://github.com/adrianoadree/brickbreaker'
                    projectTitle='Brick Breaker 🎮'
                    projectYear='Course Project 2019'
                    projectDescription='A Brick breaker game Created in Unity using C#. Background image and sprites used in the game was based on Colgante Bridge of Naga City'
                    projectScreenshots='/view-project-brickbreaker'
                    bgImageProject={bgBrickBreaker}
                />


                <div id='arts' className='fontRubik p-5'>
                    <p className='fontBree' style={{ float: 'left', fontSize: '20px', }}>
                        DIGITAL ARTS 🎨
                    </p>
                </div>

                <ArtCard
                    title='Naruto Pixel Art'
                    artType='Course Activity'
                    source={require('../Assets/Arts/E11_Adriano.jpg')}
                    height={'470px'}
                    width={'300px'}
                    imageHeight={'380px'}
                />

                <ArtCard
                    title='Aesthetic Conventionalism 🐺'
                    artType='Course Activity'
                    source={require('../Assets/Arts/Aesthetic_Conventionalism1.jpg')}
                    height={'380px'}
                    width={'300px'}
                    imageHeight={'260px'}
                />

                <ArtCard
                    title='Aesthetic Conventionalism 🐶'
                    artType='Course Activity'
                    source={require('../Assets/Arts/Aesthetic_Conventionalism2.jpg')}
                    height={'380px'}
                    width={'300px'}
                    imageHeight={'260px'}
                />

                <ArtCard
                    title='Aesthetic Hedonism'
                    artType='Course Activity'
                    source={require('../Assets/Arts/Aesthetic_Hedonism.jpg')}
                    height={'470px'}
                    width={'300px'}
                    imageHeight={'380px'}
                />
                <ArtCard
                    title='Aesthetic Functionalism'
                    artType='Course Activity'
                    source={require('../Assets/Arts/Aesthetic_Functionalism.jpg')}
                    height={'350px'}
                    width={'300px'}
                    imageHeight={'260px'}
                />

                <ArtCard
                    title='AdNU DCS Logo Entry'
                    artType='Course Activity'
                    source={require('../Assets/Arts/Logo.jpg')}
                    height={'350px'}
                    width={'300px'}
                    imageHeight={'260px'}
                />

                <ArtCard
                    title='Family Business Logo'
                    artType='Personal Project'
                    source={require('../Assets/Arts/Business_Logo.jpg')}
                    height={'350px'}
                    width={'300px'}
                    imageHeight={'260px'}
                />

                <ArtCard
                    title='Jesse Robredo Sword ⚔️'
                    artType='Course Activity'
                    source={require('../Assets/Arts/robredosword.png')}
                    height={'470px'}
                    width={'300px'}
                    imageHeight={'380px'}
                />
                <ArtCard
                    title='Vector Art'
                    artType='Course Activity'
                    source={require('../Assets/Arts/VectorArt.jpg')}
                    height={'350px'}
                    width={'300px'}
                    imageHeight={'260px'}
                />

                <ArtCard
                    title='Art as communication of emotion'
                    artType='Course Activity'
                    source={require('../Assets/Arts/Art_as_communication_of_emotion.jpg')}
                    height={'370px'}
                    width={'300px'}
                    imageHeight={'260px'}
                />

                <MDBFooter id='contact' className='text-center mt-5' color='white' bgColor='dark'>
                    <MDBContainer className='p-4'>

                        <section className='mb-4' >
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
                        </section>
                    </MDBContainer>
                    <div className='text-center p-3' style={{ height: '50px', backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                        <p> ©Adrian Adriano 2023 </p>
                    </div>
                </MDBFooter>
            </Responsive>

        </>
    );
}
export default LandingPage;
