import React from 'react'
import './signup.css'

function SignUp() {
    return (
        <>
            <section className="signupPage">
                <div className="signupBoard">
                    <h4 className='signupHeader'>signup</h4>
                    <form action="" className="signupForm">
                        <label htmlFor="signupEmail">Email</label>
                        <input type="text" id='signupEmail' placeholder='Email' />

                        <label htmlFor="signupPassword">Password</label>
                        <input type="password" id='signupPassword' placeholder='Password' />

                        <label htmlFor="signupconfirmPassword">Confirm password</label>
                        <input type="password" id='signupconfirmPassword' placeholder='Confirm password' />

                        <button className='signupButton' type='submit'>Sign Up</button>
                    </form>

                    <div className="signupRegister">
                        <p>Already have an Account? <a href="">Log In</a></p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SignUp