import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const Header =()=> {
    return (
        <div className="main">
        <h1 className="main-header">Keychains is Life</h1>
        <div className="main-nav">
            <Navbar />
        </div>
        <Outlet />
        </div>
    )
}

export default Header