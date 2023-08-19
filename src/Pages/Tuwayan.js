import { Image } from 'react-bootstrap';
import { motion } from 'framer-motion';

function Tuwayan() {

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
                <Image
                    className='shadow mx-2'
                    rounded='true'
                    src={require('../Assets/Skills/HTML.png')}
                    style={{ height: '75px' }}

                />
                <Image
                    className='shadow mx-2'
                    rounded='true'
                    src={require('../Assets/Skills/CSS.png')}
                    style={{ height: '75px' }}

                />
            </div>

            <div className='row center' style={{ width: '100%', padding: '40px' }}>



                <div className='mt-5'>
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
                </div>


                <div className='mt-5'>
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
                </div>

                <div className='mt-5'>
                    <div className='m-3' style={{ display: 'inline' }}>
                        <Image
                            className='shadow'
                            rounded='true'
                            src={require('../Assets/Projects/Tuwayan/tuwayan5.png')}
                            style={{ width: '500px' }}
                        />
                    </div>
                </div>










            </div>




        </>
    );
}
export default Tuwayan;
