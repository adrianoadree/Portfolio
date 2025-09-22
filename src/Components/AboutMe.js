import { motion } from "framer-motion";

const AboutMe = () => {



    return (
        <div className='row' style={{ height: 'auto', backgroundColor: '#0F0E0E' }}>

            <div className='col-lg-5  text-center'>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 }
                    }}>
                    <h1 className='fontTitle px-5' style={{ marginTop: '.7em', fontSize: "10em", color: "#948979" }}>
                        About Me
                    </h1>

                </motion.div>
            </div>


            <div className='col-lg-7 p-5 justify-contents-center'>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 }
                    }}>
                    <p className="fontRaleway aboutme-component" style={{ fontSize: "2em", color: "#948979", textAlign: 'justify' }}>
                        Hi, I’m Adrian, a Web Designer working remotely with our Ortigas office. I specialize in creating and maintaining modern, user-friendly websites using React.js, JavaScript, HTML, and CSS, with SEO and Google Analytics integrated to help sites perform at their best. Beyond coding, I love adding creative touches through graphic design and vector illustrations, making each project not just functional but visually engaging.
                    </p>
                    <a href='/about-me'>
                        <button
                            className='view-button dropshadow-hover fontRaleway px-5 py-3'
                            style={{ width: '100%' }}
                        >
                            Learn More
                        </button>
                    </a>
                </motion.div>

            </div>
        </div>
    )

};

export default AboutMe;


