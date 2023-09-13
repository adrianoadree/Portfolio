
import React from 'react';
import { motion } from "framer-motion";
import { Tooltip } from '@mui/material';
import Fade from '@mui/material/Fade';
import { Icon } from '@iconify/react';

const ProjectCardWeb2 = ({ appLink, codeLink, projectTitle, projectYear, projectDescription, projectScreenshots, skill1, skill2, bgImageProject }) => {



    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 }
            }}
            className='shadow center p-5 my-5'
            style={{ width: '900px', borderRadius: '20px' }}>
            <div className='row'>
                <div className='col-7 p-1'>
                    <Tooltip
                        TransitionComponent={Fade}
                        TransitionProps={{ timeout: 600 }}
                        title="Click to view Project's screenshots"
                        followCursor
                    >
                        <a href={projectScreenshots} >
                            <motion.img src={bgImageProject} style={{ height: '270px' }}
                                initial={{ opacity: 0.6 }}
                                whileHover={{
                                    scale: 1.1,
                                    transition: { duration: 0.2 },
                                }}
                                whileTap={{ scale: 0.9 }}
                                whileInView={{ opacity: 1 }}
                            />
                        </a>
                    </Tooltip>
                </div>
                <div className='col-5'>

                    <h5 className='fontKanit'
                        style={{ textAlign: 'center', fontWeight: 'bold' }}>
                        {projectTitle}
                    </h5>
                    <p className='fontInconsolata' style={{ textAlign: 'center' }}>
                        {projectYear}
                    </p>
                    <p className='fontRubik'
                        style={{ textAlign: 'justify' }}>
                        {projectDescription}
                    </p>
                </div>

            </div>
            <div className="d-flex bd-highlight">
                <div className="p-2 bd-highlight">
                    <Icon icon={skill1} className='circleshadow' style={{ width: '100', height: '100px', }} />
                </div>
                <div className="me-auto p-2 bd-highlight">
                    <Icon icon={skill2} className='circleshadow' style={{ width: '100', height: '100px', }} />
                </div>

                <div className="py-2 px-2 bd-highlight text-black">
                    <a href={appLink}>
                        <motion.button className="boxshadow "
                            initial={{ opacity: 0.6 }}
                            whileHover={{
                                scale: 1.1,
                                transition: { duration: 0.2 },
                            }}
                            whileTap={{ scale: 0.9 }}
                            whileInView={{ opacity: 1 }}>
                            <Icon icon="icon-park:web-page" style={{ height: '50px', }} />Visit App
                        </motion.button>
                    </a>
                </div>
                <div className="py-2 px-4 bd-highlight text-black">
                    <a href={codeLink}>
                        <motion.button className="boxshadow "
                            initial={{ opacity: 0.6 }}
                            whileHover={{
                                scale: 1.1,
                                transition: { duration: 0.2 },
                            }}
                            whileTap={{ scale: 0.9 }}
                            whileInView={{ opacity: 1 }}>
                            <Icon icon="icon-park:github" style={{ height: '50px', }} />View Code
                        </motion.button>
                    </a>
                </div>
            </div>
        </motion.div>
    )

};

export default ProjectCardWeb2;


