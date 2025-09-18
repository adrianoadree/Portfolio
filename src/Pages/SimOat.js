import { motion } from 'framer-motion';
import Footer from '../Components/Footer';
import SimoatLogo from '../Assets/Projects/Simoat/SIMOAT-logo-ver2.28f0f1202c52d57f2a61.png';
import ContactMe from "../Components/ContactMe";
import screen1 from '../Assets/Projects/Simoat/Simoat.png'
import screen2 from '../Assets/Projects/Simoat/Simoat1.png'
import screen3 from '../Assets/Projects/Simoat/Simoat2.png'
import screen4 from '../Assets/Projects/Simoat/Simoat3.png'
import screen5 from '../Assets/Projects/Simoat/Simoat4.png'
import screen6 from '../Assets/Projects/Simoat/Simoat5.png'



function SimOat() {

    return (
        <>
            <div className='row px-5' style={{ minHeight: '100vh', height: 'auto', backgroundColor: '#1d1d1dff' }}>
                <div className='text-center px-5 pt-5 m-auto' >
                    <img className='text-center px-5 pt-5 m-auto' alt='SimOat | Your Overnight Oats' src={SimoatLogo} style={{ height: '15em', maxHeight: '15em' }} />
                    <p style={{ marginTop: '1em', fontSize: "1.5em", color: "#948979" }}>
                        SimOat | Your Overnight Oats (Personal Project 2025)
                    </p>
                    <motion.p className="fontRaleway p-5 project-description" style={{ marginTop: '1em', fontSize: "2em", color: "#948979", textAlign: 'justify' }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 }
                        }}>
                        SimOat is a web application showcasing a variety of Overnight Oats products, currently available exclusively for condo unit deliveries within Brixton Place.
                    </motion.p>
                </div>
            </div>

            <div className='row pt-5 px-5 fontRaleway' style={{ backgroundColor: '#0F0E0E' }}>
                <div className='col-lg-6'>
                    <motion.div className='row py-4 card'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.2 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 }
                        }}>
                        <img src={screen1} alt="SimOat" />
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
                        <img src={screen3} alt="SimOat | Your Overnight Oats" />
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
                        <img src={screen5} alt="SimOat | Your Overnight Oats" />
                    </motion.div>
                </div>
                <div className='col-lg-6'>
                    <motion.div className='row py-4 card'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.2 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 }
                        }}>
                        <img src={screen2} alt="SimOat | Your Overnight Oats" />
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
                        <img src={screen4} alt="SimOat | Your Overnight Oats" />
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
                        <img src={screen6} alt="SimOat | Your Overnight Oats" />
                    </motion.div>
                </div>
            </div>

            <ContactMe />
            <Footer />
        </>
    );
}
export default SimOat;
