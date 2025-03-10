import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <h1>Navbar</h1>
            <Link to="/">Home</Link>
            <Link to="/contactus">ContactUs</Link>
            <Link to="/myservices">Myservices</Link>
        </>
    )
}

export default Navbar
