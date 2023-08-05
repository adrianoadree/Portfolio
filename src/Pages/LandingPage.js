import '../custom.css';
import { Image } from 'react-bootstrap';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import {
    MDBFooter,
    MDBContainer,
} from 'mdb-react-ui-kit';
import Fade from '@mui/material/Fade';
import { Tooltip } from '@mui/material';


function LandingPage() {


    return (

        <>
            <div className='shadowBottom' style={{ backgroundColor: '#F5F5F5' }}>
                <div className='row m-auto' id='about' style={{ width: '1000px', height: '90vh', }}>
                    <motion.div className='col-7 p-5'
                        initial={{ x: "100%" }}
                        animate={{
                            x: "calc(100vw - 220%)", transition: { duration: 1.5 },
                        }}>
                        <p className='fontBorel m-auto' style={{ fontSize: '120px', paddingTop: '100px' }}>
                            hello!<span class="wave">👋🏻</span>
                        </p>
                        <p className='fontBree' style={{ fontSize: '50px', textAlign: 'center' }}>I'm Adrian </p>
                        <p className='fontBree' style={{ fontSize: '20px', textAlign: 'center' }}>A Front-End Developer and Digital Artist</p>
                    </motion.div>
                    <div className='col-5'>
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

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 }
                    }}
                    className='shadow center mt-5 p-5'
                    style={{ width: '900px', borderRadius: '20px' }}>
                    <div className='row'>
                        <div className='col-4'>
                            <h5 className='fontKanit'
                                style={{ textAlign: 'center', fontWeight: 'bold' }}>IMS: Inventory Management System 🖥️</h5>
                            <p className='fontInconsolata' style={{ textAlign: 'center' }}>Capstone Project 2022</p>
                            <p className='fontRubik'
                                style={{ textAlign: 'justify' }}>
                                A web applications catered for MSMEs to keep track of their product's stock level and to create their own virtual warehouse that provides indoor mapping to ease locating products</p>
                        </div>
                        <Tooltip
                            TransitionComponent={Fade}
                            TransitionProps={{ timeout: 600 }}
                            title="Click to view Project's screenshots"
                            followCursor
                        >
                            <div className='col-8' >
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
                                        style={{ width: '500px', height: '220px' }}
                                    />
                                </Link>
                            </div>
                        </Tooltip>

                    </div>
                    <div class="d-flex bd-highlight">
                        <div class="py-2 bd-highlight">
                            <Image className='shadow mx-2' src={require('../Assets/Skills/ReactJS.png')} rounded='true' style={{ height: '50px' }} />
                        </div>
                        <div class="me-auto py-2 bd-highlight shado">
                            <Image className='shadow mx-2' src={require('../Assets/Skills/firebase.png')} rounded='true' style={{ height: '50px' }} />
                        </div>

                        <div class="py-2 px-2 bd-highlight text-black hoverColorChange">
                            <Button className='boxshadow text-black '
                                style={{ border: '1px solid black' }}
                                href='https://inventoryapp-330808.web.app'
                                endIcon={<FontAwesomeIcon icon={faArrowUpRightFromSquare}
                                />}>
                                <span style={{ fontWeight: 'bold' }}>Visit App</span>
                            </Button>
                        </div>
                        <div class="py-2 px-4 bd-highlight text-black hoverColorChange">
                            <Button className='boxshadow text-black '
                                style={{ border: '1px solid black' }}
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
                    className='shadow center p-5 my-5'
                    style={{ width: '900px', borderRadius: '20px' }}>
                    <div className='row'>
                        <div className='col-4'>
                            <Tooltip
                                TransitionComponent={Fade}
                                TransitionProps={{ timeout: 600 }}
                                title="Click to view Project's screenshots"
                                followCursor
                            >
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
                                        style={{ width: '240px', height: '400px' }}
                                    />
                                </Link>
                            </Tooltip>
                        </div>
                        <div className='col-8 p-5'>
                            <h5 className='fontKanit'
                                style={{ textAlign: 'center', fontWeight: 'bold' }}>
                                Woop! Bicycle Errand Services 📱
                            </h5>
                            <p className='fontInconsolata' style={{ textAlign: 'center' }}>Internship Project 2023</p>
                            <p className='fontRubik'
                                style={{ textAlign: 'justify' }}>
                                Woop! Is a bicycle errand service based in Naga City. The project composed of 3 components, 2 mobile applications for the biker and customer of Woop! And 1 web application for the administrators of the application. Woop offers errand services such as Pasa-Buy, Parcel Pickups, and Bills payment. Pasa-Buy is composed of 3 different types. Food, Medicine, and Grocery. The images shown are the screenshots from the Mobile-User Component of the project
                            </p>
                            <div class="d-flex bd-highlight">

                                <div class="me-auto bd-highlight">
                                    <Image className='shadow ml-2' src={require('../Assets/Skills/flutter-review.jpeg')} rounded='true' style={{ height: '50px' }} />
                                </div>
                                <div class="py-2 px-2 bd-highlight text-black hoverColorChange">
                                    <Button className='boxshadow text-black '
                                        style={{ border: '1px solid black' }}
                                        href='https://github.com/markguchi/woop/tree/main/mobile_customer'
                                        endIcon={<FontAwesomeIcon icon={faGithub}
                                        />}>
                                        <span style={{ fontWeight: 'bold' }}>View Code</span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                </motion.div>
            </div>



            <div className=''
                style={{ width: '100%', }}>
                <div id='arts' className='center fontRubik p-5'>
                    <p className='fontBree' style={{ float: 'left', fontSize: '30px', textAlign: 'center' }}>
                        DIGITAL ARTS 🎨
                    </p>
                </div>
                <div className='m-auto p-5'
                    style={{ width: '900px', borderRadius: '20px' }}>

                    <div className='row'>
                        <div className='col-6'>

                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                variants={{
                                    visible: { opacity: 1, scale: 1 },
                                    hidden: { opacity: 0, scale: 0 }
                                }}
                                className='bg-white boxshadow p-3'
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
                                className='bg-white boxshadow mt-5 p-3'
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
                                className='bg-white boxshadow mt-5 p-3' style={{ height: '450px', width: '400px', borderRadius: '20px' }}>
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
                                className='bg-white boxshadow mt-5 p-3'
                                style={{ height: '650px', width: '400px', borderRadius: '20px' }}>
                                <Image className='m-auto card' src={require('../Assets/Arts/Aesthetic_Hedonism.jpg')} style={{ borderRadius: '20px', height: '550px' }} />
                                <h5 className='fontKanit  m-auto pt-2' style={{ fontWeight: 'bold' }}>Aesthetic Hedonism</h5>
                                <h6 className='fontKanit  m-auto'>Course Activity</h6>
                            </motion.div>
                        </div>
                        <div className='col-6'>
                            <motion.div initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                variants={{
                                    visible: { opacity: 1, scale: 1 },
                                    hidden: { opacity: 0, scale: 0 }
                                }}
                                className='bg-white boxshadow p-3'
                                style={{ float: 'right', height: '350px', width: '320px', borderRadius: '20px' }}>
                                <Image className='m-auto card' src={require('../Assets/Arts/Logo.jpg')} style={{ borderRadius: '20px', height: '260px' }} />
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
                                className='bg-white boxshadow mt-5 p-3'
                                style={{ float: 'right', height: '350px', width: '320px', borderRadius: '20px' }}>
                                <Image className='m-auto card' src={require('../Assets/Arts/Business_Logo.jpg')} style={{ borderRadius: '20px', height: '270px' }} />
                                <h5 className='fontKanit  m-auto pt-2' style={{ fontWeight: 'bold' }}>Family Business Logo 🥡</h5>
                                <h6 className='fontKanit m-auto'></h6>
                            </motion.div>
                            <motion.div initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                variants={{
                                    visible: { opacity: 1, scale: 1 },
                                    hidden: { opacity: 0, scale: 0 }
                                }}
                                className='bg-white boxshadow mt-5 p-3'
                                style={{ float: 'right', height: '500px', width: '320px', borderRadius: '20px' }}>
                                <Image className='m-auto card' src={require('../Assets/Arts/robredosword.png')} style={{ borderRadius: '20px', height: '400px' }} />
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
                                className='bg-white boxshadow mt-5 p-3'
                                style={{ float: 'right', height: '350px', width: '320px', borderRadius: '20px' }}>
                                <Image className='m-auto card' src={require('../Assets/Arts/VectorArt.jpg')} style={{ borderRadius: '20px', height: '270px' }} />
                                <h5 className='fontKanit  m-auto pt-2' style={{ fontWeight: 'bold' }}>Vector Art</h5>
                                <h6 className='fontKanit m-auto'></h6>
                            </motion.div>
                            <motion.div initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                variants={{
                                    visible: { opacity: 1, scale: 1 },
                                    hidden: { opacity: 0, scale: 0 }
                                }}
                                className='bg-white boxshadow mt-5 p-3'
                                style={{ float: 'right', height: '350px', width: '320px', borderRadius: '20px' }}>
                                <Image className='m-auto card' src={require('../Assets/Arts/Aesthetic_Functionalism.jpg')} style={{ borderRadius: '20px', height: '270px' }} />
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
                                className='bg-white boxshadow mt-5 p-3'
                                style={{ float: 'right', height: '460px', width: '320px', borderRadius: '20px' }}>
                                <Image className='m-auto card' src={require('../Assets/Arts/Art_as_communication_of_emotion.jpg')} style={{ borderRadius: '20px', height: '350px' }} />
                                <h5 className='fontKanit  m-auto pt-2' style={{ fontWeight: 'bold' }}>Art as communication of emotion</h5>
                                <h6 className='fontKanit m-auto'>Course Activity</h6>
                            </motion.div>
                        </div>

                    </div>

                </div>

            </div >






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

        </>
    );
}
export default LandingPage;
