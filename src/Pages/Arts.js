import { motion } from "framer-motion";
import Footer from '../Components/Footer';
import art1 from '../Assets/Arts/Aesthetic_Conventionalism1.png'
import art2 from '../Assets/Arts/Aesthetic_Conventionalism2.png'
import art3 from '../Assets/Arts/Aesthetic_Functionalism.png'
import art4 from '../Assets/Arts/Art_as_communication_of_emotion.jpg'
import art5 from '../Assets/Arts/Aesthetic_Hedonism.png'
import vectorart1 from '../Assets/Arts/VectorArt.png'
import vectorart2 from '../Assets/vectorportrait.png'
import businesslogo from '../Assets/Arts/Business_Logo.png'
import act1 from '../Assets/Arts/E11_Adriano.png'
import act3 from '../Assets/Arts/Logo.png'
import act4 from '../Assets/Arts/robredosword.png'
import businesslogo2 from '../Assets/Arts/16-ball sport-nobg.png'
import businesslogo3 from '../Assets/Arts/SIMOAT-logo.jpg'
import businesslogo4 from '../Assets/Arts/ElFuego.png'
import ContactMe from "../Components/ContactMe";




const Arts = () => {



    return (
        <>
            <div className='row px-5' style={{ height: 'auto', minHeight: '100vh', backgroundColor: '#1d1d1dff' }}>
                <div style={{ marginTop: '10em' }}>
                    <h1 className='fade-text text-center fontTitle px-5 pt-5 m-auto' style={{ marginTop: '.2em', fontSize: "10em", color: "wheat" }}>
                        Arts
                    </h1>
                    <p className="fontRaleway p-5 page-description" style={{ marginTop: '1em', fontSize: "2em", color: "#948979", textAlign: 'justify' }}>
                        Here you’ll find a collection of my Photoshop and Illustrator pieces that I’ve enjoyed creating over time. Each artwork is a little snapshot of my creativity, where I’ve experimented with different styles, colors, and ideas. For me, design is not just about making things look good, but also about expressing imagination and having fun with the process. This gallery is a glimpse into how I like to bring concepts to life visually while continuing to grow and explore as an artist.
                    </p>
                </div>
            </div>

            <>
                <div className='row pt-5 px-5 fontRaleway' style={{ backgroundColor: '#0F0E0E' }}>
                    <div className='col-lg-4'>
                        <motion.div className='row py-4 card'
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.2 }}
                            variants={{
                                visible: { opacity: 1, scale: 1 },
                                hidden: { opacity: 0, scale: 0 }
                            }}>
                            <img src={act4} alt="J-Robredo Sword" />
                            <div className="px-5" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                                <h5 style={{ color: '#948979' }}>Academic Activity</h5>
                                <p style={{ color: '#948979' }}>Before 2021</p>
                            </div>
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
                            <img src={art1} alt="Paris | Vector Art" />
                            <div className="px-5" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                                <h5 style={{ color: '#948979' }}>Academic Activity</h5>
                                <p style={{ color: '#948979' }}>Before 2022</p>
                            </div>
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
                            <img src={art2} alt="Aspin-Baybayin | Vector Art" />
                            <div className="px-5" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                                <h5 style={{ color: '#948979' }}>Academic Activity</h5>
                                <p style={{ color: '#948979' }}>Before 2022</p>
                            </div>
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
                            <img src={vectorart2} alt="Practice Work | Self Portrait Vector Art" />
                            <div className="px-5" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                                <h5 style={{ color: '#948979' }}>Practice Work</h5>
                                <p style={{ color: '#948979' }}>2023</p>
                            </div>
                        </motion.div>


                    </div>
                    <div className='col-lg-4'>
                        <motion.div className='row py-4 card'
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.2 }}
                            variants={{
                                visible: { opacity: 1, scale: 1 },
                                hidden: { opacity: 0, scale: 0 }
                            }}>
                            <img src={businesslogo2} alt="16-Ball Sport | Business Logo" />
                            <div className="px-5" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                                <h5 style={{ color: '#948979' }}>Business Logo Design</h5>
                                <p style={{ color: '#948979' }}>2025</p>
                            </div>
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
                            <img src={businesslogo4} alt="ElFuego | Business Logo" />
                            <div className="px-5" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                                <h5 style={{ color: '#948979' }}>Business Logo Design</h5>
                                <p style={{ color: '#948979' }}>2025</p>
                            </div>
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
                            <img src={businesslogo3} alt="SimOat | Business Logo" />
                            <div className="px-5" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                                <h5 style={{ color: '#948979' }}>Business Logo Design</h5>
                                <p style={{ color: '#948979' }}>2025</p>
                            </div>
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
                            <img src={businesslogo} alt="Mom's Foodcart | Business Logo" />
                            <div className="px-5" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                                <h5 style={{ color: '#948979' }}>Business Logo Design</h5>
                                <p style={{ color: '#948979' }}>2024</p>
                            </div>
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
                            <img src={act3} alt="AdNU DCS Logo Concept Design" />
                            <div className="px-5" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                                <h5 style={{ color: '#948979' }}>Academic Activity</h5>
                                <p style={{ color: '#948979' }}>Before 2021</p>
                            </div>
                        </motion.div>
                    </div>
                    <div className='col-lg-4'>
                        <motion.div className='row py-4 card'
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.2 }}
                            variants={{
                                visible: { opacity: 1, scale: 1 },
                                hidden: { opacity: 0, scale: 0 }
                            }}>
                            <img src={act1} alt="Naruto | Pixel Art" />
                            <div className="px-5" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                                <h5 style={{ color: '#948979' }}>Academic Activity</h5>
                                <p style={{ color: '#948979' }}>Before 2021</p>
                            </div>
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
                            <img src={art3} alt="Ideal Room Design" />
                            <div className="px-5" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                                <h5 style={{ color: '#948979' }}>Academic Activity</h5>
                                <p style={{ color: '#948979' }}>Before 2021</p>
                            </div>
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
                            <img src={vectorart1} alt="Academic Activity | Self Portait Vector Art" />
                            <div className="px-5" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                                <h5 style={{ color: '#948979' }}>Academic Activity</h5>
                                <p style={{ color: '#948979' }}>Before 2021</p>
                            </div>
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
                            <img src={art5} alt="Joffrey Baratheon Vector Art" />
                            <div className="px-5" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                                <h5 style={{ color: '#948979' }}>Academic Activity</h5>
                                <p style={{ color: '#948979' }}>Before 2021</p>
                            </div>
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
                            <img src={art4} alt="The Scream" />
                            <div className="px-5" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                                <h5 style={{ color: '#948979' }}>Academic Activity</h5>
                                <p style={{ color: '#948979' }}>Before 2021</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <ContactMe />
                <Footer />
            </>
        </>
    )

};

export default Arts;


