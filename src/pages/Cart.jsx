import React from "react";
import TopNavbar from "../components/TopNavbar";
import BottomNavbar from "../components/BottomNavbar";
import Footer from "../components/Footer";
import del from "../images/delete.png"
import redNike from '../images/red-nike.png'
import grayNike from '../images/grey-nike.png'
import paylogo from '../images/paylogo.png'
import crecard from '../images/cre-card.png'
import bank from '../images/bank.png'
import back from '../images/back.png'
import closes from '../images/close.png'
import visa from '../images/card.png'
import success from '../images/success.png'

export default function Cart() {
    return (
        <>
            <TopNavbar/>
            <BottomNavbar/>
            <div className="page">
                <h4 className='page-title'>Home / Hot Deal / <span>Product Name</span></h4>
            </div>
            <div>
                <div className="table-pro">
                    <h2 className="pro-title">PRODUCT</h2>
                    <h2 className="odd-title">PRICE</h2>
                    <h2 className="odd-title">QTY</h2>
                    <h2 className="odd-title">UNIT PRICE</h2>
                </div>
                <div className="bg-modal" id="popup3">
                    <div className="popup">
                        <a href="#popup2">
                            <img className="back-img" src={back} alt=""/>
                        </a>
                        <a href="#">
                            <img className="close-img" src={closes} alt=""/>
                        </a>
                        <h3 className='pay-title'>Make Payment</h3>
                        <div className="pay-divs">
                            <div className="first-pay">1</div>
                            <div className="first-pay">2</div>
                            <div className="first-pay">3</div>
                        </div>
                        <div>
                            <div className="flexing">
                                <img src={success} alt=""/>
                            </div>
                            <h4 className="suc-title">Success</h4>
                        </div>
                        <div className="flexing">
                            <a href="#">
                                <button type="submit" className='pay-btn'>Complete</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="bg-modal" id="popup2">
                    <div className="popup">
                        <a href="#popup">
                            <img className="back-img" src={back} alt=""/>
                        </a>
                        <a href="#">
                            <img className="close-img" src={closes} alt=""/>
                        </a>
                        <h3 className='pay-title'>Make Payment</h3>
                        <div className="pay-divs">
                            <div className="first-pay">1</div>
                            <div className="seacond-pay">2</div>
                            <div className="seacond-pay">3</div>
                        </div>
                        <div className="pay-big">
                            <div>
                                <img className="img-date" src={visa} alt=""/>
                            </div>
                            <div className="control-in">
                                <input placeholder="Card Number" className="cont-card" type="number"/>
                                <div className="pay-t-inputs">
                                    <input className="exp-date" placeholder="Expiry" type="number"/>
                                    <input className="exp-date" placeholder="CVV" type="number"/>
                                </div>
                                <input className="cont-card" placeholder="Holder Number" type="text"/>
                            </div>
                        </div>
                        <div className="flexing">
                            <a href="#popup3">
                                <button type="submit" className='pay-btn'>Confirm</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="bg-modal" id="popup">
                    <div className="popup">
                        <a href="#">
                            <img className="back-img" src={back} alt=""/>
                        </a>
                        <a href="#">
                            <img className="close-img" src={closes} alt=""/>
                        </a>
                        <h3 className='pay-title'>Make Payment</h3>
                        <div className="pay-divs">
                            <div className="first-pay">1</div>
                            <div className="seacond-pay">2</div>
                            <div className="seacond-pay">3</div>
                        </div>
                        <div className="pay-big">
                            <div className="pay-inputs">
                                <div className="control-in">
                                    <input placeholder="First Name" className="pay-input" type="text"/>
                                    <input placeholder="Email Address" className="pay-input" type="email"/>
                                </div>
                                <h3 className="p-title">Select Method of Payment</h3>
                                <div className="flexing-el">
                                    <div className="flexing-in">
                                        <img src={crecard} alt=""/>
                                        <h3 className="cre-title">Credit Card Or Debit</h3>
                                    </div>
                                    <input className="check-box" type="checkbox"/>
                                </div>
                                <div className="flexing-el">
                                    <div className="flexing-in">
                                        <img src={paylogo} alt=""/>
                                        <h3 className="cre-title">Paypal</h3>
                                    </div>
                                    <input className="check-box" type="checkbox"/>
                                </div>
                                <div className="flexing-el">
                                    <div className="flexing-in">
                                        <img src={bank} alt=""/>
                                        <h3 className="cre-title">Bank Transfer</h3>
                                    </div>
                                    <input className="check-box" type="checkbox"/>
                                </div>
                            </div>
                            <div className="control-in">
                                <input placeholder="Last Name" className="pay-input" type="text"/>
                                <input placeholder="Address for Delivery" className="pay-address" type="text"/>
                                <input placeholder="Mobile Phone" className="pay-input" type="number"/>
                            </div>
                        </div>
                        <div className="flexing">
                            <a href="#popup2">
                                <button type="submit" className='pay-btn'>Go to Payment</button>
                            </a>
                        </div>
                    </div>
                </div>
                <hr className="cart-lines"/>
                <div className="cart-products">
                    <div className="cart-product">
                        <div className="fir">
                            <img className="delete-img" src={del} alt=""/>
                            <img className="pro-img" src={redNike} alt=""/>
                            <h3 className="cart-name">Nike Airmax 270 react</h3>
                        </div>
                        <div className="bir">
                            <h4 className="cart-price">$998</h4>
                            <div className="plus-minus">
                                <button type="button" className="minus-btn">-</button>
                                <h3 className="p-m-title">2</h3>
                                <button className="plus-btn">+</button>
                            </div>
                            <h4 className="cart-unit-price">$499</h4>
                        </div>
                    </div>
                    <hr className="cart-line"/>
                    <div className="cart-product">
                        <div className="fir">
                            <img className="delete-img" src={del} alt=""/>
                            <img className="pro-img" src={grayNike} alt=""/>
                            <h3 className="cart-name">Nike Airmax 270 react</h3>
                        </div>
                        <div className="bir">
                            <h4 className="cart-price">$998</h4>
                            <div className="plus-minus">
                                <button type="button" className="minus-btn">-</button>
                                <h3 className="p-m-title">2</h3>
                                <button className="plus-btn">+</button>
                            </div>
                            <h4 className="cart-unit-price">$499</h4>
                        </div>
                    </div>
                    <hr className="cart-line"/>
                </div>
                <div className="cart-end">
                    <div className='redeem'>
                        <input placeholder="Voucher code" className='search-redeem' type="search"/>
                        <button type="submit" className="redeem-btn">Redeem</button>
                    </div>
                    <div>
                        <div className="flex-end">
                            <h2 className="cart-end-title">Subtotal</h2>
                            <h2 className="cart-end-price">$998</h2>
                        </div>
                        <div className="flex-end">
                            <h3 className="cart-end-title">Shipping fee</h3>
                            <h3 className="cart-end-price">$20</h3>
                        </div>
                        <div className="flex-end">
                            <h2 className="cart-end-title">Coupon</h2>
                            <h3 className="cart-end-price">No</h3>
                        </div>
                        <hr/>
                        <div className="flex-end">
                            <h3 className="t-title">TOTAL</h3>
                            <h4 className="t-price">$118</h4>
                        </div>
                        <a href="#popup">
                            <button className="check-btn">Check out</button>
                        </a>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}