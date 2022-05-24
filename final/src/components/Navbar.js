import { Link } from 'react-router-dom'
import React from 'react'

const Navbar =()=> {
    return (
        <nav>
        <Link to='home'>Home</Link> | {''}
        <Link to='product'>Keychains</Link> | {''}
        <Link to='about'>About us</Link> | {''}
        <Link to='sign'>Sign in</Link>
        </nav>
    )
}

export default Navbar