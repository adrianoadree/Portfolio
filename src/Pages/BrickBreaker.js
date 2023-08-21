import { Image } from 'react-bootstrap';
import { motion } from 'framer-motion';

function BrickBreaker() {

    return (
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



                <div className='my-5'>
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
                </div>

            </div>




        </>
    );
}
export default BrickBreaker;
