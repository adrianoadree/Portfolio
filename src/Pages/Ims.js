import { motion } from 'framer-motion';
import Footer from '../Components/Footer';
import ImsLogo from '../Assets/Projects/IMS/IMS_Logo.png';
import ContactMe from "../Components/ContactMe";
import screen2 from '../Assets/Projects/IMS/IMS1.png'
import screen3 from '../Assets/Projects/IMS/IMS2.png'
import screen4 from '../Assets/Projects/IMS/IMS3.png'
import screen5 from '../Assets/Projects/IMS/IMS4.png'
import screen6 from '../Assets/Projects/IMS/IMS5.png'
import screen7 from '../Assets/Projects/IMS/IMS6.png'
import screen8 from '../Assets/Projects/IMS/IMS7.png'
import screen9 from '../Assets/Projects/IMS/IMS8.png'
import screen10 from '../Assets/Projects/IMS/IMS9.png'
import screen11 from '../Assets/Projects/IMS/IMS10.png'
import screen12 from '../Assets/Projects/IMS/IMS11.png'
import screen13 from '../Assets/Projects/IMS/IMS12.png'

function Ims() {

    return (
        <>
            <div className='row px-5' style={{ minHeight: '100vh', height: 'auto', backgroundColor: '#1d1d1dff' }}>
                <div className='text-center px-5 pt-5 m-auto' >
                    <img className='text-center pt-5 m-auto' alt='WoopLogo' src={ImsLogo} style={{ height: '15em', maxHeight: '15em' }} />
                    <p style={{ marginTop: '1em', fontSize: "1.5em", color: "#948979" }}>
                        IMS : Inventory Management System (Capstone Project 2022)
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
                        IMS is an inventory management system that focuses on MSME’s. The system is composed of 2 components, web, and mobile component. The mobile application focuses on easing the business owners stock level tracking and for scanning QR codes and barcodes of the business’ products. While the Web component is more complex and displays detailed information about the user’s sales and purchase record, displays product information, generates sales and purchase reports, printable QR and barcodes. It also generates custom made barcodes for those products that are manufactured by the business. The web component also displays forecasting of each product’s reorder point and a warehouse map that is customizable for the user’s physical warehouse.
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
                        <img src={screen3} alt="IMS : Inventory Management System" />
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
                        <img src={screen5} alt="IMS : Inventory Management System" />
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
                        <img src={screen7} alt="IMS : Inventory Management System" />
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
                        <img src={screen9} alt="IMS : Inventory Management System" />
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
                        <img src={screen11} alt="IMS : Inventory Management System" />
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
                        <img src={screen13} alt="IMS : Inventory Management System" />
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
                        <img src={screen2} alt="IMS : Inventory Management System" />
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
                        <img src={screen4} alt="IMS : Inventory Management System" />
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
                        <img src={screen6} alt="IMS : Inventory Management System" />
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
                        <img src={screen8} alt="IMS : Inventory Management System" />
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
                        <img src={screen10} alt="IMS : Inventory Management System" />
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
                        <img src={screen12} alt="IMS : Inventory Management System" />
                    </motion.div>
                </div>
            </div>

            <ContactMe />
            <Footer />
        </>
    );
}
export default Ims;
