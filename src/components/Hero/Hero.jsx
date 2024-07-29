import React from 'react'
import './hero.css'
import mainImage from '../../Assets/Main.jpg'
import { Link, useLocation } from 'react-router-dom';

function Hero() {
    return (
        <div className="home">
            <div className="homeBoard">
                <div className="homeLeft">
                    <p>Welcome to <span>Palette Visualizer</span>. <br /> Visualize stunning color combinations on readymade web design templates effortlessly.</p>
                    <Link to={"/garage"} className='getStartedButton'>Get Started</Link>
                </div>
                <div className="homeRight">
                    <img src={mainImage} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero