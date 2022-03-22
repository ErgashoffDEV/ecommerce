import React, {useState} from "react";
import logo from '../images/logo.png'
import dot from '../images/span.png'

export default function BottomNavbar() {
    const [isMobile, setIsMobile] = useState(false)
    return (
        <>
            <header>
                <img className="logo" src={logo} alt=""/>
                <div onClick={() => setIsMobile(!isMobile)} className="btn-hamburger" id="burger">
                    <img src={dot} alt=""/>
                </div>
                <ul className={isMobile ? 'headers' : 'header'} id="ul">
                    <li>HOME</li>
                    <li>BAG</li>
                    <li>SNEAKERS</li>
                    <li>BELT</li>
                    <li>CONTACT</li>
                </ul>
            </header>
        </>
    )
}