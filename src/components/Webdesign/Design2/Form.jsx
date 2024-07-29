import React from 'react';
import './form.css';
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Form({ colors = [] }) {
    // Destructure colors array with default values
    const [
        primary = '#4CAF50',
        secondary = '#FF5722',
        accent = '#FFC107',
        background = '#f5f5f5',
        text = '#333',
        white = '#ffffff'
    ] = colors;

    return (
        <>
            <div className="webTemplateFormPage" style={{ '--primary-color': primary, '--secondary-color': secondary, '--accent-color': accent, '--background-color': background, '--text-color': text, '--white-color': white }}>
                <div className="WTLP-Form-Container">
                    <h5 className="WTLP-Form-Heading">Login</h5>
                    <form action="" className="WTLP-Form">

                        <label htmlFor="WTLP-Form-Username" className="WTLP-Form-Label">Username</label>
                        <input type="text" id='WTLP-Form-Username' className="WTLP-Form-Input" />

                        <label htmlFor="WTLP-Form-Password" className="WTLP-Form-Label">Password</label>
                        <input type="password" id='WTLP-Form-Password' className="WTLP-Form-Input" />

                    </form>
                    <p className="WTLP-Form-ForgetPassword">Forgot Password ?</p>

                    <button className="WTLP-Form-SignIn-Button">Sign In </button>

                    <div className="WTLP-SocialAccount-Section">
                        <div className="WTLP-Social-Header">
                            <div className="WTLP-Social-Header-Line"></div>
                            <p>Login with social accounts</p>
                            <div className="WTLP-Social-Header-Line"></div>
                        </div>
                        <div className="WTLP-Social-Icons">
                            <FaGoogle className='WTLP-Social-Icon' />
                            <FaTwitter className='WTLP-Social-Icon' />
                            <FaGithub className='WTLP-Social-Icon' />
                        </div>
                        <p className="WTLP-No-Account-Label">
                            Don't have an account  ? <span>Sign Up</span>
                        </p>

                    </div>
                </div>

            </div>
        </>

    );
}

export default Form;
