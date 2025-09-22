import { motion } from 'framer-motion';
import Footer from '../Components/Footer';
import TuwayanLogo from '../Assets/Projects/Tuwayan/tuwayan_logo.png';
import ContactMe from "../Components/ContactMe";
import screen1 from '../Assets/Projects/Tuwayan/tuwayan1.png'
import screen2 from '../Assets/Projects/Tuwayan/tuwayan2.png'
import screen3 from '../Assets/Projects/Tuwayan/tuwayan3.png'
import screen4 from '../Assets/Projects/Tuwayan/tuwayan4.png'
import screen5 from '../Assets/Projects/Tuwayan/tuwayan5.png'



function Tuwayan() {

    return (
        <>
            <div className='row px-5' style={{ minHeight: '100vh', height: 'auto', backgroundColor: '#1d1d1dff' }}>
                <div className='text-center px-5 pt-5 m-auto' >
                    <img className='text-center pt-5 m-auto' alt='Tuwayan : An Online Trading System for Barter Enthusiasts' src={TuwayanLogo} style={{ height: '15em', maxHeight: '15em' }} />
                    <p style={{ marginTop: '1em', fontSize: "1.5em", color: "#948979" }}>
                        Tuwayan : An Online Trading System for Barter Enthusiasts (Academic Project 2021)
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
                        With the downtrend of the country’s economy brought by this pandemic, earning money has been difficult. With technology, however, people can obtain goods even without spending a lot of money.an online, web-based, and user-friendly barter trading platform. In general, tuwayan.com aims to facilitate the exchange of goods between online traders. As an e-commerce site, the application contains several features such as search and filters, product catalogs, waitlists, bundled trading, ratings and comments, and private messaging among others.
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
                        <img src={screen1} alt="Tuwayan : An Online Trading System for Barter Enthusiasts" />
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
                        <img src={screen3} alt="Tuwayan : An Online Trading System for Barter Enthusiasts" />
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
                        <img src={screen5} alt="Tuwayan : An Online Trading System for Barter Enthusiasts" />
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
                        <img src={screen2} alt="Tuwayan : An Online Trading System for Barter Enthusiasts" />
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
                        <img src={screen4} alt="Tuwayan : An Online Trading System for Barter Enthusiasts" />
                    </motion.div>
                </div>
            </div>

            <ContactMe />
            <Footer />
        </>
    );
}
export default Tuwayan;
