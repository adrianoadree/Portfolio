import { Responsive } from 'typed-responsive-react';
import { Icon } from '@iconify/react';
import { motion } from "framer-motion";
import ArtCard from '../Components/ArtCard';

const Arts = () => {



    return (
        <>
            <Responsive displayIn={["laptop"]}>
                <div style={{ width: '100%', }}>
                    <motion.div
                        style={{ marginTop: '100px' }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 }
                        }}>
                        <div className='mt-5'>
                            <div class="d-flex flex-row bd-highlight center">
                                <div class="bd-highlight">
                                    <Icon icon="fluent:draw-shape-24-regular" style={{ height: '80px' }} />
                                </div>
                                <div class="bd-highlight">
                                    <p className='fontBree' style={{ float: 'left', fontSize: '50px', display: 'inline-block' }}>
                                        DIGITAL ARTS
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='center fontRubik' style={{ textAlign: 'justify', fontSize: '20px' }}>
                            Below is the compilation of some of my meticulously crafted Photoshop and Illustrator artworks, highlighting my creative prowess and artistic skills.
                        </div>
                    </motion.div>
                    <div className='m-auto p-5'
                        style={{ width: '900px', borderRadius: '20px' }}>

                        <div className='row'>
                            <div className='col-6'>
                                <ArtCard
                                    title='Naruto Pixel Art'
                                    artType='Course Activity'
                                    source={require('../Assets/Arts/E11_Adriano.jpg')}
                                    height={'570px'}
                                    width={'380px'}
                                    imageHeight={'480px'}
                                />
                                <ArtCard
                                    title='Aesthetic Conventionalism 🐺'
                                    artType='Course Activity'
                                    source={require('../Assets/Arts/Aesthetic_Conventionalism1.jpg')}
                                    width={'380px'}
                                    imageHeight={'350px'}
                                />
                                <ArtCard
                                    title='Aesthetic Conventionalism 🐶'
                                    artType='Course Activity'
                                    source={require('../Assets/Arts/Aesthetic_Conventionalism2.jpg')}
                                    width={'380px'}
                                    imageHeight={'350px'}
                                />
                                <ArtCard
                                    title='Aesthetic Hedonism'
                                    artType='Course Activity'
                                    source={require('../Assets/Arts/Aesthetic_Hedonism.jpg')}
                                    height={'650px'}
                                    width={'380px'}
                                    imageHeight={'550px'}
                                />
                                <ArtCard
                                    title='Aesthetic Functionalism'
                                    artType='Course Activity'
                                    source={require('../Assets/Arts/Aesthetic_Functionalism.jpg')}
                                    width={'380px'}
                                    imageHeight={'350px'}
                                />
                            </div>
                            <div className='col-6'>
                                <ArtCard
                                    title='AdNU DCS Logo Entry'
                                    artType='Course Activity'
                                    source={require('../Assets/Arts/Logo.jpg')}
                                    width={'380px'}
                                    imageHeight={'350px'}
                                />
                                <ArtCard
                                    title='Family Business Logo'
                                    source={require('../Assets/Arts/Business_Logo.jpg')}
                                    width={'380px'}
                                    imageHeight={'350px'}
                                />
                                <ArtCard
                                    title='Jesse Robredo Sword ⚔️'
                                    artType='Course Activity'
                                    source={require('../Assets/Arts/robredosword.png')}
                                    height={'570px'}
                                    width={'380px'}
                                    imageHeight={'480px'}
                                />
                                <ArtCard
                                    title='Vector Art'
                                    artType='Course Activity'
                                    source={require('../Assets/Arts/VectorArt.jpg')}
                                    width={'380px'}
                                    imageHeight={'350px'}
                                />
                                <ArtCard
                                    title='Art as communication of emotion'
                                    artType='Course Activity'
                                    source={require('../Assets/Arts/Art_as_communication_of_emotion.jpg')}
                                    height={'530px'}
                                    width={'380px'}
                                    imageHeight={'440px'}
                                />
                            </div>
                        </div>
                    </div>
                </div >
            </Responsive >

            <Responsive displayIn={["mobile", "tablet"]}>

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
                    <div className='mt-5'>
                        <div class="d-flex flex-row bd-highlight px-5">
                            <div class="bd-highlight">
                                <Icon icon="fluent:draw-shape-24-regular" style={{ height: '55px' }} />
                            </div>
                            <div class="bd-highlight">
                                <p className='fontBree' style={{ float: 'left', fontSize: '35px', display: 'inline-block' }}>
                                    DIGITAL ARTS
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='p-5 fontRubik' style={{ textAlign: 'justify', fontSize: '20px' }}>
                        Below is the compilation of some of my meticulously crafted Photoshop and Illustrator artworks, highlighting my creative prowess and artistic skills.
                    </div>
                </motion.div>

                <ArtCard
                    title='Naruto Pixel Art'
                    artType='Course Activity'
                    source={require('../Assets/Arts/E11_Adriano.jpg')}
                    height={'470px'}
                    width={'300px'}
                    imageHeight={'380px'}
                />

                <ArtCard
                    title='Aesthetic Conventionalism 🐺'
                    artType='Course Activity'
                    source={require('../Assets/Arts/Aesthetic_Conventionalism1.jpg')}
                    height={'380px'}
                    width={'300px'}
                    imageHeight={'260px'}
                />

                <ArtCard
                    title='Aesthetic Conventionalism 🐶'
                    artType='Course Activity'
                    source={require('../Assets/Arts/Aesthetic_Conventionalism2.jpg')}
                    height={'380px'}
                    width={'300px'}
                    imageHeight={'260px'}
                />

                <ArtCard
                    title='Aesthetic Hedonism'
                    artType='Course Activity'
                    source={require('../Assets/Arts/Aesthetic_Hedonism.jpg')}
                    height={'470px'}
                    width={'300px'}
                    imageHeight={'380px'}
                />
                <ArtCard
                    title='Aesthetic Functionalism'
                    artType='Course Activity'
                    source={require('../Assets/Arts/Aesthetic_Functionalism.jpg')}
                    height={'350px'}
                    width={'300px'}
                    imageHeight={'260px'}
                />

                <ArtCard
                    title='AdNU DCS Logo Entry'
                    artType='Course Activity'
                    source={require('../Assets/Arts/Logo.jpg')}
                    height={'350px'}
                    width={'300px'}
                    imageHeight={'260px'}
                />

                <ArtCard
                    title='Family Business Logo'
                    artType='Personal Project'
                    source={require('../Assets/Arts/Business_Logo.jpg')}
                    height={'350px'}
                    width={'300px'}
                    imageHeight={'260px'}
                />

                <ArtCard
                    title='Jesse Robredo Sword ⚔️'
                    artType='Course Activity'
                    source={require('../Assets/Arts/robredosword.png')}
                    height={'470px'}
                    width={'300px'}
                    imageHeight={'380px'}
                />
                <ArtCard
                    title='Vector Art'
                    artType='Course Activity'
                    source={require('../Assets/Arts/VectorArt.jpg')}
                    height={'350px'}
                    width={'300px'}
                    imageHeight={'260px'}
                />

                <ArtCard
                    title='Art as communication of emotion'
                    artType='Course Activity'
                    source={require('../Assets/Arts/Art_as_communication_of_emotion.jpg')}
                    height={'370px'}
                    width={'300px'}
                    imageHeight={'260px'}
                />
            </Responsive >

        </>
    )

};

export default Arts;


