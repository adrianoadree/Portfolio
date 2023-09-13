import { Image } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Responsive } from 'typed-responsive-react';
import Footer from '../Components/Footer';
import { Icon } from '@iconify/react';


function Woop() {

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
                                src={require('../Assets/Projects/Woop/Woop_Logo_Outlined.png')}
                                style={{ width: '300px' }}
                            />
                        </div>
                    </motion.div>

                    <div className='center fontRubik text-justify mt-3'>
                        <p style={{ fontWeight: 'bold', fontSize: '20px' }}>
                            Woop! Bicycle Errand Services <span style={{ color: '#FF8400' }}>(Internship Project 2023)</span>
                        </p>
                    </div>
                    <div className='center fontRubik text-justify'>
                        <p>Woop! Is a bicycle errand service based in Naga City. The project composed of 3 components, 2 mobile applications for the biker and customer of Woop! And 1 web application for the administrators of the application. Woop offers errand services such as Pasa-Buy, Parcel Pickups, and Bills payment. Pasa-Buy is composed of 3 different types. Food, Medicine, and Grocery. The images shown are the screenshots from the Mobile-User Component of the project </p>
                    </div>
                    <div class="d-flex justify-content-end">
                        <Icon icon='vscode-icons:file-type-flutter' className='shadow' style={{ borderRadius: '20px', width: '200px', height: '100px', }} />
                        <Icon icon='devicon:dart-wordmark' className='shadow' style={{ borderRadius: '20px', width: '200px', height: '100px', }} />
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
                                    src={require('../Assets/Projects/Woop/Woop1.png')}
                                    style={{ height: '500px', width: '300px' }}
                                />
                            </div>
                            <div className='m-3' style={{ display: 'inline' }}>
                                <Image
                                    className='shadow'
                                    rounded='true'
                                    src={require('../Assets/Projects/Woop/Woop2.png')}
                                    style={{ height: '500px', width: '300px' }}
                                />
                            </div>
                            <div className='m-3' style={{ display: 'inline' }}>
                                <Image
                                    className='shadow'
                                    rounded='true'
                                    src={require('../Assets/Projects/Woop/Woop3.png')}
                                    style={{ height: '500px', width: '300px' }}
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
                                    src={require('../Assets/Projects/Woop/Woop4.png')}
                                    style={{ height: '500px', width: '300px' }}
                                />
                            </div>
                            <div className='m-3' style={{ display: 'inline' }}>
                                <Image
                                    className='shadow'
                                    rounded='true'
                                    src={require('../Assets/Projects/Woop/Woop5.png')}
                                    style={{ height: '500px', width: '300px' }}
                                />
                            </div>
                            <div className='m-3' style={{ display: 'inline' }}>
                                <Image
                                    className='shadow'
                                    rounded='true'
                                    src={require('../Assets/Projects/Woop/Woop6.png')}
                                    style={{ height: '500px', width: '300px' }}
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
                                    src={require('../Assets/Projects/Woop/Woop7.png')}
                                    style={{ height: '500px', width: '300px' }}
                                />
                            </div>
                            <div className='m-3' style={{ display: 'inline' }}>
                                <Image
                                    className='shadow'
                                    rounded='true'
                                    src={require('../Assets/Projects/Woop/Woop8.png')}
                                    style={{ height: '500px', width: '300px' }}
                                />
                            </div>
                            <div className='m-3' style={{ display: 'inline' }}>
                                <Image
                                    className='shadow'
                                    rounded='true'
                                    src={require('../Assets/Projects/Woop/Woop9.png')}
                                    style={{ height: '500px', width: '300px' }}
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
                                    src={require('../Assets/Projects/Woop/Woop10.png')}
                                    style={{ height: '500px', width: '300px' }}
                                />
                            </div>
                            <div className='m-3' style={{ display: 'inline' }}>
                                <Image
                                    className='shadow'
                                    rounded='true'
                                    src={require('../Assets/Projects/Woop/Woop11.png')}
                                    style={{ height: '500px', width: '300px' }}
                                />
                            </div>

                        </motion.div>
                    </div>
                    <Footer />



                </>
            </Responsive >
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
                            src={require('../Assets/Projects/Woop/Woop_Logo_Outlined.png')}
                            style={{ width: '200px' }}
                        />
                    </div>
                </motion.div>
                <div className='fontRubik text-center mt-3'>
                    <p style={{ fontWeight: 'bold', fontSize: '20px' }}>
                        Woop! Bicycle Errand Services <br /><span style={{ color: '#FF8400', fontSize: '15px' }}>(Internship Project 2023)</span>
                    </p>
                </div>
                <div className='px-4 fontRubik'>
                    <p style={{ fontSize: '12px', textAlign: 'justify' }} >
                        Woop! Is a bicycle errand service based in Naga City. The project composed of 3 components, 2 mobile applications for the biker and customer of Woop! And 1 web application for the administrators of the application. Woop offers errand services such as Pasa-Buy, Parcel Pickups, and Bills payment. Pasa-Buy is composed of 3 different types. Food, Medicine, and Grocery. The images shown are the screenshots from the Mobile-User Component of the project
                    </p>
                </div>
                <div class="d-flex justify-content-center">
                    <Icon icon='vscode-icons:file-type-flutter' className='shadow' style={{ borderRadius: '20px', width: '150px', height: '70px', }} />
                    <Icon icon='devicon:dart-wordmark' className='shadow' style={{ borderRadius: '20px', width: '150px', height: '70px', }} />
                </div>
                <div className='center'>
                    <motion.div
                        className='mt-5'
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
                            src={require('../Assets/Projects/Woop/Woop1.png')}
                            style={{ height: '300px', marginLeft: 'auto' }}
                        />
                    </motion.div>
                    <motion.div
                        className='mt-3'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 }
                        }}>
                        <Image
                            className='shadow'
                            rounded='true'
                            src={require('../Assets/Projects/Woop/Woop2.png')}
                            style={{ height: '300px', marginLeft: 'auto' }}
                        />
                    </motion.div>
                    <motion.div
                        className='mt-3'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 }
                        }}>
                        <Image
                            className='shadow'
                            rounded='true'
                            src={require('../Assets/Projects/Woop/Woop3.png')}
                            style={{ height: '300px', marginLeft: 'auto' }}
                        />
                    </motion.div>
                    <motion.div
                        className='mt-3'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 }
                        }}>
                        <Image
                            className='shadow'
                            rounded='true'
                            src={require('../Assets/Projects/Woop/Woop4.png')}
                            style={{ height: '300px', marginLeft: 'auto' }}
                        />
                    </motion.div>
                    <motion.div
                        className='mt-3'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 }
                        }}>
                        <Image
                            className='shadow'
                            rounded='true'
                            src={require('../Assets/Projects/Woop/Woop5.png')}
                            style={{ height: '300px', marginLeft: 'auto' }}
                        />
                    </motion.div>
                    <motion.div
                        className='mt-3'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 }
                        }}>
                        <Image
                            className='shadow'
                            rounded='true'
                            src={require('../Assets/Projects/Woop/Woop6.png')}
                            style={{ height: '300px', marginLeft: 'auto' }}
                        />
                    </motion.div>
                    <motion.div
                        className='mt-3'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 }
                        }}>
                        <Image
                            className='shadow'
                            rounded='true'
                            src={require('../Assets/Projects/Woop/Woop7.png')}
                            style={{ height: '300px', marginLeft: 'auto' }}
                        />
                    </motion.div>
                    <motion.div
                        className='mt-3'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 }
                        }}>
                        <Image
                            className='shadow'
                            rounded='true'
                            src={require('../Assets/Projects/Woop/Woop8.png')}
                            style={{ height: '300px', marginLeft: 'auto' }}
                        />
                    </motion.div>
                    <motion.div
                        className='mt-3'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 }
                        }}>
                        <Image
                            className='shadow'
                            rounded='true'
                            src={require('../Assets/Projects/Woop/Woop9.png')}
                            style={{ height: '300px', marginLeft: 'auto' }}
                        />
                    </motion.div>
                    <motion.div
                        className='mt-3'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 }
                        }}>
                        <Image
                            className='shadow'
                            rounded='true'
                            src={require('../Assets/Projects/Woop/Woop10.png')}
                            style={{ height: '300px', marginLeft: 'auto' }}
                        />
                    </motion.div>
                    <motion.div
                        className='mt-3'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 }
                        }}>
                        <Image
                            className='shadow'
                            rounded='true'
                            src={require('../Assets/Projects/Woop/Woop11.png')}
                            style={{ height: '300px', marginLeft: 'auto' }}
                        />
                    </motion.div>
                </div>
                <Footer />
            </Responsive>

        </>
    );
}
export default Woop;
