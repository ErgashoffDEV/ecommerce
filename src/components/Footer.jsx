import React from "react";
import logo from '../images/logo.png'
import facebook from '../images/facebook.png'
import twitter from '../images/twitter.png'
import union from '../images/union.png'
import master from '../images/master.png'
import  paypal from '../images/paypal.png'

export default function Footer() {
    return (
        <footer>
            <div className="footer-top">
                <div className="footer-left">
                    <img src={logo} alt=""/>
                    <p className="f-l-title">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been
                        the
                        industry's standard dummy text ever.Since the 1500s, when an unknown printer.
                    </p>
                </div>
                <div className="footer-center">
                    <h3 className="f-c-title">Follow Us</h3>
                    <p className="f-c-text">Since the 1500s, when an unknown printer took a galley of type and
                        scrambled.</p>
                    <div>
                        <img className="face" src={facebook} alt=""/>
                        <img className='twit' src={twitter} alt=""/>
                    </div>
                </div>
                <div className="footer-right">
                    <h4 className="f-c-title">Contact Us</h4>
                    <p className="f-r-text">E-Comm , 4578 Marmora Road, Glasgow D04 89GR</p>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-bot">
                    <h3 className="f-bot-title">Infomation</h3>
                    <h4 className="f-bot-text">
                        About Us
                        Infomation
                        Privacy Policy
                        Terms & Conditions
                    </h4>
                </div>
                <div className="footer-bot">
                    <h3 className="f-bot-title">Service</h3>
                    <h4 className="f-bot-text">
                        About Us
                        Infomation
                        Privacy Policy
                        Terms & Conditions
                    </h4>
                </div>
                <div className="footer-bot">
                    <h3 className="f-bot-title">My Account</h3>
                    <h4 className="f-bot-text">
                        About Us
                        Infomation
                        Privacy Policy
                        Terms & Conditions
                    </h4>
                </div>
                <div className="footer-bot">
                    <h3 className="f-bot-title">Our Offers</h3>
                    <h4 className="f-bot-text">
                        About Us
                        Infomation
                        Privacy Policy
                        Terms & Conditions
                    </h4>
                </div>
            </div>
            <p className="footer-line"/>
            <div className="footer-end">
                <h3 className="end-text">© 2018 Ecommerce theme by www.bisenbaev.com</h3>
                <div className='contrabanda'>
                    <img className="card-uni" src={union} alt=""/>
                    <img className="card-uni" src={master} alt=""/>
                    <img className="card-uni" src={paypal} alt=""/>
                    <img className="card-uni" src={union} alt=""/>
                </div>
            </div>
        </footer>
    )
}