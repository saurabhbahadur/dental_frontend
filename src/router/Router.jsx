import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Contactus from '../pages/Contactus'
import Navbar from '../components/Navbar'
import Whyus from '../pages/Whyus'
import Procedure from '../pages/Procedure'

const Router = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/contact-us' element={<Contactus />} />
                <Route path='/why-us' element={<Whyus />} />
                <Route path='/procedure' element={<Procedure />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router

