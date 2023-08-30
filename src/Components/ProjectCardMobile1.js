
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

const ProjectCardMobile1 = ({ appLink, codeLink, projectTitle, projectYear, projectDescription, projectScreenshots, skill1, skill2, bgImageProject }) => {



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
                        <Link to={projectScreenshots}>
                            <motion.button
                                initial={{ opacity: 0.6 }}
                                whileHover={{
                                    scale: 1.1,
                                    transition: { duration: 0.2 },
                                }}
                                whileTap={{ scale: 0.9 }}
                                whileInView={{ opacity: 1 }}
                                style={{
                                    width: '240px',
                                    height: '400px',
                                    backgroundImage: `url(${bgImageProject})`,
                                    backgroundSize: '100% 100%',
                                    border: '1px solid #3a3a3a',
                                    padding: '10px',
                                    borderRadius: '15px',
                                    boxShadow: '5px 5px #3a3a3a'
                                }}
                            />
                        </Link>
                    </Tooltip>
                </div>
                <div className='col-8 p-5'>
                    <h5 className='fontKanit'
                        style={{ textAlign: 'center', fontWeight: 'bold' }}>
                        {projectTitle}
                    </h5>
                    <p className='fontInconsolata' style={{ textAlign: 'center' }}>{projectYear}</p>
                    <p className='fontRubik'
                        style={{ textAlign: 'justify' }}>
                        {projectDescription}
                    </p>
                    <div className="d-flex bd-highlight">

                        <div className="me-auto bd-highlight">
                            <Image className='shadow ml-2' src={skill1} rounded='true' style={{ height: '50px' }} />
                        </div>
                        <div className="py-2 px-2 bd-highlight text-black hoverColorChange">
                            <Button className='boxshadow text-black '
                                style={{ border: '1px solid black' }}
                                href={codeLink}
                                endIcon={<FontAwesomeIcon icon={faGithub}
                                />}>
                                <span style={{ fontWeight: 'bold' }}>View Code</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

        </motion.div>
    )

};

export default ProjectCardMobile1;


