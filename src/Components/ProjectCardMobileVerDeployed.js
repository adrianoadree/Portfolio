
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

const ProjectCardMobileVerDeployed = ({ appLink, codeLink, projectTitle, projectYear, projectDescription, projectScreenshots, bgImageProject }) => {



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
            className='shadow px-4 py-3 m-3'
            style={{ borderRadius: '20px' }}>
            <a className='center' href={projectScreenshots} >
                <motion.img src={bgImageProject} style={{ height: '150px' }}
                    initial={{ opacity: 0.6 }}
                    whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.9 }}
                    whileInView={{ opacity: 1 }}
                />
            </a>
            <div>
                <p className='fontRubik' style={{ textAlign: 'center', fontSize: '20px' }}>{projectTitle}</p>
                <p className='fontRubik' style={{ textAlign: 'center', fontSize: '15px' }}>{projectYear}</p>
                <p className='fontRubik'
                    style={{ textAlign: 'justify' }}>
                    {projectDescription}
                </p>
            </div>
            <div class="d-flex bd-highlight mb-3">
                <div class="p-2 bd-highlight">
                    <a href='asdassdfff'>
                        <Button className='boxshadow text-black '
                            style={{ border: '1px solid black', width: '12  0px' }}
                            href={appLink}
                            endIcon={<FontAwesomeIcon icon={faGithub}
                            />}>
                            <span style={{ fontSize: '10px', fontWeight: 'bold' }}>Visit App</span>
                        </Button>
                    </a>
                </div>
                <div class="ms-auto p-2 bd-highlight">
                    <a href='asdassdfff'>
                        <Button className='boxshadow text-black '
                            style={{ border: '1px solid black', width: '12  0px' }}
                            href={codeLink}
                            endIcon={<FontAwesomeIcon icon={faGithub}
                            />}>
                            <span style={{ fontSize: '10px', fontWeight: 'bold' }}>View Code</span>
                        </Button>
                    </a>
                </div>
            </div>
        </motion.div>
    )

};

export default ProjectCardMobileVerDeployed;


