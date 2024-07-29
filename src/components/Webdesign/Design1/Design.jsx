import React from 'react';
import './design.css';
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";

function Design({ colors = [] }) {
    // Destructure colors array with default values
    const [
        primary = '#4CAF50',
        secondary = '#FF5722',
        accent = '#FFC107',
        background = '#f5f5f5',
        text = '#333',
        white = '#ffffff'
    ] = colors || {};

    return (
        <>
            <div className="webTemplateLandingPage" style={{ '--primary-color': primary, '--secondary-color': secondary, '--accent-color': accent, '--background-color': background, '--text-color': text, '--white-color': white }}>
                <nav className='WTLP-Navbar'>
                    <h3 className="WTLP-Logo">TechVibe</h3>
                    <ul className='WTLP-Nav-List'>
                        <li>Home</li>
                        <li>Products</li>
                        <li>About Us</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                </nav>
                <div className="WTLP-Hero">
                    <section className="WTLP-Hero-Left">
                        <h4 className='WTLP-Hero-Left-Heading'>Empowering Innovation</h4>
                        <p className="WTLP-Hero-Left-SubHeading">Discover the latest advancements in technology and transform your ideas into reality with our state-of-the-art solutions.</p>
                        <button className="WTLP-Hero-Left-GetStarted">Explore Now</button>
                    </section>
                </div>
                <footer className="WTLP-Footer">
                    <div className="WTLP-Footer-Links">
                        <ul className='WTLP-Footer-Link-List'>
                            <li>Privacy Policy</li>
                            <li>Terms Of Services</li>
                            <li>Careers</li>
                        </ul>

                    </div>
                    <div className="WTLP-Footer-Social-Icons">
                        <BsFacebook className='WTLP-Footer-Icon' />
                        <FaTwitter className='WTLP-Footer-Icon' />
                        <BsLinkedin className='WTLP-Footer-Icon' />
                    </div>
                </footer>
            </div>
        </>
    );
}

export default Design;
