import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Contactus from '../pages/Contactus'
import Navbar from '../components/Navbar'

const Router = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/contact-us' element={<Contactus />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router

