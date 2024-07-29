// src/components/navbar/Navbar.js
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';
import { LuMenu } from "react-icons/lu";

function Navbar() {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className='navbar'>
            <h3 className='navbarLogo'>PaletteVisualizer</h3>
            <ul className={`navList ${menuOpen ? 'open' : ''}`}>
                <li className='navItem'>
                    <Link 
                        to="/" 
                        className={`navLink ${location.pathname === '/' ? 'active' : ''}`}
                        onClick={() => setMenuOpen(false)}
                    >
                        Home
                    </Link>
                </li>
                <li className='navItem'>
                    <Link 
                        to="/garage" 
                        className={`navLink ${location.pathname === '/garage' ? 'active' : ''}`}
                        onClick={() => setMenuOpen(false)}
                    >
                        Visualizer
                    </Link>
                </li>
                <li className='navItem'>
                    <Link 
                        to="/login" 
                        className={`navLink ${location.pathname === '/login' ? 'active' : ''}`}
                        onClick={() => setMenuOpen(false)}
                    >
                        Log In
                    </Link>
                </li>
                <li className='navItem'>
                    <Link 
                        to="/signup" 
                        className={`navLink ${location.pathname === '/signup' ? 'active' : ''}`}
                        onClick={() => setMenuOpen(false)}
                    >
                        Sign Up
                    </Link>
                </li>
            </ul>
            <LuMenu className={`navbar-Menu-Icon ${menuOpen ? 'activeMenu' : ''}`} onClick={toggleMenu} />
        </nav>
    );
}

export default Navbar;
