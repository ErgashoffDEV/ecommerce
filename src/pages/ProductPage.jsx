import React from "react";
import TopNavbar from "../components/TopNavbar";
import BottomNavbar from "../components/BottomNavbar";
import Footer from "../components/Footer";
import rednike from '../images/red-nikebig.png'
import pd1 from '../images/pd1.png'
import pd2 from '../images/pd2.png'
import pd3 from '../images/pd3.png'
import face from '../images/face-whi.png'
import tweet from '../images/twit-whi.png'
import pd4 from '../images/pd4.png'
import airmax from '../images/air-max.png'
import card from '../images/cart-line.png'
import heart from '../images/heart.png'
import baggold from '../images/baggold.png'
import bagred from '../images/bagred.png'
import oddnike from '../images/oddnike.png'

export default function ProductPage() {
    return (
        <>
            <TopNavbar/>
            <BottomNavbar/>
            <div className="page">
                <h4 className='page-title'>Home / Hot Deal / <span>Product Name</span></h4>
            </div>
            <div className="p-d-section">
                <div>
                    <img className="p-d-image" src={rednike} alt=""/>
                    <div className='p-d-images'>
                        <img className="p-d-img" src={pd1} alt=""/>
                        <img className='p-d-img' src={pd2} alt=""/>
                        <img className="p-d-img" src={pd3} alt=""/>
                        <img className='p-d-im' src={pd4} alt=""/>
                    </div>
                </div>
                <div className='p-d-names'>
                    <h3 className="p-d-name">Nike Airmax 270 React</h3>
                    <div id='p-d-flex' className="p-d-flex">
                        <h3 className="p-d-stars">★ ★ ★ ★ ★</h3>
                        <h3 className="p-d-review">0 reviews</h3>
                        <h4 className="p-d-sub-review">Submit a review</h4>
                    </div>
                    <hr className="p-d-hr"/>
                    <div id='p-d-flex' className="p-d-flex">
                        <h3 className="p-d-price">$299,43</h3>
                        <h3 className="p-d-old">$534,33</h3>
                        <span className="p-d-pink">24% Off</span>
                    </div>
                    <div className="p-d-flexs">
                        <h3 className="p-d-desc">Availability:</h3>
                        <h3 className="p-d-descs">In stock</h3>
                    </div>
                    <div className="p-d-flexs">
                        <h3 className="p-d-desc">Category:</h3>
                        <h3 className="p-d-descs">Accessories</h3>
                    </div>
                    <h3 id='p-d-desc' className="p-d-descs">Free shipping</h3>
                    <hr className="p-d-hr-second"/>
                    <div className='p-d-flexs'>
                        <h3 className="p-d-color">Select Color:</h3>
                        <div className="el-1"></div>
                        <div className='el-2'></div>
                        <div className='el-3'></div>
                        <div className="el-4"></div>
                    </div>
                    <div className="p-d-flexs">
                        <h3 className='p-d-size'>Size: </h3>
                        <h3 className='p-d-size'>XS</h3>
                    </div>
                    <hr className="p-d-hr-second"/>
                    <div className="p-d-flexs">
                        <div className="plus-minuss">
                            <button type="button" className="minus-btns">-</button>
                            <h3 className="p-m-titles">2</h3>
                            <button className="plus-btns">+</button>
                        </div>
                        <div className='cart-div'>
                            <img src={card} alt=""/>
                            <h3 className="cart-div-title">Add to cart</h3>
                        </div>
                        <div className='heart-div'>
                            <img src={heart} alt=""/>
                        </div>
                    </div>
                    <hr className='p-d-hr-second'/>
                    <div>
                        <button className='face-btn'>
                            <img className='face-img' src={face} alt=""/>
                            Share on Facebook
                        </button>
                    </div>
                    <div>
                        <button className='twit-btn'>
                            <img className='face-img' src={tweet} alt=""/>
                            Share on Twitter
                        </button>
                    </div>
                </div>
                <div className='bestseller-page'>
                    <h3 className='best-title'>BEST SELLER</h3>
                    <div className='p-d-card'>
                        <img src={airmax} alt=""/>
                        <h3 className='p-d-star'>★ ★ ★ ★ ★</h3>
                        <div className='p-d-flexs-p'>
                            <h3 className='p-d-end-t'>$499</h3>
                            <h3 className='p-d-end-p'>$599</h3>
                        </div>
                    </div>
                </div>
                <div className='rev-div'>
                    <div className='rev-titles'>
                        <h3 className='rev-title'>Product Information</h3>
                        <h3 className='rev-text'>Reviews</h3>
                        <h3 className='rev-texts'>Another tab</h3>
                    </div>
                    <hr className='rev-hr'/>
                    <p className='rev-p'>air max are always very comfortable fit, clean and just perfect in every way.
                        just the box was
                        too small and scrunched the sneakers up a little bit, not sure if the box was always this small
                        but the 90s are and will always be one of my favorites.
                    </p>
                    <p className='rev-p'>air max are always very comfortable fit, clean and just perfect in every way.
                        just the box was
                        too small and scrunched the sneakers up a little bit, not sure if the box was always this small
                        but the 90s are and will always be one of my favorites.
                    </p>
                    <p className='rev-p'>air max are always very comfortable fit, clean and just perfect in every way.
                        just the box was
                        too small and scrunched the sneakers up a little bit, not sure if the box was always this small
                        but the 90s are and will always be one of my favorites.
                    </p>
                </div>
            </div>
            <h3 className='related-name'>RELATED PRODUCTS</h3>
            <div className='products'>
                <div className='product'>
                    <div>
                        <div className='product-img'>
                            <img className="product-image" src={airmax} alt=""/>
                        </div>
                        <div>
                            <h3 className="product-name">Nike Air Max 270 React</h3>
                            <h3 className="stars">★ ★ ★ ★ ★</h3>
                        </div>
                        <div className="bottom-pro">
                            <h3 className="bottom-title">$299,43</h3>
                            <h3 className="bottom-text">$534,33</h3>
                            <h3 className="bottom-disc">24% Off</h3>
                        </div>
                    </div>
                </div>
                <div className='product'>
                    <div>
                        <div className='product-img'>
                            <img className="product-image" src={bagred} alt=""/>
                        </div>
                        <div>
                            <h3 className="product-name">Nike Air Max 270 React</h3>
                            <h3 className="stars">★ ★ ★ ★ ★</h3>
                        </div>
                        <div className="bottom-pro">
                            <h3 className="bottom-title">$299,43</h3>
                            <h3 className="bottom-text">$534,33</h3>
                            <h3 className="bottom-disc">24% Off</h3>
                        </div>
                    </div>
                </div>
                <div className='product'>
                    <div>
                        <div className='product-img'>
                            <img className="product-image" src={baggold} alt=""/>
                        </div>
                        <div>
                            <h3 className="product-name">Nike Air Max 270 React</h3>
                            <h3 className="stars">★ ★ ★ ★ ★</h3>
                        </div>
                        <div className="bottom-pro">
                            <h3 className="bottom-title">$299,43</h3>
                            <h3 className="bottom-text">$534,33</h3>
                            <h3 className="bottom-disc">24% Off</h3>
                        </div>
                    </div>
                </div>
                <div className='product'>
                    <div>
                        <div className='product-img'>
                            <img className="product-image" src={oddnike} alt=""/>
                        </div>
                        <div>
                            <h3 className="product-name">Nike Air Max 270 React</h3>
                            <h3 className="stars">★ ★ ★ ★ ★</h3>
                        </div>
                        <div className="bottom-pro">
                            <h3 className="bottom-title">$299,43</h3>
                            <h3 className="bottom-text">$534,33</h3>
                            <h3 className="bottom-disc">24% Off</h3>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}