import React from "react";
import TopNavbar from "../components/TopNavbar";
import BottomNavbar from "../components/BottomNavbar";
import Footer from "../components/Footer";
import sneakers from "../images/sneakers.png";
import shoemid from '../images/shoe-mid.png'
import span from '../images/span.png'
import dot from '../images/dot.png'
import Products from "../components/Products";

export default function ProductList() {
    return (
        <>
            <TopNavbar/>
            <BottomNavbar/>
            <div className="page">
                <h4 className='page-title'>Home / <span>Hot Deal</span></h4>
            </div>
            <div className='hot-section'>
                <div className='hot-left'>
                    <div className='hot-hot'>
                        <h3 className='hot-hot-title'>Hot Deals</h3>
                        <div className='hot-hot-flex'>
                            <div>
                                <h3 className='hot-h-title'>Nike</h3>
                                <h3 className='hot-h-title'>Airmax</h3>
                                <h3 className='hot-h-title'>Nike</h3>
                                <h3 className='hot-h-title'>Adidas</h3>
                                <h3 className='hot-h-title'>Vans</h3>
                                <h3 className='hot-h-title'>All stars</h3>
                                <h3 className='hot-h-title'>Adidas</h3>
                            </div>
                            <div>
                                <h3 className='hot-h-text'>2</h3>
                                <h3 className='hot-h-text'>48</h3>
                                <h3 className='hot-h-text'>14</h3>
                                <h3 className='hot-h-text'>15</h3>
                                <h3 className='hot-h-text'>23</h3>
                                <h3 className='hot-h-text'>1</h3>
                                <h3 className='hot-h-text'>95</h3>
                            </div>
                        </div>
                    </div>
                    <div className='hot-price'>
                        <h3 className='hot-p-title'>PRICES</h3>
                        <div className='hot-hot-flex'>
                            <h3 className='hot-p-text'>Ranger: </h3>
                            <h4 className='hot-p-price'>$13.99 - $25.99</h4>
                        </div>
                        <input className='range' type="range"/>
                    </div>
                    <div className='hot-color'>
                        <h3 className='hot-c-title'>Color</h3>
                        <div className='hot-c-flex'>
                            <div className='el-1'></div>
                            <div className='el-2'></div>
                            <div className='el-3'></div>
                            <div className='el-4'></div>
                            <div className='el-5'></div>
                            <div className='el-6'></div>
                        </div>
                    </div>
                    <div className='hot-brand'>
                        <h3 className='hot-hot-title'>Brand</h3>
                        <div className='hot-hot-flex'>
                            <div>
                                <h3 className='hot-h-title'>Nike</h3>
                                <h3 className='hot-h-title'>Nike</h3>
                                <h3 className='hot-h-title'>Adidas</h3>
                                <h3 className='hot-h-title'>Siemens</h3>
                            </div>
                            <div>
                                <h3 className='hot-h-text'>99</h3>
                                <h3 className='hot-h-text'>99</h3>
                                <h3 className='hot-h-text'>99</h3>
                                <h3 className='hot-h-text'>99</h3>
                            </div>
                        </div>
                    </div>
                    <button className='hot-btn'>More</button>
                </div>
                <div className='hot-right'>
                    <div className="info-hot">
                        <div className="info-hot-left">
                            <h3 className="info-hot-title">Adidas Men Running
                                Sneakers
                            </h3>
                            <h3 className="info-hot-text">Performance and design. Taken right to the edge.</h3>
                            <h4 className="info-hot-shop">SHOP NOW</h4>
                            <p className="info-hot-line"/>
                        </div>
                        <div>
                            <img className="info-hot-image" src={shoemid} alt=""/>
                        </div>
                    </div>
                    <div className='sort'>
                        <div className='sort-left'>
                            <h3 className='sort-items'>13 Items</h3>
                            <h3 className='sort-by'>Sort By</h3>
                            <h3 className='sort-name'>Name <span><ion-icon name='caret-down-outline'></ion-icon></span>
                            </h3>
                            <h3 className='sort-show'>Show</h3>
                            <h3 className='sort-num'>12 <span><ion-icon name='caret-down-outline'></ion-icon></span>
                            </h3>
                        </div>
                        <div className='sort-right'>
                            <img className='sort-img' src={dot} alt=""/>
                            <img className='sort-img2' src={span} alt=""/>
                        </div>
                    </div>
                    <div className='hot-products'>
                        <Products/>
                    </div>
                    <div className='num-sort'>
                        <h3 className='first-num'>1</h3>
                        <h3 className='first-num'>2</h3>
                        <h3 className='first-num'>3</h3>
                        <h3 className='first-num'>4</h3>
                        <h3 className='first-num'>5</h3>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}