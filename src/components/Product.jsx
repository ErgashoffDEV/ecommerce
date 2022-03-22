import React from "react";

export default function Product({title, image, key, price, discount, discountPercent}) {
    return (
        <div>
            <div className='product-img'>
                <img className="product-image" src={image} alt=""/>
            </div>
            <div>
                <h3 className="product-name">{title}</h3>
                <h3 className="stars">★ ★ ★ ★ ★</h3>
            </div>
            <div className="bottom-pro">
                <h3 className="bottom-title">{price}</h3>
                <h3 className="bottom-text">{discount}</h3>
                <h3 className="bottom-disc">{discountPercent}</h3>
            </div>
        </div>
    )
}