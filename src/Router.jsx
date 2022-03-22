import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import ProductPage from "./pages/ProductPage";
import ProductList from "./pages/ProductList";
import Login from "./pages/Login";
import Register from "./pages/Register";


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} exact/>
                <Route path='/contact-us' element={<Contact/>} exact/>
                <Route path='/cart' element={<Cart/>} exact/>
                <Route path='/product-detail' element={<ProductPage/>} exact/>
                <Route path='/product-list' element={<ProductList/>} exact/>
                <Route path='/login' element={<Login/>} exact />
                <Route path='/register' element={<Register/>} exact />
            </Routes>
        </BrowserRouter>
    )
}