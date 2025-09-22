import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import AALogo from '../Assets/AA-white.png'
import { useState, useEffect } from "react";


const Footer = () => {
    const slides = [
        ["Brixton Place, Kapitolyo, Pasig, National Capital Region"],
        ["Sampaguita Street, San Miguel, Iriga City, Camarines Sur"]
    ];

    const [current, setCurrent] = useState(0);

    // Auto-slide every 3 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [slides.length]);



    return (
        <footer className='row text-center fontRaleway footer' style={{ height: 'auto', backgroundColor: '#1E201E', color: '#948979' }}>
            <div className="col-lg-3 pt-5 text-end px-5 footer-nav">
                <h1>Navigation</h1>
                <div>
                    <ul
                        style={{
                            marginTop: "2em",
                            fontSize: "1.2em",
                            listStyleType: "none",
                            padding: 0,
                            margin: 0,
                            display: "flex",
                            flexDirection: "column",
                            gap: ".7em",
                        }}
                    >
                        <li>
                            <a className="text-link" href="/about-me">
                                About Me
                            </a>
                        </li>
                        <li>
                            <a className="text-link" href="/projects">
                                Projects
                            </a>
                        </li>
                        <li>
                            <a className="text-link" href="/arts">
                                Arts
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='col-lg-6 p-2 pt-5' >
                <a className='text-link' href="/">
                    <img className="dropshadow-hover" src={AALogo} style={{ height: '7em', marginBottom: '2em' }} alt="Adrian Adriano" />
                </a>
                <div className='' >
                    <div className="row text-center">
                        {slides[current].map((address, i) => (
                            <div key={i}>
                                <h4 style={{ display: 'inline-block' }}> {address}</h4>
                            </div>
                        ))}
                    </div>

                    {/* Dots indicator */}
                    <div className="d-flex justify-content-center mt-3">
                        {slides.map((_, i) => (
                            <div
                                key={i}
                                style={{
                                    height: "10px",
                                    width: "10px",
                                    borderRadius: "50%",
                                    margin: "0 5px",
                                    backgroundColor: i === current ? "wheat" : "gray",
                                }}
                            ></div>
                        ))}
                    </div>
                    <hr style={{ marginTop: '2em' }} />
                    <span ><p style={{ display: 'inline-block' }}>Copyright © Adrian Adriano 2025 | </p> <a href='/sitemap' style={{ display: 'inline-block' }}>Sitemap</a></span>
                </div>
            </div>
            <div className='col-lg-3 p-5 flex justify-center text-start fontRaleway'>
                <h1>Let’s Connect</h1>
                <a
                    href="mailto:adrianoadriannn@gmail.com"
                    style={{
                        marginTop: '1em',
                        fontSize: '1em',
                        color: '#948979',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center'
                    }}
                >
                    <FontAwesomeIcon
                        icon={faEnvelope}
                        style={{ fontSize: '1.8em', marginRight: '8px' }}
                    />
                    adrianoadriannn@gmail.com
                </a>
                <a className='text-link' href="https://www.linkedin.com/in/adrianoadriannn/" target='_blank' rel="noreferrer"
                    style={{
                        marginTop: '1em',
                        fontSize: '1em',
                        color: '#948979',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center'
                    }}>
                    <FontAwesomeIcon
                        icon={faLinkedin}
                        style={{ fontSize: '1.8em', marginRight: '8px' }}
                    />
                    linkedin.com/in/adrianoadriannn/
                </a>
                <a
                    href="https://github.com/adrianoadree"
                    style={{
                        marginTop: '1em',
                        fontSize: '1em',
                        color: '#948979',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center'
                    }}
                >
                    <FontAwesomeIcon
                        icon={faGithub}
                        style={{ fontSize: '1.8em', marginRight: '8px' }}
                    />
                    github.com/adrianoadree
                </a>
            </div>

        </footer>

    )

};

export default Footer;


