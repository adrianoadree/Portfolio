import { Image } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Responsive } from 'typed-responsive-react';
import { Icon } from '@iconify/react';
import Footer from '../Components/Footer';

function Ims() {

    return (<>
        <Responsive displayIn={["laptop"]}>
            <>
                <motion.div
                    initial={{ x: "100%" }}
                    animate={{
                        x: "calc(50vw - 50%)", transition: { duration: 0.5 },
                    }}
                    className='mt-5 shadow'
                    style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Image
                            src={require('../Assets/Projects/IMS/IMS_Logo.png')}
                            style={{ width: '150px' }}
                        />
                    </div>
                </motion.div>
                <div className='center fontRubik text-justify mt-3'>
                    <p style={{ fontWeight: 'bold', fontSize: '20px' }}>
                        IMS : Inventory Management System
                    </p>
                    <p style={{ fontWeight: 'bold', fontSize: '20px', color: '#FF8400' }}>
                        (Capstone Project 2022)
                    </p>
                </div>
                <div className='center fontRubik text-justify'>
                    <p>IMS is an inventory management system that focuses on MSME’s. The system is composed of 2 components, web, and mobile component. The mobile application focuses on easing the business owners stock level tracking and for scanning QR codes and barcodes of the business’ products. While the Web component is more complex and displays detailed information about the user’s sales and purchase record, displays product information, generates sales and purchase reports, printable QR and barcodes. It also generates custom made barcodes for those products that are manufactured by the business. The web component also displays forecasting of each product’s reorder point and a warehouse map that is customizable for the user’s physical warehouse.  </p>
                    <Image
                        className='shadow mx-2'
                        rounded='true'
                        src={require('../Assets/Skills/ReactJS.png')}
                        style={{ height: '75px' }}
                    />
                    <Image
                        className='shadow mx-2'
                        rounded='true'
                        src={require('../Assets/Skills/firebase.png')}
                        style={{ height: '75px' }}
                    />
                </div>
                <div className='row center' style={{ width: '100%', padding: '40px' }}>
                    <motion.div className='mt-5'
                        i
                        nitial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 }
                        }}>
                        <div className='m-3' style={{ display: 'inline' }}>
                            <Image
                                className='shadow'
                                rounded='true'
                                src={require('../Assets/Projects/IMS/IMS1.png')}
                                style={{ width: '500px' }}
                            />
                        </div>
                        <div className='m-3' style={{ display: 'inline' }}>
                            <Image
                                className='shadow'
                                rounded='true'
                                src={require('../Assets/Projects/IMS/IMS2.png')}
                                style={{ width: '500px' }}
                            />
                        </div>
                    </motion.div>


                    <motion.div className='mt-5'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 }
                        }}>
                        <div className='m-3' style={{ display: 'inline' }}>
                            <Image
                                className='shadow'
                                rounded='true'
                                src={require('../Assets/Projects/IMS/IMS3.png')}
                                style={{ width: '500px' }}
                            />
                        </div>
                        <div className='m-3' style={{ display: 'inline' }}>
                            <Image
                                className='shadow'
                                rounded='true'
                                src={require('../Assets/Projects/IMS/IMS4.png')}
                                style={{ width: '500px' }}
                            />
                        </div>
                    </motion.div>

                    <motion.div className='mt-5'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 }
                        }}>
                        <div className='m-3' style={{ display: 'inline' }}>
                            <Image
                                className='shadow'
                                rounded='true'
                                src={require('../Assets/Projects/IMS/IMS5.png')}
                                style={{ width: '500px' }}
                            />
                        </div>
                        <div className='m-3' style={{ display: 'inline' }}>
                            <Image
                                className='shadow'
                                rounded='true'
                                src={require('../Assets/Projects/IMS/IMS6.png')}
                                style={{ width: '500px' }}
                            />
                        </div>
                    </motion.div>

                    <motion.div className='mt-5'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 }
                        }}>
                        <div className='m-3' style={{ display: 'inline' }}>
                            <Image
                                className='shadow'
                                rounded='true'
                                src={require('../Assets/Projects/IMS/IMS7.png')}
                                style={{ width: '500px' }}
                            />
                        </div>
                        <div className='m-3' style={{ display: 'inline' }}>
                            <Image
                                className='shadow'
                                rounded='true'
                                src={require('../Assets/Projects/IMS/IMS8.png')}
                                style={{ width: '500px' }}
                            />
                        </div>
                    </motion.div>

                    <motion.div className='mt-5'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 }
                        }}>
                        <div className='m-3' style={{ display: 'inline' }}>
                            <Image
                                className='shadow'
                                rounded='true'
                                src={require('../Assets/Projects/IMS/IMS9.png')}
                                style={{ width: '500px' }}
                            />
                        </div>
                        <div className='m-3' style={{ display: 'inline' }}>
                            <Image
                                className='shadow'
                                rounded='true'
                                src={require('../Assets/Projects/IMS/IMS10.png')}
                                style={{ width: '500px' }}
                            />
                        </div>
                    </motion.div>

                    <motion.div className='mt-5'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 }
                        }}>
                        <div className='m-3' style={{ display: 'inline' }}>
                            <Image
                                className='shadow'
                                rounded='true'
                                src={require('../Assets/Projects/IMS/IMS11.png')}
                                style={{ width: '500px' }}
                            />
                        </div>
                        <div className='m-3' style={{ display: 'inline' }}>
                            <Image
                                className='shadow'
                                rounded='true'
                                src={require('../Assets/Projects/IMS/IMS12.png')}
                                style={{ width: '500px' }}
                            />
                        </div>
                    </motion.div>
                </div>
                <Footer />
            </>
        </Responsive>
        <Responsive displayIn={["mobile", "tablet"]}>
            <motion.div
                initial={{ x: "100%" }}
                animate={{
                    x: "calc(50vw - 50%)", transition: { duration: 0.5 },
                }}
                className='mt-5 shadow'
                style={{ backgroundColor: 'white' }}>
                <div className='center'>
                    <Image
                        src={require('../Assets/Projects/IMS/IMS_Logo.png')}
                        style={{ width: '100px' }}
                    />
                </div>
            </motion.div>
            <div className='fontRubik text-center mt-3'>
                <p style={{ fontWeight: 'bold', fontSize: '20px' }}>
                    IMS : Inventory Management System
                    <br /><span style={{ color: '#FF8400', fontSize: '15px' }}>(Capstone Project 2022)</span>
                </p>
            </div>
            <div className='px-4 fontRubik'>
                <p style={{ fontSize: '12px', textAlign: 'justify' }} >
                    IMS is an inventory management system that focuses on MSME’s. The system is composed of 2 components, web, and mobile component. The mobile application focuses on easing the business owners stock level tracking and for scanning QR codes and barcodes of the business’ products. While the Web component is more complex and displays detailed information about the user’s sales and purchase record, displays product information, generates sales and purchase reports, printable QR and barcodes. It also generates custom made barcodes for those products that are manufactured by the business. The web component also displays forecasting of each product’s reorder point and a warehouse map that is customizable for the user’s physical warehouse.
                </p>
            </div>
            <div class="d-flex justify-content-center">
                <Icon icon='devicon:react' className='shadow' style={{ borderRadius: '20px', width: '150px', height: '70px', }} />
                <Icon icon='logos:firebase' className='shadow' style={{ borderRadius: '20px', width: '150px', height: '70px', }} />
            </div>
            <div className=''   >
                <motion.div
                    className='mt-5 d-flex justify-content-center'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 }
                    }}>
                    <Image
                        className='shadow mt-3'
                        rounded='true'
                        src={require('../Assets/Projects/IMS/IMS1.png')}
                        style={{ height: '170px' }}
                    />
                </motion.div>
                <motion.div
                    className='mt-5 d-flex justify-content-center'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 }
                    }}>
                    <Image
                        className='shadow mt-3'
                        rounded='true'
                        src={require('../Assets/Projects/IMS/IMS2.png')}
                        style={{ height: '170px' }}
                    />
                </motion.div>
                <motion.div
                    className='mt-5 d-flex justify-content-center'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 }
                    }}>
                    <Image
                        className='shadow mt-3'
                        rounded='true'
                        src={require('../Assets/Projects/IMS/IMS3.png')}
                        style={{ height: '170px' }}
                    />
                </motion.div>
                <motion.div
                    className='mt-5 d-flex justify-content-center'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 }
                    }}>
                    <Image
                        className='shadow mt-3'
                        rounded='true'
                        src={require('../Assets/Projects/IMS/IMS4.png')}
                        style={{ height: '170px' }}
                    />
                </motion.div>
                <motion.div
                    className='mt-5 d-flex justify-content-center'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 }
                    }}>
                    <Image
                        className='shadow mt-3'
                        rounded='true'
                        src={require('../Assets/Projects/IMS/IMS5.png')}
                        style={{ height: '170px' }}
                    />
                </motion.div>
                <motion.div
                    className='mt-5 d-flex justify-content-center'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 }
                    }}>
                    <Image
                        className='shadow mt-3'
                        rounded='true'
                        src={require('../Assets/Projects/IMS/IMS6.png')}
                        style={{ height: '170px' }}
                    />
                </motion.div>
                <motion.div
                    className='mt-5 d-flex justify-content-center'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 }
                    }}>
                    <Image
                        className='shadow mt-3'
                        rounded='true'
                        src={require('../Assets/Projects/IMS/IMS7.png')}
                        style={{ height: '170px' }}
                    />
                </motion.div>
                <motion.div
                    className='mt-5 d-flex justify-content-center'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 }
                    }}>
                    <Image
                        className='shadow mt-3'
                        rounded='true'
                        src={require('../Assets/Projects/IMS/IMS8.png')}
                        style={{ height: '170px' }}
                    />
                </motion.div>
                <motion.div
                    className='mt-5 d-flex justify-content-center'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 }
                    }}>
                    <Image
                        className='shadow mt-3'
                        rounded='true'
                        src={require('../Assets/Projects/IMS/IMS9.png')}
                        style={{ height: '170px' }}
                    />
                </motion.div>
                <motion.div
                    className='mt-5 d-flex justify-content-center'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 }
                    }}>
                    <Image
                        className='shadow mt-3'
                        rounded='true'
                        src={require('../Assets/Projects/IMS/IMS10.png')}
                        style={{ height: '170px' }}
                    />
                </motion.div>
                <motion.div
                    className='mt-5 d-flex justify-content-center'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 }
                    }}>
                    <Image
                        className='shadow mt-3'
                        rounded='true'
                        src={require('../Assets/Projects/IMS/IMS11.png')}
                        style={{ height: '170px' }}
                    />
                </motion.div>
                <motion.div
                    className='mt-5 d-flex justify-content-center'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 }
                    }}>
                    <Image
                        className='shadow mt-3'
                        rounded='true'
                        src={require('../Assets/Projects/IMS/IMS12.png')}
                        style={{ height: '170px' }}
                    />
                </motion.div>
            </div>
            <Footer />
        </Responsive>
    </>
    );
}
export default Ims;
