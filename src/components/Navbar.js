import React from 'react'
import { Link, NavLink } from "react-router-dom"

const Navbar = (props) => {
    return (
        <nav className="nav-wrapper teal lighten-2">
            <div className="container">
                <Link to="/" className="brand-logo">Basic web</Link>
                <ul className="right hide-on-med-and-down">
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to="/about">About</NavLink></li>
                </ul>

            </div>
        </nav>
    )
}

export default Navbar
