import { motion } from 'framer-motion';
import Footer from '../Components/Footer';
import WoopLogo from '../Assets/Projects/Woop/Woop_Logo_Outlined.png';
import ContactMe from "../Components/ContactMe";
import screen1 from '../Assets/Projects/Woop/Woop1.png'
import screen2 from '../Assets/Projects/Woop/Woop2.png'
import screen3 from '../Assets/Projects/Woop/Woop3.png'
import screen4 from '../Assets/Projects/Woop/Woop4.png'
import screen5 from '../Assets/Projects/Woop/Woop5.png'
import screen6 from '../Assets/Projects/Woop/Woop6.png'
import screen7 from '../Assets/Projects/Woop/Woop7.png'
import screen8 from '../Assets/Projects/Woop/Woop8.png'
import screen9 from '../Assets/Projects/Woop/Woop9.png'
import screen10 from '../Assets/Projects/Woop/Woop10.png'
import screen11 from '../Assets/Projects/Woop/Woop11.png'





function Woop() {

    return (
        <>
            <div className='row px-5' style={{ minHeight: '100vh', height: 'auto', backgroundColor: '#1d1d1dff' }}>
                <div className='text-center px-5 pt-5 m-auto' >
                    <img className='pt-5 m-auto' alt='WoopLogo' src={WoopLogo} style={{ height: 'auto', maxHeight: '15em', maxWidth: '55vw' }} />
                    <p style={{ marginTop: '1em', fontSize: "1.5em", color: "#948979" }}>
                        Woop! Bicycle Errand Services (Internship Project 2023)
                    </p>
                    <motion.p className="fontRaleway project-description" style={{ marginTop: '1em', fontSize: "2em", color: "#948979", textAlign: 'justify' }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 }
                        }}>

                        Woop! Is a bicycle errand service based in Naga City. The project composed of 3 components, 2 mobile applications for the biker and customer of Woop! And 1 web application for the administrators of the application. Woop offers errand services such as Pasa-Buy, Parcel Pickups, and Bills payment. Pasa-Buy is composed of 3 different types. Food, Medicine, and Grocery. The images shown are the screenshots from the Mobile-User Component of the project                    </motion.p>
                </div>
            </div>

            <div className='row pt-5 px-5 fontRaleway' style={{ backgroundColor: '#0F0E0E' }}>
                <div className='col-lg-4'>
                    <motion.div className='row py-4 card'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.2 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 }
                        }}>
                        <img src={screen1} alt="Woop" />
                    </motion.div>
                    <motion.div className='row py-4 card'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.2 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 }
                        }}>
                        <img src={screen4} alt="Woop" />
                    </motion.div>
                    <motion.div className='row py-4 card'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.2 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 }
                        }}>
                        <img src={screen7} alt="Woop" />
                    </motion.div>
                    <motion.div className='row py-4 card'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.2 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 }
                        }}>
                        <img src={screen10} alt="Woop" />
                    </motion.div>
                </div>
                <div className='col-lg-4'>
                    <motion.div className='row py-4 card'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.2 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 }
                        }}>
                        <img src={screen2} alt="Woop" />
                    </motion.div>
                    <motion.div className='row py-4 card'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.2 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 }
                        }}>
                        <img src={screen5} alt="Woop" />
                    </motion.div>
                    <motion.div className='row py-4 card'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.2 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 }
                        }}>
                        <img src={screen8} alt="Woop" />
                    </motion.div>
                    <motion.div className='row py-4 card'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.2 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 }
                        }}>
                        <img src={screen11} alt="Woop" />
                    </motion.div>
                </div>
                <div className='col-lg-4'>
                    <motion.div className='row py-4 card'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.2 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 }
                        }}>
                        <img src={screen3} alt="Woop" />
                    </motion.div>
                    <motion.div className='row py-4 card'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.2 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 }
                        }}>
                        <img src={screen6} alt="Woop" />
                    </motion.div>
                    <motion.div className='row py-4 card'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.2 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 }
                        }}>
                        <img src={screen9} alt="Woop" />
                    </motion.div>

                </div>
            </div>

            <ContactMe />
            <Footer />
        </>
    );
}
export default Woop;
