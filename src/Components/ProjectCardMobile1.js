
import React from 'react';
import { Image } from 'react-bootstrap';
import { motion } from "framer-motion";
import { Tooltip } from '@mui/material';
import Fade from '@mui/material/Fade';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Icon } from '@iconify/react';

const ProjectCardMobile1 = ({ codeLink, projectTitle, projectYear, projectDescription, projectScreenshots, skill1, skill2, bgImageProject }) => {



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
                <div className='col-4'>
                    <Tooltip
                        TransitionComponent={Fade}
                        TransitionProps={{ timeout: 600 }}
                        title="Click to view Project's screenshots"
                        followCursor
                    >
                        <a href={projectScreenshots} >
                            <motion.img src={bgImageProject} style={{ height: '500px' }}
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
                <div className='col-8 p-5'>
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
                    <div class="d-flex bd-highlight mb-3">
                        <div class="p-2 bd-highlight">
                            <Icon icon={skill1} className='circleshadow' style={{ width: '100', height: '100px', }} />
                        </div>
                        <div class="ms-auto p-2 bd-highlight">
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
                </div>
            </div>

        </motion.div>
    )

};

export default ProjectCardMobile1;


