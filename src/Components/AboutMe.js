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
                    <h1 className='job-title px-5' style={{ marginTop: '.7em', fontSize: "10em", color: "#948979" }}>
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
                    <p className="fontRaleway" style={{ fontSize: "2em", color: "#948979", textAlign: 'justify' }}>
                        I’m Adrian, a Website Designer currently based in Ortigas, Pasig. I earned my Bachelor of Science in Information Technology from Ateneo de Naga University in 2023. Originally from Iriga City, Camarines Sur, I’ve built a strong passion for front-end development and creating seamless digital experiences.
                        My work focuses on designing and building modern, user-friendly websites using React.js, along with core web technologies like JavaScript, HTML, and CSS. Beyond coding, I also enjoy graphic design, particularly crafting vector illustrations that bring added creativity to my projects.
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


