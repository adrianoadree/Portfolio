import { motion } from "framer-motion";
import Footer from '../Components/Footer';
import ContactMe from "../Components/ContactMe";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import hero from '../Assets/IMG_0386.png'

const About = () => {



    return (
        <>
            <div className='row px-5' style={{ height: 'auto', minHeight: '100vh', backgroundColor: '#1d1d1dff' }}>
                <div style={{ marginTop: '10em' }}>
                    <h1 className='fade-text text-center fontTitle px-5 pt-5 m-auto' style={{ marginTop: '.2em', fontSize: "10em", color: "wheat" }}>
                        About Me
                    </h1>
                    <div >
                        <div className="row">
                            <div className="col-lg-5" style={{ marginTop: '-13em' }}>
                                <img src={hero} alt="Adrian Adriano" style={{
                                    backgroundRepeat: 'no-repeat',
                                    maxWidth: '70vw',
                                    height: 'auto',
                                    float: 'left',
                                }} />
                            </div>
                            <div className="col-lg-7 m-auto fontRaleway">
                                <div className="aboutme" style={{ width: 'auto' }}>
                                    <h1 style={{ fontSize: '5em', color: 'wheat' }}>Adrian Adriano</h1>
                                    <hr style={{ border: 'solid 3px #948979' }} />
                                    <h1 style={{ fontSize: '2em', color: 'wheat' }}>Web Designer | Front End Developer</h1>
                                    <div className="aboutme-contact">
                                        <h1>
                                            <a
                                                href="mailto:adrianoadriannn@gmail.com"
                                                style={{
                                                    marginTop: '.3em',
                                                    fontSize: '.7em',
                                                    color: '#948979',
                                                    textDecoration: 'none',
                                                    display: 'inline-flex',
                                                    alignItems: 'center'
                                                }}
                                            >
                                                <FontAwesomeIcon
                                                    icon={faEnvelope}
                                                    style={{ fontSize: '1.8em', marginRight: '8px' }}
                                                />
                                                adrianoadriannn@gmail.com
                                            </a>
                                        </h1>
                                        <h1>
                                            <a className='text-link' href="https://www.linkedin.com/in/adrianoadriannn/" target='_blank' rel="noreferrer"
                                                style={{
                                                    marginTop: '.3em',
                                                    fontSize: '.7em',
                                                    color: '#948979',
                                                    textDecoration: 'none',
                                                    display: 'inline-flex',
                                                    alignItems: 'center'
                                                }}>
                                                <FontAwesomeIcon
                                                    icon={faLinkedin}
                                                    style={{ fontSize: '1.8em', marginRight: '8px' }}
                                                />
                                                linkedin.com/in/adrianoadriannn/
                                            </a>
                                        </h1>
                                        <h1>
                                            <a
                                                href="https://github.com/adrianoadree"
                                                style={{
                                                    marginTop: '.3em',
                                                    fontSize: '.7em',
                                                    color: '#948979',
                                                    textDecoration: 'none',
                                                    display: 'inline-flex',
                                                    alignItems: 'center'
                                                }}
                                            >
                                                <FontAwesomeIcon
                                                    icon={faGithub}
                                                    style={{ fontSize: '1.8em', marginRight: '8px' }}
                                                />
                                                github.com/adrianoadree
                                            </a>
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>

            </div>
            <div className='row pt-5 px-5 fontRaleway' style={{ backgroundColor: '#0F0E0E' }}>
                <motion.p className="fontRaleway p-5 page-description" style={{ fontSize: "4em", color: "wheat", textAlign: 'justify' }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 }
                    }}>
                    About Me
                </motion.p>
                <motion.p className="fontRaleway px-5 page-description" style={{ marginTop: '0em', fontSize: "2em", color: "#948979", textAlign: 'justify' }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 }
                    }}>
                    I'm Adrian, a Website Designer working remotely with our office based in Ortigas, Pasig. I hold a Bachelor of Science in Information Technology from Ateneo de Naga University. Originally from Iriga City, Camarines Sur, I’ve built a strong passion for front-end development and crafting smooth, user-friendly digital experiences. Currently, I work on maintaining live websites and building new ones, ensuring they are optimized with Google Analytics and SEO for performance and visibility. My focus is on designing and developing modern websites using React.js alongside core web technologies such as JavaScript, HTML, and CSS. Beyond development, I also enjoy graphic design, particularly creating vector illustrations that bring an extra layer of creativity to my projects.
                </motion.p>
                <a href="/projects">
                    <motion.p className="fontRaleway p-5 page-description" style={{ fontSize: "4em", color: "wheat", textAlign: 'justify' }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 }
                        }}>
                        Projects
                    </motion.p>
                </a>
                <motion.p className="fontRaleway px-5 page-description" style={{ marginTop: '0em', fontSize: "2em", color: "#948979", textAlign: 'justify' }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 }
                    }}>
                    I’ve worked on a variety of websites, from personal projects to academic work. Each project focuses on front-end design.
                </motion.p>
                <a href="/Arts">
                    <motion.p className="fontRaleway p-5 page-description" style={{ fontSize: "4em", color: "wheat", textAlign: 'justify' }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 }
                        }}>
                        Arts
                    </motion.p>
                </a>
                <motion.p className="fontRaleway px-5 page-description" style={{ marginTop: '0em', fontSize: "2em", color: "#948979", textAlign: 'justify' }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 }
                    }}>
                    Creativity is a big part of my work. I enjoy digital illustrations and design experiments that complement my projects.
                </motion.p>
            </div>

            <>
                <ContactMe />
                <Footer />
            </>
        </>
    )

};

export default About;


