import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { motion } from "framer-motion";
import SimoatLogo from '../Assets/Projects/Simoat/SIMOAT-logo-ver2.28f0f1202c52d57f2a61.png'
import SimoatDisplay from '../Assets/SimOatDisplay.png'
import WoopLogo from '../Assets/Projects/Woop/Woop_Logo_Outlined.png'
import WoopDisplay from '../Assets/WoopDisplay.png'
import IMSDisplay from '../Assets/IMSDisplay.png'
import IMSLogo from '../Assets/Projects/IMS/IMS_Logo.png'
import TuwayanDisplay from '../Assets/TuwayanDisplay.png'
import TuwayanLogo from '../Assets/Projects/Tuwayan/tuwayan_logo.png'
import BrickBreakerDisplay from '../Assets/Brickbreakerdisplay.png'
import BrickBreakerLogo from '../Assets/Projects/Brickbreaker/paddle.png'
import Footer from '../Components/Footer';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import ContactMe from '../Components/ContactMe';

const Projects = () => {



    return (
        <>
            <div className='row px-5' style={{ height: 'auto', minHeight: '100vh', backgroundColor: '#1d1d1dff' }}>
                <div style={{ marginTop: '10em' }}>
                    <h1 className='fade-text text-center fontTitle px-5 pt-5 m-auto' style={{ marginTop: '.2em', fontSize: "10em", color: "wheat" }}>
                        Projects
                    </h1>
                    <p className="fontRaleway p-5 page-description" style={{ marginTop: '1em', fontSize: "2em", color: "#948979", textAlign: 'justify' }}>
                        I’ve had the opportunity to work on a wide range of projects, from internship tasks and capstone work during my academic years to a recent personal project that I pursued out of pure interest. Each project has given me the chance to explore different areas of development, whether it’s building websites, creating mobile apps, or experimenting with game design.
                        t
                        Along the way, I’ve worked with different programming languages and frameworks, adapting to new tools and challenges with every project. What excites me most is seeing an idea turn into something functional and tangible, whether it’s a polished app or a simple prototype. This collection represents not just what I’ve built, but also how I continue to grow as a developer — curious, creative, and always ready to learn something new.
                    </p>
                </div>
            </div>
            <div className='row px-5 fontRaleway py-5' style={{ backgroundColor: '#0F0E0E', color: "#948979", textAlign: 'justify' }}>
                <motion.div className='row mt-5' initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 }
                    }}>
                    <div className='col-lg-5 text-center m-auto'>
                        <a href='/projects/simoat' >
                            <motion.img className='screendisplay' src={SimoatDisplay} style={{ maxHeight: '50vh', opacity: '10%', maxWidth: '100%' }}
                                initial={{ opacity: 0.6 }}
                                whileHover={{
                                    scale: 1.1,
                                    transition: { duration: 0.2 },
                                }}
                                whileTap={{ scale: 0.9 }}
                                whileInView={{ opacity: 1 }}
                            />
                        </a>
                        <p>click me to view screens</p>
                    </div>
                    <div className='col-lg-7 text-center' >
                        <img className='align-center project-logo' src={SimoatLogo} alt='IMS' style={{ maxHeight: '10em' }} />

                        <div className='row'>
                            <h1 className='pt-1 project-title' style={{ fontSize: '4em', color: 'wheat' }}>SimOat | Your Overnight Oats</h1>
                            <h2 className='' style={{}}>Personal Project 2025</h2>
                            <p></p>
                            <p className="fontRaleway p-1"
                                style={{ marginTop: '1em', fontSize: "1.5em", color: "#948979", textAlign: 'justify' }}
                            >
                                SimOat is a web application showcasing a variety of Overnight Oats products, currently available exclusively for condo unit deliveries within Brixton Place.
                            </p>
                        </div>
                        <div className='project-container' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                                Built with ReactJS, and Bootstrap
                            </div>
                            <div className='projects-button-container' style={{ display: 'flex', alignItems: 'center', gap: '2em' }}>
                                <a href='https://simoat.vercel.app/' target='_blank' rel='noreferrer'>
                                    <button className="projects-button dropshadow-hover fontRaleway px-4 py-3">
                                        <FontAwesomeIcon
                                            icon={faArrowUpRightFromSquare}
                                            style={{ fontSize: '2em', marginRight: '8px' }}
                                        />
                                        <span>Visit Site</span>
                                    </button>
                                </a>
                                <a href='https://github.com/adrianoadree/SimOat' target='_blank' rel='noreferrer'>
                                    <button className="projects-button dropshadow-hover fontRaleway px-4 py-3">
                                        <FontAwesomeIcon
                                            icon={faGithub}
                                            style={{ fontSize: '2em', marginRight: '8px' }}
                                        />
                                        <span>View Code</span>
                                    </button>
                                </a>
                            </div>
                        </div>

                    </div>
                </motion.div>
                <motion.div className='row mt-5 m-auto' initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 }
                    }}>
                    <div className='col-lg-5 text-center'>
                        <a href='/projects/woop' >
                            <motion.img className='screendisplay' src={WoopDisplay} style={{ maxHeight: '70vh' }}
                                initial={{ opacity: 0.6 }}
                                whileHover={{
                                    scale: 1.1,
                                    transition: { duration: 0.2 },
                                }}
                                whileTap={{ scale: 0.9 }}
                                whileInView={{ opacity: 1 }}
                            />
                        </a>
                        <p>click me to view screens</p>
                    </div>
                    <div className='col-lg-7 text-center' >
                        <img className='align-center project-logo' src={WoopLogo} alt='Woop!' style={{ maxHeight: '10em' }} />
                        <div className='row'>
                            <h1 className='pt-1 project-title' style={{ fontSize: '4em', color: 'wheat' }}>Woop! Bicycle Errand Services</h1>
                            <h2 className='' style={{}}>Internship Project 2023</h2>
                            <p></p>
                            <p className="fontRaleway p-1"
                                style={{ marginTop: '1em', fontSize: "1.5em", color: "#948979", textAlign: 'justify' }}
                            >
                                Woop! is a bicycle-powered errand service based in Naga City, featuring two mobile apps (for riders and customers) and a web application for administrators. The service covers Pasa-Buy (Food, Medicine, and Grocery), parcel pickups, and bill payments.

                                My Role: I focused on the UI/UX design of the customer-facing mobile app, ensuring intuitive navigation, clean layouts, and a seamless ordering experience tailored for everyday errands.
                            </p>
                        </div>
                        <div className='project-container' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                                Built with Flutter, and Dart
                            </div>
                            <div className='projects-button-container' style={{ display: 'flex', alignItems: 'center', gap: '2em' }}>
                                <a
                                    href="https://github.com/markguchi/woop/tree/main/mobile_customer"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <button className="projects-button dropshadow-hover fontRaleway  px-4 py-3">
                                        <FontAwesomeIcon icon={faGithub} style={{ fontSize: '2em' }} />
                                        <span>View Code</span>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div className='row mt-5' initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 }
                    }}>
                    <div className='col-lg-5 text-center m-auto'>
                        <a href='/projects/IMS' >
                            <motion.img className='screendisplay' src={IMSDisplay} style={{ maxHeight: '50vh', opacity: '10%', maxWidth: '100%' }}
                                initial={{ opacity: 0.6 }}
                                whileHover={{
                                    scale: 1.1,
                                    transition: { duration: 0.2 },
                                }}
                                whileTap={{ scale: 0.9 }}
                                whileInView={{ opacity: 1 }}
                            />
                        </a>
                        <p>click me to view screens</p>
                    </div>
                    <div className='col-lg-7 text-center' >
                        <img className='align-center project-logo' src={IMSLogo} alt='IMS' style={{ maxHeight: '10em' }} />

                        <div className='row'>
                            <h1 className='pt-1 project-title' style={{ fontSize: '4em', color: 'wheat' }}>IMS: Inventory Management System</h1>
                            <h2 className='' style={{}}>Capstone Project 2022</h2>
                            <p></p>
                            <p className="fontRaleway p-1"
                                style={{ marginTop: '1em', fontSize: "1.5em", color: "#948979", textAlign: 'justify' }}
                            >
                                A web application and mobile application catered for MSMEs in Naga City to keep track of their products stock level and to create their own virtual warehouse that provides indoor mapping to ease locating products
                            </p>
                        </div>
                        <div className='projects-button-container' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                                Built with ReactJS, Bootstrap, and Google Firebase
                            </div>
                            <div className='projects-button-container' style={{ display: 'flex', alignItems: 'center', gap: '2em' }}>
                                <a href='https://inventoryapp-330808.web.app' target='_blank' rel='noreferrer'>
                                    <button className="projects-button dropshadow-hover fontRaleway px-4 py-3">
                                        <FontAwesomeIcon
                                            icon={faArrowUpRightFromSquare}
                                            style={{ fontSize: '2em', marginRight: '8px' }}
                                        />
                                        <span>Visit Site</span>
                                    </button>
                                </a>
                                <a href='https://github.com/adrianoadree/IMSweb' target='_blank' rel='noreferrer'>
                                    <button className="projects-button dropshadow-hover fontRaleway px-4 py-3">
                                        <FontAwesomeIcon
                                            icon={faGithub}
                                            style={{ fontSize: '2em', marginRight: '8px' }}
                                        />
                                        <span>View Code</span>
                                    </button>
                                </a>
                            </div>
                        </div>

                    </div>
                </motion.div>
                <motion.div className='row mt-5' initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 }
                    }}>
                    <div className='col-lg-5 text-center m-auto'>
                        <a href='/projects/tuwayan' >
                            <motion.img className='screendisplay' src={TuwayanDisplay} style={{ maxHeight: '50vh', opacity: '10%', maxWidth: '100%' }}
                                initial={{ opacity: 0.6 }}
                                whileHover={{
                                    scale: 1.1,
                                    transition: { duration: 0.2 },
                                }}
                                whileTap={{ scale: 0.9 }}
                                whileInView={{ opacity: 1 }}
                            />
                        </a>
                        <p>click me to view screens</p>
                    </div>
                    <div className='col-lg-7 text-center' >
                        <img className='align-center project-logo' src={TuwayanLogo} alt='Tuwayan' style={{ maxHeight: '10em' }} />

                        <div className='row'>
                            <h1 className='pt-1 project-title' style={{ fontSize: '4em', color: 'wheat' }}>Tuwayan: An Online Trading System for Barter Enthusiasts</h1>
                            <h2 className='' style={{}}>Academic Project 2021</h2>
                            <p></p>
                            <p className="fontRaleway p-1"
                                style={{ marginTop: '1em', fontSize: "1.5em", color: "#948979", textAlign: 'justify' }}
                            >
                                A web-based platform designed to enable the seamless exchange of goods among online traders.
                            </p>
                        </div>
                        <div className='project-container' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                                Built with HTML, CSS, and Bootstrap
                            </div>
                            <div className='projects-button-container' style={{ display: 'flex', alignItems: 'center', gap: '2em' }}>
                                <a href='https://tuwayan.vercel.app/index.html' target='_blank' rel='noreferrer'>
                                    <button className="projects-button dropshadow-hover fontRaleway px-4 py-3">
                                        <FontAwesomeIcon
                                            icon={faArrowUpRightFromSquare}
                                            style={{ fontSize: '2em', marginRight: '8px' }}
                                        />
                                        <span>Visit Site</span>
                                    </button>
                                </a>
                                <a href='https://github.com/adrianoadree/tuwayan' target='_blank' rel='noreferrer'>
                                    <button className="projects-button dropshadow-hover fontRaleway px-4 py-3">
                                        <FontAwesomeIcon
                                            icon={faGithub}
                                            style={{ fontSize: '2em', marginRight: '8px' }}
                                        />
                                        <span>View Code</span>
                                    </button>
                                </a>
                            </div>
                        </div>

                    </div>
                </motion.div>
                <motion.div className='row mt-5' initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 }
                    }}>
                    <div className='col-lg-5 text-center m-auto'>
                        <a href='/projects/brickbreaker' >
                            <motion.img className='screendisplay' src={BrickBreakerDisplay} style={{ maxHeight: '50vh', opacity: '10%', maxWidth: '100%' }}
                                initial={{ opacity: 0.6 }}
                                whileHover={{
                                    scale: 1.1,
                                    transition: { duration: 0.2 },
                                }}
                                whileTap={{ scale: 0.9 }}
                                whileInView={{ opacity: 1 }}
                            />
                        </a>
                        <p>click me to view screens</p>
                    </div>
                    <div className='col-lg-7 text-center' >
                        <img className='align-center project-logo' src={BrickBreakerLogo} alt='BrickBreaker' style={{ maxHeight: '10em' }} />

                        <div className='row'>
                            <h1 className='pt-1 project-title' style={{ fontSize: '4em', color: 'wheat' }}>Brick Breaker</h1>
                            <h2 className='' style={{}}>Academic Project 2019</h2>
                            <p></p>
                            <p className="fontRaleway p-1"
                                style={{ marginTop: '1em', fontSize: "1.5em", color: "#948979", textAlign: 'justify' }}
                            >
                                A Unity-based Brick Breaker game, coded in C#, incorporates captivating visuals inspired by the Colgante Bridge of Naga City. The game utilizes background images and sprites inspired by this iconic bridge to enhance its aesthetics and gameplay.
                            </p>
                        </div>
                        <div className='projects-button-container' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                                Built with C#, and Unity
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '2em' }}>

                                <a href='https://github.com/adrianoadree/brickbreaker' target='_blank' rel='noreferrer'>
                                    <button className="projects-button dropshadow-hover fontRaleway px-4 py-3">
                                        <FontAwesomeIcon
                                            icon={faGithub}
                                            style={{ fontSize: '2em', marginRight: '8px' }}
                                        />
                                        <span>View Code</span>
                                    </button>
                                </a>
                            </div>
                        </div>

                    </div>
                </motion.div>
            </div>
            <ContactMe />
            <Footer />
        </>
    )

};

export default Projects;


