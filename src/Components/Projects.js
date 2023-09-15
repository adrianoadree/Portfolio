import { Responsive } from 'typed-responsive-react';
import { Icon } from '@iconify/react';
import { motion } from "framer-motion";
import WoopDisplay from '../Assets/WoopDisplay.png'
import IMSDisplay from '../Assets/IMSDisplay.png'
import TuwayanDisplay from '../Assets/TuwayanDisplay.png'
import BrickBreakerDisplay from '../Assets/Brickbreakerdisplay.png'
import ProjectCardWeb1 from '../Components/ProjectCardWeb1';
import ProjectCardWeb2 from '../Components/ProjectCardWeb2';
import ProjectCardMobile1 from '../Components/ProjectCardMobile1';
import ProjectCardMobileVer from '../Components/ProjectCardMobileVer';
import ProjectCardMobileVerDeployed from './ProjectCardMobileVerDeployed';

const Projects = () => {



    return (
        <>
            <Responsive displayIn={["laptop"]}>
                <div className='my-5'>
                    <motion.div style={{ marginTop: '150px' }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 }
                        }}
                    >
                        <div className='mt-5'>
                            <div class="d-flex flex-row bd-highlight center">
                                <div class="bd-highlight"><Icon icon="ant-design:code-outlined" style={{ height: '80px' }} /></div>
                                <div class="bd-highlight">
                                    <p className='fontBree' style={{ float: 'left', fontSize: '50px', display: 'inline-block' }}>
                                        PROJECTS
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='center fontRubik' style={{ textAlign: 'justify', fontSize: '20px' }}>
                            Here are several projects from my academic years, including internship assignments, capstone projects, and other academic endeavors. These projects showcase my versatility in programming languages across web development, mobile application development, and game development.
                        </div>

                    </motion.div>


                    <ProjectCardMobile1
                        bgImageProject={WoopDisplay}
                        projectTitle='Woop! Bicycle Errand Services 📱'
                        projectYear='Internship Project 2023'
                        projectDescription='Woop! operates as a bicycle-based errand service located in Naga City, encompassing three key elements: two mobile apps designed for Woop! riders and customers, along with a web application tailored for administrative purposes. Woop! provides a range of errand services, including Pasa-Buy, Parcel Pickups, and Bill Payments. Pasa-Buy is further divided into three distinct categories: Food, Medicine, and Grocery'
                        codeLink='https://github.com/markguchi/woop/tree/main/mobile_customer'
                        projectScreenshots='/view-project-woop'
                        skill1='vscode-icons:file-type-flutter'
                    />
                    <ProjectCardWeb1
                        bgImageProject={IMSDisplay}
                        projectTitle='IMS: Inventory Management System 🖥️'
                        projectYear='Capstone Project 2022'
                        projectDescription='A web applications catered for MSMEs to keep track of their products stock level and to create their own virtual warehouse that provides indoor mapping to ease locating products'
                        appLink='https://inventoryapp-330808.web.app'
                        codeLink='https://github.com/adrianoadree/IMSweb'
                        projectScreenshots='/view-project-ims'
                        skill1='devicon:react' skill2='logos:firebase'
                    />
                    <ProjectCardWeb2
                        bgImageProject={TuwayanDisplay}
                        projectTitle='Tuwayan: An Online Trading System for Barter Enthusiasts 🖥️'
                        projectYear='Course Project 2021'
                        projectDescription='A web-based platform designed to enable the seamless exchange of goods among online traders.'
                        appLink='https://tuwayan.vercel.app/index.html'
                        codeLink='https://github.com/adrianoadree/tuwayan'
                        projectScreenshots='/view-project-tuwayan'
                        skill1='logos:html-5' skill2='logos:css-3'
                    />
                    <ProjectCardWeb1
                        bgImageProject={BrickBreakerDisplay}
                        projectTitle='Brick Breaker 🎮'
                        projectYear='Course Project 2019'
                        projectDescription='A Unity-based Brick Breaker game, coded in C#, incorporates captivating visuals inspired by the Colgante Bridge of Naga City. The game utilizes background images and sprites inspired by this iconic bridge to enhance its aesthetics and gameplay.'
                        codeLink='https://github.com/adrianoadree/brickbreaker'
                        projectScreenshots='/view-project-brickbreaker'
                        skill1="logos:unity" skill2='devicon:csharp'
                    />

                </div>

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
                                <Icon icon="ant-design:code-outlined" style={{ height: '70px' }} />
                            </div>
                            <div className='col-10'>
                                <p className='fontBree' style={{ float: 'left', fontSize: '40px', display: 'inline-block' }}>
                                    PROJECTS
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='p-5 fontRubik' style={{ textAlign: 'justify', fontSize: '20px' }}>
                        Here are several projects from my academic years, including internship assignments, capstone projects, and other academic endeavors. These projects showcase my versatility in programming languages across web development, mobile application development, and game development.
                    </div>
                </motion.div>

                <ProjectCardMobileVer
                    codeLink='https://github.com/markguchi/woop/tree/main/mobile_customer'
                    projectTitle='Woop! Bicycle Errand Services 📱'
                    projectYear='Internship Project 2023'
                    projectDescription='Woop! Is a bicycle errand service based in Naga City. Woop offers errand services such as Pasa-Buy, Parcel Pickups, and Bills payment.'
                    projectScreenshots='/view-project-woop'
                    bgImageProject={WoopDisplay}
                />

                <ProjectCardMobileVerDeployed
                    appLink='https://inventoryapp-330808.web.app'
                    codeLink='https://github.com/adrianoadree/IMSweb'
                    projectTitle='IMS: Inventory Management System 🖥️'
                    projectYear='Capstone Project 2022'
                    projectDescription='A web applications catered for MSMEs to keep track of their product stock level and to create their own virtual warehouse that provides indoor mapping to ease locating products'
                    projectScreenshots='/view-project-ims'
                    bgImageProject={IMSDisplay}
                />

                <ProjectCardMobileVerDeployed
                    appLink='https://tuwayan.vercel.app/index.html'
                    codeLink='https://github.com/adrianoadree/tuwayan'
                    projectTitle='Tuwayan: An Online Trading System for Barter Enthusiasts 🖥️'
                    projectYear='Course Project 2021'
                    projectDescription='a web application that facilitate the exchange of goods between online traders.'
                    projectScreenshots='/view-project-tuwayan'
                    bgImageProject={TuwayanDisplay}
                />

                <ProjectCardMobileVerDeployed
                    codeLink='https://github.com/adrianoadree/brickbreaker'
                    projectTitle='Brick Breaker 🎮'
                    projectYear='Course Project 2019'
                    projectDescription='A Brick breaker game Created in Unity using C#. Background image and sprites used in the game was based on Colgante Bridge of Naga City'
                    projectScreenshots='/view-project-brickbreaker'
                    bgImageProject={BrickBreakerDisplay}
                />
            </Responsive>
        </>
    )

};

export default Projects;


