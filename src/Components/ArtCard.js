
import React from 'react';
import { Image } from 'react-bootstrap';
import { motion } from "framer-motion";

const ArtCard = ({ title, artType, source, height, width, imageHeight }) => {

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
            className='bg-white boxshadow mb-5 p-3'
            style={{ height: height, width: width, borderRadius: '20px' }}>
            <Image className='m-auto card' src={source} style={{ borderRadius: '20px', height: imageHeight }} />
            <h5 className='fontKanit  m-auto pt-2' style={{ fontWeight: 'bold' }}>{title}</h5>
            <h6 className='fontKanit  m-auto'>{artType}</h6>
        </motion.div>
    );
};

export default ArtCard;


