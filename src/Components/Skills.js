import { Responsive } from 'typed-responsive-react';
import { Icon } from '@iconify/react';
import { motion } from "framer-motion";

const Skills = () => {



    return (
        <>
            <Responsive displayIn={["laptop"]}>
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
                    <div class="d-flex flex-row bd-highlight center">
                        <div class="bd-highlight"><Icon icon="ph:code-bold" style={{ height: '80px' }} /></div>
                        <div class="bd-highlight">
                            <p className='fontBree' style={{ float: 'left', fontSize: '50px', display: 'inline-block' }}>
                                SKILLS & CAPABILITES
                            </p>
                        </div>
                    </div>

                    <div className='center fontRubik' style={{ textAlign: 'justify', fontSize: '20px' }}>
                        In my academic years, I cultivated a diverse set of technical skills as a Front-End Developer through hands-on project experiences. Below, you'll find the tools I employed for designing web and mobile applications.
                    </div>
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 }
                    }}>
                    <div className="d-flex justify-content-between  mt-5" style={{ width: '670px', marginLeft: 'auto', marginRight: 'auto' }}>
                        <Icon icon="devicon:react" className='circleshadow bounce1' />
                        <Icon icon="vscode-icons:file-type-flutter" className='circleshadow bounce2' style={{ marginLeft: '30px' }} />
                        <Icon icon="logos:firebase" className='circleshadow bounce3' style={{ marginLeft: '30px' }} />
                        <Icon icon="icon-park:github" className='circleshadow bounce4' style={{ marginLeft: '30px' }} />

                    </div>
                    <div className="d-flex justify-content-between mt-3" style={{ width: '900px', marginLeft: 'auto', marginRight: 'auto' }}>
                        <Icon icon="logos:html-5" className='circleshadow' style={{ marginLeft: '30px', height: '100px' }} />
                        <Icon icon="logos:css-3" className='circleshadow' style={{ marginLeft: '30px', height: '100px' }} />
                        <Icon icon="vscode-icons:file-type-js-official" className='circleshadow' style={{ marginLeft: '30px', height: '100px' }} />
                        <Icon icon="logos:c-plusplus" className='circleshadow' style={{ marginLeft: '30px', height: '100px' }} />
                        <Icon icon="devicon:dart-wordmark" className='circleshadow' style={{ marginLeft: '30px', height: '100px' }} />
                        <Icon icon="logos:adobe-photoshop" className='circleshadow' style={{ marginLeft: '30px', height: '100px' }} />
                        <Icon icon="skill-icons:illustrator" className='circleshadow' style={{ marginLeft: '30px', height: '100px' }} />
                    </div>
                </motion.div>

            </Responsive>


        </>
    )

};

export default Skills;


