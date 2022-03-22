import React, {useState} from "react";
import Product from "./Product";

export default function Products() {
    const [products, setProducts] = useState([{
        id: 1,
        image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9244e1e5-8975-4438-b716-f3c9628c0921/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-air-max-270-essential-4RF1hd.png',
        title: 'Nike Air Max 270 React',
        price: '$299,43',
        discount: '$534,33',
        discountPercent: '24% Off'
    }, {
        id: 2,
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/78c8078d-6cc6-4904-9377-ca3ffb7fcfc0/%D1%84%D1%83%D1%82%D0%B1%D0%BE%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F-%D1%81%D1%83%D0%BC%D0%BA%D0%B0-%D0%B4%D0%B0%D1%84%D0%BB-%D1%81-%D0%B6%D0%B5%D1%81%D1%82%D0%BA%D0%B8%D0%BC-%D0%B4%D0%BD%D0%BE%D0%BC-academy-team-%D1%81%D1%80%D0%B5%D0%B4%D0%BD%D0%B8%D0%B9-%D1%80%D0%B0%D0%B7%D0%BC%D0%B5%D1%80-37-%D0%BB-1V2q2q.png',
        title: 'Nike Air Max 270 React',
        price: '$299,43',
        discount: '$534,33',
        discountPercent: '24% Off'
    }, {
        id: 3,
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f20446c2-417d-4b8b-884e-6e4c389ec27a/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D1%82%D1%80%D0%B5%D0%BD%D0%B8%D0%BD%D0%B3%D0%B0-metcon-7-VZcBz4.png',
        title: 'Nike Air Max 270 React',
        price: '$299,43',
        discount: '$534,33',
        discountPercent: '24% Off'
    }, {
        id: 4,
        image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/njyetqigdbjwfgul5ssx/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-air-max-270-nnTrqDGR.png',
        title: 'Nike Air Max 270 React',
        price: '$299,43',
        discount: '$534,33',
        discountPercent: '24% Off'
    }, {
        id: 5,
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4d0bb813-9e8c-4985-a096-3796e21546eb/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-air-vapormax-2021-fk-DgPVmr.png',
        title: 'Nike Air Max 270 React',
        price: '$299,43',
        discount: '$534,33',
        discountPercent: '24% Off'
    }, {
        id: 6,
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0a45ec56-3359-4999-8fe6-3b5198d8e80c/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-acg-mountain-fly-low-gore-tex-se.png',
        title: 'Nike Air Max 270 React',
        price: '$299,43',
        discount: '$534,33',
        discountPercent: '24% Off'
    }, {
        id: 7,
        image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/e0d1de1c-9be2-45ba-badf-f51e1df33f17/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B2%D0%B8%D0%B8%D1%82-air-zoom-superrep-3-WWc7rC.png',
        title: 'Nike Air Max 270 React',
        price: '$299,43',
        discount: '$534,33',
        discountPercent: '24% Off'
    }, {
        id: 8,
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/41aaa7ae-21f8-46a2-a7b8-6f6e70d15ff2/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-air-jordan-1-hi-flyease-9mn2QK.png',
        title: 'Nike Air Max 270 React',
        price: '$299,43',
        discount: '$534,33',
        discountPercent: '24% Off'
    }])

    return (
        <>
            {products.map(product => (
                <div className="product">
                    <Product
                    key={product.id}
                    title={product.title}
                    image={product.image}
                    price={product.price}
                    discount={product.discount}
                    discountPercent={product.discountPercent}
                    />
                </div>
            ))}
        </>
    )
}