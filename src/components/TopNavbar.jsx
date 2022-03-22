import React from "react";

export default function TopNavbar() {
    return (
        <>
            <div className="navbar">
                <div className="navbar-left">
                    <div className="drop">
                        <h2 className='drop-title'>EN <span><ion-icon name="caret-down-outline"></ion-icon></span></h2>
                    </div>
                    <div className="drop">
                        <h2 className='drop-title'>USD <span><ion-icon name="caret-down-outline"></ion-icon></span></h2>
                    </div>
                </div>
                <div className='navbar-right'>
                    <div className="profile">
                        <h3 className="profile-title"><span><ion-icon name="person-outline"></ion-icon></span> My Profile</h3>
                    </div>
                    <span className="cart-icon"><ion-icon className="cart-icon" name="cart-outline"></ion-icon></span>
                    <h3 className="item-title">Items</h3>
                    <h3 className="all-usd">$0.00</h3>
                    <span className="cart-icon"><ion-icon name="search-outline"></ion-icon></span>
                </div>
            </div>
            <hr className='top-hr'/>
        </>
    )
}