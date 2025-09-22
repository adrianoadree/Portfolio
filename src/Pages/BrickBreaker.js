import { motion } from 'framer-motion';
import Footer from '../Components/Footer';
import BrickBreakerLogo from '../Assets/Projects/Brickbreaker/paddle.png';
import ContactMe from "../Components/ContactMe";
import screen1 from '../Assets/Projects/Brickbreaker/brickbreaker.png'
import screen2 from '../Assets/Projects/Brickbreaker/brickbreaker2.png'


function BrickBreaker() {

    return (
        <>
            <div className='row px-5' style={{ minHeight: '100vh', height: 'auto', backgroundColor: '#1d1d1dff' }}>
                <div className='text-center px-5 pt-5 m-auto' >
                    <img className='text-center px-5 pt-5 m-auto' alt='BrickBreaker' src={BrickBreakerLogo} style={{ height: '15em', maxHeight: '15em' }} />
                    <p style={{ marginTop: '1em', fontSize: "1.5em", color: "#948979" }}>
                        BrickBreaker (Academic Project 2019)
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
                        A Brick breaker game Created in Unity using C#. Background image and sprites used in the game was based on Colgante Bridge of Naga City
                    </motion.p>
                </div>
            </div>

            <div className='row pt-5 px-5 fontRaleway' style={{ backgroundColor: '#0F0E0E' }}>
                <div className='col-lg-6'>
                    <motion.div className='row py-4'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.2 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 }
                        }}>
                        <img src={screen1} alt="BrickBreaker" />
                    </motion.div>
                </div>
                <div className='col-lg-6'>
                    <motion.div className='row py-4'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.2 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 }
                        }}>
                        <img src={screen2} alt="BrickBreaker" />
                    </motion.div>
                </div>
            </div>

            <ContactMe />
            <Footer />
        </>
    );
}
export default BrickBreaker;
