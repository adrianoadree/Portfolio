import { Image } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Responsive } from 'typed-responsive-react';
import { Icon } from '@iconify/react';
import Footer from '../Components/Footer';

function BrickBreaker() {

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
                                src={require('../Assets/Projects/Brickbreaker/paddle.png')}
                                style={{ width: '150px' }}
                            />
                        </div>
                    </motion.div>
                    <div className='center fontRubik text-justify mt-3'>
                        <p style={{ fontWeight: 'bold', fontSize: '20px' }}>
                            BrickBreaker
                        </p>
                        <p style={{ fontWeight: 'bold', fontSize: '20px', color: '#FF8400' }}>
                            (Course Project 2019)
                        </p>

                    </div>
                    <div className='center fontRubik text-justify'>
                        <p>
                            A Brick breaker game Created in Unity using C#. Background image and sprites used in the game was based on Colgante Bridge of Naga City
                        </p>
                        <Image
                            className='shadow mx-2'
                            rounded='true'
                            src={require('../Assets/Skills/unity.png')}
                            style={{ height: '75px' }}

                        />
                        <Image
                            className='shadow mx-2'
                            rounded='true'
                            src={require('../Assets/Skills/cSharp.jpg')}
                            style={{ height: '75px' }}

                        />
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
                                    src={require('../Assets/Projects/Brickbreaker/brickbreaker.png')}
                                    style={{ width: '500px' }}
                                />
                            </div>
                            <div className='m-3' style={{ display: 'inline' }}>
                                <Image
                                    className='shadow'
                                    rounded='true'
                                    src={require('../Assets/Projects/Brickbreaker/brickbreaker2.png')}
                                    style={{ width: '500px' }}
                                />
                            </div>
                        </motion.div>

                    </div>
                    <Footer/>
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
                            src={require('../Assets/Projects/Brickbreaker/paddle.png')}
                            style={{ width: '150px' }}
                        />
                    </div>
                </motion.div>
                <div className='fontRubik text-center mt-3'>
                    <p style={{ fontWeight: 'bold', fontSize: '20px' }}>
                        BrickBreaker
                        <br /><span style={{ color: '#FF8400', fontSize: '15px' }}>(Course Project 2019)
                        </span>
                    </p>
                </div>
                <div className='px-4 fontRubik'>
                    <p style={{ fontSize: '12px', textAlign: 'justify' }} >
                        A Brick breaker game Created in Unity using C#. Background image and sprites used in the game was based on Colgante Bridge of Naga City
                    </p>
                </div>
                <div class="d-flex justify-content-center">
                    <Icon icon='logos:unity' className='shadow' style={{ borderRadius: '20px', width: '150px', height: '70px', }} />
                    <Icon icon='devicon:csharp' className='shadow' style={{ borderRadius: '20px', width: '150px', height: '70px', }} />
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
                            src={require('../Assets/Projects/Brickbreaker/brickbreaker.png')}
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
                            src={require('../Assets/Projects/Brickbreaker/brickbreaker2.png')}
                            style={{ height: '170px' }}
                        />
                    </motion.div>
                </div>
                <Footer/>
            </Responsive>


        </>
    );
}
export default BrickBreaker;
