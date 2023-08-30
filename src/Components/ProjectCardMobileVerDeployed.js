
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
            className='shadow center mt-5 p-2'
            style={{ width: '300px', borderRadius: '20px' }}>
            <div className='row'>
                <div >
                    <Link to={projectScreenshots}>
                        <motion.button
                            initial={{ opacity: 0.6 }}
                            whileHover={{
                                scale: 1.1,
                                transition: { duration: 0.2 },
                            }}
                            whileTap={{ scale: 0.9 }}
                            whileInView={{ opacity: 1 }}
                            className='bgWoop boxshadow m-1'
                            style={{
                                width: '270px',
                                height: '120px',
                                backgroundImage: `url(${bgImageProject})`,
                            }}
                        />
                    </Link>
                </div>
                <div className='row mt-3'>
                    <h5 className='fontKanit'
                        style={{ textAlign: 'center', fontWeight: 'bold' }}>{projectTitle}
                    </h5>
                    <p className='fontInconsolata' style={{ textAlign: 'center' }}>{projectYear}</p>
                    <p className='fontRubik'
                        style={{ textAlign: 'justify' }}>
                        {projectDescription}
                    </p>
                </div>
            </div>

            <div className="d-flex bd-highlight">
                <div className="py-2 px-2 bd-highlight text-black hoverColorChange">
                    <Button className='boxshadow text-black '
                        style={{ border: '1px solid black', width: '120px' }}
                        href={codeLink}
                        endIcon={<FontAwesomeIcon icon={faGithub}
                        />}>
                        <span style={{ fontSize: '10px', fontWeight: 'bold' }}>View Code</span>
                    </Button>
                    <Button className='boxshadow text-black mx-2'
                        style={{ border: '1px solid black', width: '100px' }}
                        href={appLink}
                        endIcon={<FontAwesomeIcon icon={faArrowUpRightFromSquare}
                        />}>
                        <span style={{ fontSize: '10px', fontWeight: 'bold' }}>Visit App</span>
                    </Button>
                </div>
            </div>
        </motion.div>
    )

};

export default ProjectCardMobileVerDeployed;


