import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Icon } from '@iconify/react';
import { Responsive } from 'typed-responsive-react';


const ContactMe = () => {
    const form = useRef();
    const [messageContent, setMessageContent] = useState('')
    const [nameContent, setNameContent] = useState('')
    const [emailContent, setEmailContent] = useState('')

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_w811plp",
                "template_jx81ak8",
                form.current,
                "dTcFYTUlvOwep2hr9"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    console.log("message sent");
                },
                (error) => {
                    console.log(error.text);
                }
            );
        setMessageContent('');
        setEmailContent('');
        setNameContent('');
        alert("Your message was successfully emailed to Adrian");

    };


    return (
        <>
            <Responsive displayIn={["laptop"]}>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 }
                    }}
                    className='shadow center p-5'
                    style={{ width: '900px', borderRadius: '20px', marginBottom: '100px' }}
                >
                    <div class="d-flex flex-row bd-highlight center">
                        <div class="bd-highlight"><Icon icon="line-md:email-twotone" style={{ height: '80px' }} /></div>
                        <div class="bd-highlight">
                            <p className='fontBree' style={{ float: 'left', fontSize: '50px', display: 'inline-block' }}>
                                CONTACT ME
                            </p>
                        </div>
                    </div>
                    <div className='center fontRubik' style={{ textAlign: 'justify', fontSize: '20px', width: '600px' }}>
                        you can utilize this email form to get in touch with me regarding a project or to inquire about my services for project involvement.                        </div>
                    <form ref={form} onSubmit={sendEmail}>
                        <motion.input
                            initial={{ opacity: 0.6 }}
                            whileHover={{
                                scale: 1.1,
                                transition: { duration: 0.2 },
                            }}
                            whileTap={{ scale: 0.9 }}
                            whileInView={{ opacity: 1 }}
                            className='mt-3 px-5'
                            type="text"
                            name="user_name"
                            value={nameContent}
                            onChange={(event) => { setNameContent(event.target.value); }}
                            placeholder='Enter your Full Name'
                            style={{
                                width: '600px',
                                height: '50px',
                                borderRadius: '20px',
                                borderStyle: 'solid',
                                borderColor: 'gray',
                                borderWidth: '2px'
                            }} required /><br />
                        <motion.input
                            initial={{ opacity: 0.6 }}
                            whileHover={{
                                scale: 1.1,
                                transition: { duration: 0.2 },
                            }}
                            whileTap={{ scale: 0.9 }}
                            whileInView={{ opacity: 1 }}
                            className='mt-3 px-5'
                            type="email"
                            name="user_email"
                            value={emailContent}
                            onChange={(event) => { setEmailContent(event.target.value); }}
                            placeholder='Enter your Email Address'
                            style={{
                                width: '600px',
                                height: '50px',
                                borderRadius: '20px',
                                borderStyle: 'solid',
                                borderColor: 'gray',
                                borderWidth: '2px'
                            }}
                            required /><br />
                        <motion.textarea
                            initial={{ opacity: 0.6 }}
                            whileHover={{
                                scale: 1.1,
                                transition: { duration: 0.2 },
                            }}
                            whileTap={{ scale: 0.9 }}
                            whileInView={{ opacity: 1 }}
                            className='mt-3 px-5 pt-2'
                            placeholder='Enter Message'
                            name="message"
                            value={messageContent}
                            onChange={(event) => { setMessageContent(event.target.value); }}
                            style={{
                                width: '600px',
                                height: '300px',
                                borderRadius: '20px',
                                borderStyle: 'solid',
                                borderColor: 'gray',
                                borderWidth: '2px'
                            }} required>
                        </motion.textarea><br />
                        <motion.input
                            initial={{ opacity: 0.6 }}
                            whileHover={{
                                scale: 1.1,
                                transition: { duration: 0.2 },
                            }}
                            whileTap={{ scale: 0.9 }}
                            whileInView={{ opacity: 1 }}
                            className='mt-3 boxshadow'
                            type="submit"
                            value="Send Message"
                            style={{ width: '500px' }} />
                    </form>

                </motion.div>
            </Responsive >

            <Responsive displayIn={["mobile", "tablet"]}>




                <motion.div
                    className='mt-5 shadow mx-2'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 }
                    }}
                    style={{ borderRadius: '20px', marginBottom: '100px', marginTop: '100px', paddingTop: '30px', paddingBottom: '30px' }}
                >
                    <div className='mt-5'>
                        <div className=' px-5 row'>
                            <div className='col-2'>
                                <Icon icon="line-md:email-twotone" style={{ height: '70' }} />
                            </div>
                            <div className='col-10'>
                                <p className='fontBree' style={{ float: 'left', fontSize: '38px', display: 'inline-block' }}>
                                    CONTACT ME
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='p-5 fontRubik' style={{ textAlign: 'justify', fontSize: '20px' }}>
                        you can utilize this email form to get in touch with me regarding a project or to inquire about my services for project involvement.
                    </div>

                    <form ref={form} onSubmit={sendEmail} className="px-5">
                        <motion.input
                            initial={{ opacity: 0.6 }}
                            whileHover={{
                                scale: 1.1,
                                transition: { duration: 0.2 },
                            }}
                            whileTap={{ scale: 0.9 }}
                            whileInView={{ opacity: 1 }}
                            className='mt-3 px-5'
                            type="text"
                            name="user_name"
                            value={nameContent}
                            onChange={(event) => { setNameContent(event.target.value); }}
                            placeholder='Enter your Full Name'
                            style={{
                                width: '300px',
                                height: '50px',
                                borderRadius: '20px',
                                borderStyle: 'solid',
                                borderColor: 'gray',
                                borderWidth: '2px'
                            }} required /><br />
                        <motion.input
                            initial={{ opacity: 0.6 }}
                            whileHover={{
                                scale: 1.1,
                                transition: { duration: 0.2 },
                            }}
                            whileTap={{ scale: 0.9 }}
                            whileInView={{ opacity: 1 }}
                            className='mt-3 px-5'
                            type="email"
                            name="user_email"
                            value={emailContent}
                            onChange={(event) => { setEmailContent(event.target.value); }}
                            placeholder='Enter your Email Address'
                            style={{
                                width: '300px',
                                height: '50px',
                                borderRadius: '20px',
                                borderStyle: 'solid',
                                borderColor: 'gray',
                                borderWidth: '2px'
                            }}
                            required /><br />
                        <motion.textarea
                            initial={{ opacity: 0.6 }}
                            whileHover={{
                                scale: 1.1,
                                transition: { duration: 0.2 },
                            }}
                            whileTap={{ scale: 0.9 }}
                            whileInView={{ opacity: 1 }}
                            className='mt-3 px-5 pt-2'
                            placeholder='Enter Message'
                            name="message"
                            value={messageContent}
                            onChange={(event) => { setMessageContent(event.target.value); }}
                            style={{
                                width: '300px',
                                height: '300px',
                                borderRadius: '20px',
                                borderStyle: 'solid',
                                borderColor: 'gray',
                                borderWidth: '2px'
                            }} required>
                        </motion.textarea><br />
                        <motion.input
                            initial={{ opacity: 0.6 }}
                            whileHover={{
                                scale: 1.1,
                                transition: { duration: 0.2 },
                            }}
                            whileTap={{ scale: 0.9 }}
                            whileInView={{ opacity: 1 }}
                            className='mt-3 boxshadow'
                            type="submit"
                            value="Send Message"
                            style={{ width: '300px' }} />
                    </form>

                </motion.div>


            </Responsive >

        </>
    );
};

export default ContactMe;
