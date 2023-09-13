import { Image } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Responsive } from 'typed-responsive-react';
import { Icon } from '@iconify/react';
import Footer from '../Components/Footer';
function Tuwayan() {

    return (
        <>
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
                                src={require('../Assets/Projects/Tuwayan/tuwayan_logo.png')}
                                style={{ width: '150px' }}
                            />
                        </div>
                    </motion.div>
                    <div className='center fontRubik text-justify mt-3'>
                        <p style={{ fontWeight: 'bold', fontSize: '20px' }}>
                            Tuwayan : An Online Trading System for Barter Enthusiasts
                        </p>
                        <p style={{ fontWeight: 'bold', fontSize: '20px', color: '#FF8400' }}>
                            (Course Project 2021)
                        </p>
                    </div>
                    <div className='center fontRubik text-justify'>
                        <p>With the downtrend of the country’s economy brought by this pandemic, earning money
                            has been difficult. With technology, however, people can obtain goods even without spending a lot
                            of money.an online, web-based, and user-friendly barter trading
                            platform. In general, tuwayan.com aims to facilitate the exchange of goods between online traders.
                            As an e-commerce site, the application contains several features such as search and filters, product
                            catalogs, waitlists, bundled trading, ratings and comments, and private messaging among others. </p>

                    </div>
                    <div class="d-flex justify-content-end">
                        <Icon icon='logos:html-5' className='shadow' style={{ borderRadius: '20px', width: '200px', height: '100px', }} />
                        <Icon icon='logos:css-3' className='shadow' style={{ borderRadius: '20px', width: '200px', height: '100px', }} />
                    </div>


                    <div className='row center' style={{ width: '100%', padding: '40px' }}>
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
                                    src={require('../Assets/Projects/Tuwayan/tuwayan1.png')}
                                    style={{ width: '500px' }}
                                />
                            </div>
                            <div className='m-3' style={{ display: 'inline' }}>
                                <Image
                                    className='shadow'
                                    rounded='true'
                                    src={require('../Assets/Projects/Tuwayan/tuwayan2.png')}
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
                                    src={require('../Assets/Projects/Tuwayan/tuwayan3.png')}
                                    style={{ width: '500px' }}
                                />
                            </div>
                            <div className='m-3' style={{ display: 'inline' }}>
                                <Image
                                    className='shadow'
                                    rounded='true'
                                    src={require('../Assets/Projects/Tuwayan/tuwayan4.png')}
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
                                    src={require('../Assets/Projects/Tuwayan/tuwayan5.png')}
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
                            src={require('../Assets/Projects/Tuwayan/tuwayan_logo.png')}
                            style={{ width: '100px' }}
                        />
                    </div>
                </motion.div>
                <div className='fontRubik text-center mt-3'>
                    <p style={{ fontWeight: 'bold', fontSize: '20px' }}>
                        Tuwayan : An Online Trading System for Barter Enthusiasts
                        <br /><span style={{ color: '#FF8400', fontSize: '15px' }}>(Course Project 2021)</span>
                    </p>
                </div>
                <div className='px-4 fontRubik'>
                    <p style={{ fontSize: '12px', textAlign: 'justify' }} >
                        With the downtrend of the country’s economy brought by this pandemic, earning money
                        has been difficult. With technology, however, people can obtain goods even without spending a lot
                        of money.an online, web-based, and user-friendly barter trading
                        platform. In general, tuwayan.com aims to facilitate the exchange of goods between online traders.
                        As an e-commerce site, the application contains several features such as search and filters, product
                        catalogs, waitlists, bundled trading, ratings and comments, and private messaging among others.
                    </p>
                </div>
                <div class="d-flex justify-content-center">
                    <Icon icon='logos:html-5' className='shadow' style={{ borderRadius: '20px', width: '150px', height: '70px', }} />
                    <Icon icon='logos:css-3' className='shadow' style={{ borderRadius: '20px', width: '150px', height: '70px', }} />
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
                            src={require('../Assets/Projects/Tuwayan/tuwayan1.png')}
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
                            src={require('../Assets/Projects/Tuwayan/tuwayan2.png')}
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
                            src={require('../Assets/Projects/Tuwayan/tuwayan3.png')}
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
                            src={require('../Assets/Projects/Tuwayan/tuwayan4.png')}
                            style={{ height: '170px' }}
                        />
                    </motion.div>
                </div>
                <Footer />
            </Responsive>
        </>);
}
export default Tuwayan;
