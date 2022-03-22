import React from 'react'
import TopNavbar from "../components/TopNavbar";
import BottomNavbar from "../components/BottomNavbar";
import Footer from "../components/Footer";
import women from "../images/women.png"

export default function Contact() {
    return (
        <>
            <TopNavbar/>
            <BottomNavbar/>
            <div className="page">
                <h4 className='page-title'>Home / <span>Contact Us</span></h4>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <div>
                        <img className="contact-img" src={women} alt=""/>
                    </div>
                    <div className="contact-l-texts">
                        <h3 className="contact-l-title">Get in touch</h3>
                        <h3 className="contact-l-text">contact@e-comm.ng</h3>
                        <h3 className="contact-l-phone">+234 4556 6665 34</h3>
                        <p className="contact-l-address">20 Prince Hakerem Lekki Phase 1, Lagos.</p>
                    </div>
                </div>
                <div className="contact-right">
                    <div className="input-div">
                        <h3 className="contact-r-title">Fullname</h3>
                        <input placeholder="James Doe" className="first-input" type="text"/>
                    </div>
                    <div className='input-divs'>
                        <h3 className="contact-r-title">Email</h3>
                        <input placeholder="jamesdoe@gmail.com" className="first-input" type="email"/>
                    </div>
                    <div className='input-divs'>
                        <h3 className="contact-r-title">Message</h3>
                        <textarea className="textarea-in" placeholder="Type your message" name="" id="" cols="30"
                                  rows="10"/>
                    </div>
                </div>
            </div>
            <div className="input-main">
                <input className="main-input" type="search" placeholder="Search query..."/>
                <button className="main-button" type="submit">Search</button>
            </div>
            <Footer/>
        </>
    )
}