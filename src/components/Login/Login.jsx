import React from 'react'
import './login.css'

function Login() {
  return (
    <>
    <section className="loginPage">
        <div className="loginBoard">
            <h4 className='loginHeader'>Login</h4>
            <form action="" className="loginForm">
                <label htmlFor="loginEmail">Email</label>
                <input type="text" id='loginEmail' placeholder='Email' />

                <label htmlFor="loginPassword">Password</label>
                <input type="password" id='loginPassword' placeholder='Password' />

                <button className='loginButton' type='submit'>Log In</button>
            </form>

            <div className="loginRegister">
              <p>Not have an Account? <a href="">Sign Up</a></p>
            </div>
        </div>
    </section>
    </>
  )
}

export default Login