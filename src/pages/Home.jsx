import React from "react";
import TopNavbar from "../components/TopNavbar";
import BottomNavbar from "../components/BottomNavbar"
import Products from "../components/Products";
import sneakers from "../images/sneakers.png"
import ship from '../images/ship.png'
import fund from '../images/fund.png'
import support from '../images/support.png'
import nike from '../images/nikelogo.png'
import figma from '../images/figma.png'
import kronos from '../images/kronos.png'
import bluenike from '../images/blue-nike.png'
import Footer from "../components/Footer";


export default function Home() {
    return (
        <>
            <TopNavbar/>
            <BottomNavbar/>
            <div>
                <div className="center">
                    <h2 className="promotion-title">Super Flash Sale 50% Off</h2>
                </div>
                <div className="main">
                    <div className="main-first">
                        <h2 className="main-f-title">FS - QUILTED MAXI CROSS BAG</h2>
                        <h2 className="main-t-text">$534,33 <span className="main-t-span">24% Off</span></h2>
                        <h3 className="main-f-text">$299,43</h3>
                    </div>
                    <div className="main-second">
                        <div className="main-s">
                            <h2 className="main-s-title">FS - Nike Air Max 270 React...</h2>
                            <h3 className="main-s-text">$299,43</h3>
                        </div>
                        <h2 className="main-s-texts">$534,33 <span className="main-f-span">24% Off</span></h2>
                    </div>
                    <div className="main-third">
                        <div className="main-t">
                            <h2 className="main-t-title">FS - Nike Air Max 270 React...</h2>
                            <h2 className="main-t-texts">$534,33 <span className="main-t-spans">24% Off</span></h2>
                        </div>
                        <h3 className="main-t-price">$299,43</h3>
                    </div>
                </div>
                <div className="products-section">
                    <h3 className="products-title">BEST SELLER</h3>
                    <div className="filters">
                        <h3 className="filter-product">All</h3>
                        <h3 className="filter-product">Bags</h3>
                        <h3 className="filter-product">Sneakers</h3>
                        <h3 className="filter-product">Belt</h3>
                        <h3 className="filter-product">Sunglasses</h3>
                    </div>
                    <div className="products">
                        <Products/>
                    </div>
                    <div className='load'>
                        <h3 className="product-load">LOAD MORE</h3>
                        <p className="line"/>
                    </div>
                </div>
                <div className="info-section">
                    <div className="info-left">
                        <h3 className="info-title">Adidas Men Running
                            Sneakers
                        </h3>
                        <h3 className="info-text">Performance and design. Taken right to the edge.</h3>
                        <h4 className="info-shop">SHOP NOW</h4>
                        <p className="info-line"/>
                    </div>
                    <div>
                        <img className="info-image" src={sneakers} alt=""/>
                    </div>
                </div>
                <div className="extra-section">
                    <div className="extra">
                        <div className="extra-image">
                            <img src={ship} alt=""/>
                        </div>
                        <h3 className="extra-title">FREE SHIPPING</h3>
                        <h4 className="extra-text">Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.</h4>
                    </div>
                    <div className="extra">
                        <div className="extra-image">
                            <img src={fund} alt=""/>
                        </div>
                        <h3 className="extra-title">100% REFUND</h3>
                        <h4 className="extra-text">Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.</h4>
                    </div>
                    <div className="extra">
                        <div className="extra-image">
                            <img src={support} alt=""/>
                        </div>
                        <h3 className="extra-title">SUPPORT 24/7</h3>
                        <h4 className="extra-text">Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.</h4>
                    </div>
                </div>
                <div className="news-section">
                    <h4 className="news-title">LATEST NEWS</h4>
                    <div className="news">
                        <div className="new">
                            <div className="new-image">
                                <img src={nike} alt=""/>
                            </div>
                            <div>
                                <h3 className="new-title">01 Jan, 2015</h3>
                                <h3 className="new-text">Fashion Industry</h3>
                                <h4 className="new-p">Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry.</h4>
                            </div>
                        </div>
                        <div className="new">
                            <div className="new-image">
                                <img src={figma} alt=""/>
                            </div>
                            <div>
                                <h3 className="new-title">01 Jan, 2015</h3>
                                <h3 className="new-text">Best Design Tools</h3>
                                <h4 className="new-p">Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry.</h4>
                            </div>
                        </div>
                        <div className="new">
                            <div className="new-image">
                                <img src={kronos} alt=""/>
                            </div>
                            <div>
                                <h3 className="new-title">01 Jan, 2015</h3>
                                <h3 className="new-text">HR Community</h3>
                                <h4 className="new-p">Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry.</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="featured-section">
                    <h4 className="news-title">
                        FEATURED PRODUCTS
                    </h4>
                    <div className="news">
                        <div className="new">
                            <div className="featured-image">
                                <img className="feature-name" src={bluenike} alt=""/>
                            </div>
                            <div>
                                <h3 className="feature-title">Blue Swade Nike Sneakers</h3>
                                <h3 className='star'>★ ★ ★ ★ ★</h3>
                                <h3 className="feature-text">$499 <span className="feature-price">$599</span></h3>
                            </div>
                        </div>
                        <div className="new">
                            <div className="featured-image">
                                <img className="feature-name" src={bluenike} alt=""/>
                            </div>
                            <div>
                                <h3 className="feature-title">Blue Swade Nike Sneakers</h3>
                                <h3 className='star'>★ ★ ★ ★ ★</h3>
                                <h3 className="feature-text">$499 <span className="feature-price">$599</span></h3>
                            </div>
                        </div>
                        <div className="new">
                            <div className="featured-image">
                                <img className="feature-name" src={bluenike} alt=""/>
                            </div>
                            <div>
                                <h3 className="feature-title">Blue Swade Nike Sneakers</h3>
                                <h3 className='star'>★ ★ ★ ★ ★</h3>
                                <h3 className="feature-text">$499 <span className="feature-price">$599</span></h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="input-main">
                    <input className="main-input" type="search" placeholder="Search query..."/>
                    <button className="main-button" type="submit">Search</button>
                </div>
            </div>
            <Footer />
        </>
    )
}