import '../custom.css';
import { Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { motion } from "framer-motion";
import Button from '@mui/material/Button';
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

import reactJsSkill from '../Assets/Skills/ReactJS.png';
import firebaseSkill from '../Assets/Skills/firebase.png';
import HTMLSkill from '../Assets/Skills/HTML.png';
import CSSSkill from '../Assets/Skills/CSS.png';
import FlutterSkill from '../Assets/Skills/flutter-review.jpeg';
import CSharpSkill from '../Assets/Skills/cSharp.jpg';
import UnitySkill from '../Assets/Skills/unity.png';
import ProjectCardMobile1 from '../Components/ProjectCardMobile1';


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

                <div className='my-5'>
                    <div id='projects' className='center fontRubik p-5'>
                        <p className='fontBree' style={{ float: 'left', fontSize: '30px', textAlign: 'center' }}>
                            PROJECTS ⚙️
                        </p>
                    </div>
                    <ProjectCardMobile1
                        bgImageProject={bgWoop}
                        projectTitle='Woop! Bicycle Errand Services 📱'
                        projectYear='Internship Project 2023'
                        projectDescription='Woop! Is a bicycle errand service based in Naga City. The project composed of 3 components, 2 mobile applications for the biker and customer of Woop! And 1 web application for the administrators of the application. Woop offers errand services such as Pasa-Buy, Parcel Pickups, and Bills payment. Pasa-Buy is composed of 3 different types. Food, Medicine, and Grocery. The images shown are the screenshots from the Mobile-User Component of the project'
                        codeLink='https://github.com/markguchi/woop/tree/main/mobile_customer'
                        projectScreenshots='/view-project-woop'
                        skill1={FlutterSkill}
                    />
                    <ProjectCardWeb1
                        bgImageProject={bgIMS}
                        projectTitle='IMS: Inventory Management System 🖥️'
                        projectYear='Capstone Project 2022'
                        projectDescription='A web applications catered for MSMEs to keep track of their products stock level and to create their own virtual warehouse that provides indoor mapping to ease locating products'
                        appLink='https://inventoryapp-330808.web.app'
                        codeLink='https://github.com/adrianoadree/IMSweb'
                        projectScreenshots='/view-project-ims'
                        skill1={reactJsSkill} skill2={firebaseSkill}
                    />
                    <ProjectCardWeb2
                        bgImageProject={bgTuwayan}
                        projectTitle='Tuwayan: An Online Trading System for Barter Enthusiasts 🖥️'
                        projectYear='Course Project 2021'
                        projectDescription='a web application that facilitate the exchange of goods between online traders.'
                        appLink='https://tuwayan.vercel.app/index.html'
                        codeLink='https://github.com/adrianoadree/tuwayan'
                        projectScreenshots='/view-project-tuwayan'
                        skill1={HTMLSkill} skill2={CSSSkill}
                    />
                    <ProjectCardWeb1
                        bgImageProject={bgBrickBreaker}
                        projectTitle='Brick Breaker 🎮'
                        projectYear='Course Project 2019'
                        projectDescription='A Brick breaker game Created in Unity using C#. Background image and sprites used in the game was based on Colgante Bridge of Naga City'
                        codeLink='https://github.com/adrianoadree/brickbreaker'
                        projectScreenshots='/view-project-brickbreaker'
                        skill1={UnitySkill} skill2={CSharpSkill}
                    />

                </div>
                <>
                    <div style={{ width: '100%', }}>
                        <div id='arts' className='center fontRubik p-5'>
                            <p className='fontBree' style={{ float: 'left', fontSize: '30px', textAlign: 'center' }}>
                                DIGITAL ARTS 🎨
                            </p>
                        </div>
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
            </Responsive>
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

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 }
                    }}
                    className='shadow center mt-5 p-4'
                    style={{ width: '60vh', borderRadius: '20px' }}>
                    <div className='row'>
                        <div >
                            <Link to='/view-project-woop'>
                                <motion.button
                                    initial={{ opacity: 0.6 }}
                                    whileHover={{
                                        scale: 1.1,
                                        transition: { duration: 0.2 },
                                    }}
                                    whileTap={{ scale: 0.9 }}
                                    whileInView={{ opacity: 1 }}
                                    className='bgWoop boxshadow m-1'
                                    style={{ width: '200px', height: '320px' }}
                                />
                            </Link>
                        </div>
                        <div className='row mt-3'>
                            <h5 className='fontKanit'
                                style={{ textAlign: 'center', fontWeight: 'bold' }}>Woop! Bicycle Errand Services 📱
                            </h5>
                            <p className='fontInconsolata' style={{ textAlign: 'center' }}>Internship Project 2023</p>
                            <p className='fontRubik'
                                style={{ textAlign: 'justify' }}>
                                Woop! Is a bicycle errand service based in Naga City. Woop offers errand services such as Pasa-Buy, Parcel Pickups, and Bills payment.
                            </p>
                        </div>
                    </div>

                    <div className="d-flex bd-highlight">
                        <div className="py-2 px-4 bd-highlight text-black hoverColorChange">
                            <Button className='boxshadow text-black '
                                style={{ border: '1px solid black', width: '150px' }}
                                href='https://github.com/markguchi/woop/tree/main/mobile_customer'
                                endIcon={<FontAwesomeIcon icon={faGithub}
                                />}>
                                <span style={{ fontWeight: 'bold' }}>View Code</span>
                            </Button>
                        </div>
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
                    className='shadow center mt-5 p-4'
                    style={{ width: '60vh', borderRadius: '20px' }}>
                    <div className='row'>
                        <div >
                            <Link to='/view-project-ims'>
                                <motion.button
                                    initial={{ opacity: 0.6 }}
                                    whileHover={{
                                        scale: 1.1,
                                        transition: { duration: 0.2 },
                                    }}
                                    whileTap={{ scale: 0.9 }}
                                    whileInView={{ opacity: 1 }}
                                    className='bgIMS boxshadow m-1'
                                    style={{ width: '250px', height: '100px' }}
                                />
                            </Link>
                        </div>
                        <div className='row mt-3'>
                            <h5 className='fontKanit'
                                style={{ textAlign: 'center', fontWeight: 'bold' }}>IMS: Inventory Management System 🖥️</h5>
                            <p className='fontInconsolata' style={{ textAlign: 'center' }}>Capstone Project 2022</p>
                            <p className='fontRubik'
                                style={{ textAlign: 'justify' }}>
                                A web applications catered for MSMEs to keep track of their product's stock level and to create their own virtual warehouse that provides indoor mapping to ease locating products</p>
                        </div>
                    </div>

                    <div className="d-flex bd-highlight">
                        <div className="py-2 px-2 bd-highlight text-black hoverColorChange">
                            <Button className='boxshadow text-black '
                                style={{ border: '1px solid black', width: '150px' }}
                                href='https://inventoryapp-330808.web.app'
                                endIcon={<FontAwesomeIcon icon={faArrowUpRightFromSquare}
                                />}>
                                <span style={{ fontWeight: 'bold' }}>Visit App</span>
                            </Button>
                        </div>
                        <div className="py-2 px-4 bd-highlight text-black hoverColorChange">
                            <Button className='boxshadow text-black '
                                style={{ border: '1px solid black', width: '150px' }}
                                href='https://github.com/adrianoadree/IMSweb'
                                endIcon={<FontAwesomeIcon icon={faGithub}
                                />}>
                                <span style={{ fontWeight: 'bold' }}>View Code</span>
                            </Button>
                        </div>
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
                    className='shadow center mt-5 p-4'
                    style={{ width: '60vh', borderRadius: '20px' }}>
                    <div className='row'>
                        <div >
                            <Link to='/view-project-tuwayan'>
                                <motion.button
                                    initial={{ opacity: 0.6 }}
                                    whileHover={{
                                        scale: 1.1,
                                        transition: { duration: 0.2 },
                                    }}
                                    whileTap={{ scale: 0.9 }}
                                    whileInView={{ opacity: 1 }}
                                    className='bgTuwayan boxshadow m-1'
                                    style={{ width: '250px', height: '100px' }}
                                />
                            </Link>
                        </div>
                        <div className='row mt-3'>
                            <h5 className='fontKanit'
                                style={{ textAlign: 'center', fontWeight: 'bold' }}>Tuwayan: An Online Trading System for Barter Enthusiasts 🖥️</h5>
                            <p className='fontInconsolata' style={{ textAlign: 'center' }}>Course Project 2021</p>
                            <p className='fontRubik'
                                style={{ textAlign: 'justify' }}>
                                a web application that facilitate the exchange of goods between online traders.
                            </p>
                        </div>
                    </div>

                    <div className="d-flex bd-highlight">
                        <div className="py-2 px-2 bd-highlight text-black hoverColorChange">
                            <Button className='boxshadow text-black '
                                style={{ border: '1px solid black', width: '150px' }}
                                href='https://tuwayan.vercel.app/index.html'
                                endIcon={<FontAwesomeIcon icon={faArrowUpRightFromSquare}
                                />}>
                                <span style={{ fontWeight: 'bold' }}>Visit App</span>
                            </Button>
                        </div>
                        <div className="py-2 px-4 bd-highlight text-black hoverColorChange">
                            <Button className='boxshadow text-black '
                                style={{ border: '1px solid black', width: '150px' }}
                                href='https://github.com/adrianoadree/tuwayan'
                                endIcon={<FontAwesomeIcon icon={faGithub}
                                />}>
                                <span style={{ fontWeight: 'bold' }}>View Code</span>
                            </Button>
                        </div>
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
                    className='shadow center mt-5 p-4'
                    style={{ width: '70%', borderRadius: '20px' }}>
                    <div className='row'
                        style={{ borderRadius: '20px' }}>
                        <div >
                            <Link to='/view-project-brickbreaker'>
                                <motion.button
                                    initial={{ opacity: 0.6 }}
                                    whileHover={{
                                        scale: 1.1,
                                        transition: { duration: 0.2 },
                                    }}
                                    whileTap={{ scale: 0.9 }}
                                    whileInView={{ opacity: 1 }}
                                    className='bgBrickBreaker boxshadow m-1'
                                    style={{ width: '250px', height: '100px' }}
                                />
                            </Link>
                        </div>
                        <div className='row mt-3'>
                            <h5 className='fontKanit'
                                style={{ textAlign: 'center', fontWeight: 'bold' }}>Brick Breaker 🎮</h5>
                            <p className='fontInconsolata' style={{ textAlign: 'center' }}>Course Project 2019</p>
                            <p className='fontRubik'
                                style={{ textAlign: 'justify' }}>
                                A Brick breaker game Created in Unity using C#. Background image and sprites used in the game was based on Colgante Bridge of Naga City
                            </p>
                        </div>
                    </div>

                    <div className="d-flex bd-highlight">
                        <div className="py-2 px-4 bd-highlight text-black hoverColorChange">
                            <Button className='boxshadow text-black '
                                style={{ border: '1px solid black', width: '150px' }}
                                href='https://github.com/adrianoadree/brickbreaker'
                                endIcon={<FontAwesomeIcon icon={faGithub}
                                />}>
                                <span style={{ fontWeight: 'bold' }}>View Code</span>
                            </Button>
                        </div>
                    </div>
                </motion.div>
                <div id='arts' className='fontRubik p-5'>
                    <p className='fontBree' style={{ float: 'left', fontSize: '20px', }}>
                        DIGITAL ARTS 🎨
                    </p>
                </div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 }
                    }}
                    className='bg-white center boxshadow p-3'
                    style={{ height: '600px', width: '400px', borderRadius: '20px' }}>
                    <Image className='m-auto card' src={require('../Assets/Arts/E11_Adriano.jpg')} style={{ borderRadius: '20px', height: '500px' }} />
                    <h5 className='fontKanit  m-auto pt-2' style={{ fontWeight: 'bold' }}>Naruto Pixel Art</h5>
                    <h6 className='fontKanit  m-auto'>Course Activity</h6>
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
                    className='bg-white boxshadow center mt-5 p-3'
                    style={{ height: '450px', width: '400px', borderRadius: '20px' }}>
                    <Image className='m-auto card' src={require('../Assets/Arts/Aesthetic_Conventionalism1.jpg')} style={{ borderRadius: '20px', height: '350px' }} />
                    <h5 className='fontKanit  m-auto pt-2' style={{ fontWeight: 'bold' }}>Aesthetic Conventionalism 🐺</h5>
                    <h6 className='fontKanit  m-auto'>Course Activity</h6>
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
                    className='bg-white boxshadow mt-5 p-3 center'
                    style={{ height: '450px', width: '400px', borderRadius: '20px' }}>
                    <Image className='m-auto card' src={require('../Assets/Arts/Aesthetic_Conventionalism2.jpg')} style={{ borderRadius: '20px', height: '350px' }} />
                    <h5 className='fontKanit  m-auto pt-2' style={{ fontWeight: 'bold' }}>Aesthetic Conventionalism 🐶</h5>
                    <h6 className='fontKanit  m-auto'>Course Activity</h6>
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
                    className='bg-white boxshadow center mt-5 p-3'
                    style={{ height: '650px', width: '400px', borderRadius: '20px' }}>
                    <Image className='m-auto card' src={require('../Assets/Arts/Aesthetic_Hedonism.jpg')} style={{ borderRadius: '20px', height: '550px' }} />
                    <h5 className='fontKanit  m-auto pt-2' style={{ fontWeight: 'bold' }}>Aesthetic Hedonism 👑</h5>
                    <h6 className='fontKanit  m-auto'>Course Activity</h6>
                </motion.div>
                <motion.div initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 }
                    }}
                    className='bg-white boxshadow mt-5 p-3 center'
                    style={{ height: '450px', width: '400px', borderRadius: '20px' }}>
                    <Image className='m-auto card' src={require('../Assets/Arts/Logo.jpg')} style={{ borderRadius: '20px', height: '350px' }} />
                    <h5 className='fontKanit  m-auto pt-2' style={{ fontWeight: 'bold' }}>AdNU DCS Logo Entry</h5>
                    <h6 className='fontKanit m-auto'>Course Activity</h6>
                </motion.div>
                <motion.div initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 }
                    }}
                    className='bg-white boxshadow mt-5 p-3 center'
                    style={{ height: '450px', width: '400px', borderRadius: '20px' }}>
                    <Image className='m-auto card' src={require('../Assets/Arts/Business_Logo.jpg')} style={{ borderRadius: '20px', height: '350px' }} />
                    <h5 className='fontKanit  m-auto pt-2' style={{ fontWeight: 'bold' }}>Family Business Logo 🥡</h5>
                </motion.div>
                <motion.div initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 }
                    }}
                    className='bg-white boxshadow mt-5 p-3 center'
                    style={{ height: '550px', width: '400px', borderRadius: '20px' }}>
                    <Image className='m-auto card' src={require('../Assets/Arts/robredosword.png')} style={{ borderRadius: '20px', height: '450px' }} />
                    <h5 className='fontKanit  m-auto pt-2' style={{ fontWeight: 'bold' }}>Jesse Robredo Sword ⚔️</h5>
                    <h6 className='fontKanit m-auto'>Course Activity</h6>
                </motion.div>
                <motion.div initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 }
                    }}
                    className='bg-white boxshadow mt-5 p-3 center'
                    style={{ height: '450px', width: '400px', borderRadius: '20px' }}>
                    <Image className='m-auto card' src={require('../Assets/Arts/VectorArt.jpg')} style={{ borderRadius: '20px', height: '350px' }} />
                    <h5 className='fontKanit  m-auto pt-2' style={{ fontWeight: 'bold' }}>Vector Art</h5>
                </motion.div>
                <motion.div initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 }
                    }}
                    className='bg-white boxshadow mt-5 p-3 center'
                    style={{ height: '450px', width: '400px', borderRadius: '20px' }}>
                    <Image className='m-auto card' src={require('../Assets/Arts/Aesthetic_Functionalism.jpg')} style={{ borderRadius: '20px', height: '350px' }} />
                    <h5 className='fontKanit  m-auto pt-2' style={{ fontWeight: 'bold' }}>Aesthetic Functionalism</h5>
                    <h6 className='fontKanit m-auto'>Course Activity</h6>
                </motion.div>
                <motion.div initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 }
                    }}
                    className='bg-white boxshadow mt-5 p-3 center'
                    style={{ height: '450px', width: '400px', borderRadius: '20px' }}>
                    <Image className='m-auto card' src={require('../Assets/Arts/Art_as_communication_of_emotion.jpg')} style={{ borderRadius: '20px', height: '350px' }} />
                    <h5 className='fontKanit  m-auto pt-2' style={{ fontWeight: 'bold' }}>Art as communication of emotion</h5>
                    <h6 className='fontKanit m-auto'>Course Activity</h6>
                </motion.div>
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
                        <p> ©Adrian Adriano 2023 </p>
                        <section >
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
            </Responsive>

        </>
    );
}
export default LandingPage;
