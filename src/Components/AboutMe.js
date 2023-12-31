import { Responsive } from 'typed-responsive-react';
import { Icon } from '@iconify/react';
import { motion } from "framer-motion";

const AboutMe = () => {



    return (
        <>
            <Responsive displayIn={["laptop"]}>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 }
                    }}>
                    <div class="d-flex bd-highlight center mt-5">
                        <div class="p-2 bd-highlight">
                            <Icon icon="flat-color-icons:about" style={{ height: '80px' }} />
                        </div>
                        <div class="p-2 flex-grow-1 bd-highlight">
                            <p className='fontBree' style={{ float: 'left', fontSize: '50px', display: 'inline-block' }}>
                                ABOUT ME
                            </p>
                        </div>
                    </div>
                    <div className='center fontRubik' style={{ textAlign: 'justify', fontSize: '20px' }}>
                        I recently completed my Bachelor of Science in Information Technology at Ateneo de Naga University, graduating in the class of 2023. I hail from Iriga City, Camarines Sur, and I have a strong ambition to become a front-end developer. My expertise lies in crafting web designs utilizing the React.js framework, and I am also passionate about graphic artistry, particularly in creating vector illustrations. I possess proficiency in various web development tools, including JavaScript, HTML, and CSS.
                    </div>
                </motion.div>
            </Responsive>



            <Responsive displayIn={["mobile", "tablet"]}>
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
                    <div className='mt-5'>
                        <div className=' px-5 row'>
                            <div className='col-2'>
                                <Icon icon="flat-color-icons:about" style={{ height: '70px' }} />
                            </div>
                            <div className='col-10'>
                                <p className='fontBree' style={{ float: 'left', fontSize: '40px', display: 'inline-block' }}>
                                    ABOUT ME
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='p-5 fontRubik' style={{ textAlign: 'justify', fontSize: '18px' }}>
                        I recently completed my Bachelor of Science in Information Technology at Ateneo de Naga University, graduating in the class of 2023. I hail from Iriga City, Camarines Sur, and I have a strong ambition to become a front-end developer. My expertise lies in crafting web designs utilizing the React.js framework, and I am also passionate about graphic artistry, particularly in creating vector illustrations. I possess proficiency in various web development tools, including JavaScript, HTML, and CSS.
                    </div>
                </motion.div>
            </Responsive>

        </>
    )

};

export default AboutMe;


