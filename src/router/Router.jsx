import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Navbar from '../components/navbar'
import MyServices from '../pages/MyServices'
import ContactUs from '../pages/ContactUs'

const Router = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/myservices' element={<MyServices />} />
                <Route path='/contactus' element={<ContactUs />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
