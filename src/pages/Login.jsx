import React from "react";
import logo from '../images/loginlogo.png';
import facebook from '../images/Other Icon/Facebook.png'
import google from '../images/Other Icon/Group 121.png'
import {Link} from "react-router-dom";

export default function Login() {
    return (
        <>
            <div className="login-section">
                <div className='login-flex'>
                    <img className='login-logo' src={logo} alt=""/>
                </div>
                <h3 className='login-title'>Welcome to E-com</h3>
                <h3 className='login-text'>Sign in to continue</h3>
                <div className='login-flex'>
                    <input autoComplete='off' className='login-email' type="email" placeholder="Your email"/>
                </div>
                <div className='login-flex'>
                    <input autoComplete='off' className='login-email' type="password" placeholder="Your password"/>
                </div>
                <div className='login-flex'>
                    <button className='login-btn' type='submit'>Sign in</button>
                </div>
                <h3 className='login-or'>Or</h3>
                <div className='login-div'>
                    <img src={google} alt=""/>
                    <h3 className='login-btn-title'>Login with Google</h3>
                </div>
                <div className='login-div'>
                    <img src={facebook} alt=""/>
                    <h3 className='login-btn-title'>Login with facebook</h3>
                </div>
                <h3 className='forgot-title'>Forgot Password?</h3>
                <h3 className='have-title'>Don’t have a account? <Link to='/register'><span className='reg-title'>Register</span></Link></h3>
            </div>
        </>
    )
}