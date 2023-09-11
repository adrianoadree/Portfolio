
import React from 'react';
import { motion } from "framer-motion";
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Icon } from '@iconify/react';

const ProjectCardMobileVer = ({ codeLink, projectTitle, projectYear, projectDescription, projectScreenshots, bgImageProject }) => {



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
            <a className='center' href='view-project-woop' >
                <motion.img src={bgImageProject} style={{ height: '400px' }}
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

                <div class="ms-auto p-2 mt-1 bd-highlight">
                    <a href={codeLink}>
                        <Button className='boxshadow text-black '
                            style={{ border: '1px solid black', width: '12  0px' }}
                            href={projectScreenshots}
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

export default ProjectCardMobileVer;


