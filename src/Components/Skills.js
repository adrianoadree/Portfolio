import ReactJsicon from '../Assets/Skills/reacticon.png'
import HTMLicon from '../Assets/Skills/HTML.png'
import JSicon from '../Assets/Skills/JavaScript.png'
import CSSicon from '../Assets/Skills/CSS.png'
import firebaseicon from '../Assets/Skills/firebase-logo.png'
import wordpressicon from '../Assets/Skills/pngfind.com-wordpress-logo-png-2371723.png'
import octobercms from '../Assets/Skills/octobercms.png'
import salesforceicon from '../Assets/Skills/toppng.com-salesforce-transparent-logo-640x448.png'
import bootstrapicon from '../Assets/Skills/bootstrap-logo-shadow@2x.png'
import fluttericon from '../Assets/Skills/Flutter.png'
import photoshopicon from '../Assets/Skills/Adobe-Photoshop.png'
import illustratoricon from '../Assets/Skills/Adobe-Illustrator.png'
import githubicon from '../Assets/Skills/github-logo.png'
import { motion } from "framer-motion";


const Skills = () => {



    return (
        <div className='row text-center py-5 skills-component' style={{ height: 'auto', backgroundColor: '#1E201E' }}>

            <motion.div className='row'
                style={{ marginTop: '100px' }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 }
                }}
            >
                <h1 className='fontTitle' style={{ marginTop: '.2em', fontSize: "10em", color: "#948979" }}>
                    Skills & Capabilities
                </h1>
            </motion.div>

            <motion.div className='row text-center mt-5 '
                style={{ marginTop: '100px' }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 }
                }}>
                <p className="fontRaleway" style={{ fontSize: "2em", color: "#948979" }}>
                    Web Development Tools, & CMS
                </p>
                <p>
                    <a href='https://react.dev/' target='_blank' rel="noreferrer">
                        <img className="dropshadow-hover skillsicon" src={ReactJsicon} style={{ height: '100px', width: 'auto' }} alt="ReactJS" /></a>
                    <a href='https://firebase.google.com/?gclsrc=aw.ds&gad_source=1&gad_campaignid=20100026061&gbraid=0AAAAADpUDOjnVVlzJrhHEPJYBAHIT9X6S&gclid=CjwKCAjw2brFBhBOEiwAVJX5GHDdX9Ue8TopsjiRzaLyqmYeLvNNlppQFvbDIDY_l5KPW2KJI17fRhoC-QIQAvD_BwE' target='_blank' rel="noreferrer">
                        <img className="dropshadow-hover skillsicon" src={firebaseicon} style={{ height: '100px', marginLeft: '1.5em', width: 'auto' }} alt="Google Firebase" /></a>
                    <a href='https://getbootstrap.com/' target='_blank' rel="noreferrer">
                        <img className="dropshadow-hover skillsicon" src={bootstrapicon} style={{ height: '100px', marginLeft: '1.5em', width: 'auto' }} alt="Bootstrap" /></a>
                    <a href='https://developer.mozilla.org/en-US/docs/Web/HTML' target='_blank' rel="noreferrer">
                        <img className="dropshadow-hover skillsicon" src={HTMLicon} style={{ height: '100px', marginLeft: '1.5em', width: 'auto' }} alt="HTML" /></a>
                    <a href='https://developer.mozilla.org/en-US/docs/Web/CSS' target='_blank' rel="noreferrer">
                        <img className="dropshadow-hover skillsicon" src={CSSicon} style={{ height: '100px', marginLeft: '1.5em', width: 'auto' }} alt="CSS" /></a>
                    <a href='https://www.javascript.com/' target='_blank' rel="noreferrer">
                        <img className="dropshadow-hover skillsicon" src={JSicon} style={{ height: '100px', marginLeft: '1.5em', width: 'auto' }} alt="JavaScript" /></a>
                    <a href='https://octobercms.com/docs/' target='_blank' rel="noreferrer">
                        <img className="dropshadow-hover skillsicon" src={octobercms} style={{ height: '100px', width: 'auto', marginLeft: '1.5em' }} alt="octobercms" /></a>
                    <a href='https://wordpress.com/' target='_blank' rel="noreferrer">
                        <img className="dropshadow-hover skillsicon" src={wordpressicon} style={{ height: '100px', marginLeft: '1.5em', width: 'auto' }} alt="WordPress" /></a>
                </p>
            </motion.div>

            <motion.div className='row text-center mt-5'
                style={{ marginTop: '100px' }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 }
                }}>
                <p className="fontRaleway" style={{ fontSize: "2em", color: "#948979" }}>
                    Mobile Development Tool, Photo Editing, CRM, and Git
                </p>
                <div className='row mt-4'>
                    <p>
                        <a href='https://flutter.dev/' target='_blank' rel="noreferrer">
                            <img className="dropshadow-hover" src={fluttericon} style={{ height: '120px', width: 'auto' }} alt="Flutter" /></a>
                        <a href='https://www.adobe.com/ph_en/products/photoshop.html' target='_blank' rel="noreferrer">
                            <img className="dropshadow-hover" src={photoshopicon} style={{ height: '120px', marginLeft: '1.5em', width: 'auto' }} alt="Adobe Photoshop" /></a>
                        <a href='https://www.adobe.com/ph_en/products/illustrator.html' target='_blank' rel="noreferrer">
                            <img className="dropshadow-hover" src={illustratoricon} style={{ height: '120px', marginLeft: '1.5em', width: 'auto' }} alt="Adobe Illustrator" /></a>
                        <a href='https://www.salesforce.com/ap/' target='_blank' rel="noreferrer">
                            <img className="dropshadow-hover" src={salesforceicon} style={{ height: '120px', marginLeft: '1.5em', width: 'auto' }} alt="SalesForce" /></a>
                        <a href='https://github.com/' target='_blank' rel="noreferrer">
                            <img className="dropshadow-hover" src={githubicon} style={{ height: '120px', marginLeft: '1.5em', width: 'auto' }} alt="GitHub" /></a>
                    </p>
                </div>
            </motion.div>
        </div>
    )

};

export default Skills;


