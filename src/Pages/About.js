import { motion } from "framer-motion";
import Footer from '../Components/Footer';
import ContactMe from "../Components/ContactMe";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import portrait from '../Assets/IMG_0386.png'

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
                            <div className="col-lg-5 hero-about" style={{ marginTop: '-13em' }}>
                            </div>
                            <div className="col-lg-7 m-auto fontRaleway">
                                <div className="" style={{ width: 'auto' }}>
                                    <h1 style={{ fontSize: '5em', color: 'wheat' }}>Adrian Adriano</h1>
                                    <hr style={{ border: 'solid 3px #948979' }} />
                                    <h1 style={{ fontSize: '2em', color: 'wheat' }}>Web Designer | Front End Developer</h1>

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
            <div className='row pt-5 px-5 fontRaleway' style={{ backgroundColor: '#0F0E0E' }}>
                <motion.p className="fontRaleway p-5" style={{ marginTop: '1em', fontSize: "2em", color: "#948979", textAlign: 'justify' }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 }
                    }}>

                    I'm Adrian, a Website Designer working remotely with our office based in Ortigas, Pasig. I earned my Bachelor of Science in Information Technology from Ateneo de Naga University in 2023. Originally from Iriga City, Camarines Sur, I’ve developed a strong passion for front-end development and crafting seamless digital experiences. My work centers on designing and building modern, user-friendly websites using React.js, along with core web technologies like JavaScript, HTML, and CSS. Beyond coding, I also enjoy graphic design, especially creating vector illustrations that add an extra layer of creativity to my projects.                </motion.p>
            </div>

            <>
                <ContactMe />
                <Footer />
            </>
        </>
    )

};

export default About;


