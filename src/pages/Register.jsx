import React from 'react'
import logo from "../images/loginlogo.png";
import {Link} from "react-router-dom";

export default function Register() {
    return (
        <>
            <div className="reg-section">
                <div className='login-flex'>
                    <img className='login-logo' src={logo} alt=""/>
                </div>
                <h3 className='login-title'>Let’s Get Started</h3>
                <h3 className='login-text'>Create an new account</h3>
                <div className='login-flex'>
                    <input className='login-email' placeholder='Full Name' type="text"/>
                </div>
                <div className='login-flex'>
                    <input className='login-email' placeholder='Your email' type="email"/>
                </div>
                <div className='login-flex'>
                    <input className='login-email' placeholder='Password' type="password"/>
                </div>
                <div className='login-flex'>
                    <input className='login-email' placeholder='Password again' type="password"/>
                </div>
                <div className='login-flex'>
                    <button className='login-btn' type='submit'>Sign up</button>
                </div>
                <h3 className='have-title'>have an account? <Link to='/login'><span
                    className='reg-title'>Sign in</span></Link></h3>
            </div>
        </>
    )
}