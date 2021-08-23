import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light container">
            <div className="container-fluid">
                <NavLink exact to="/" className="navbar-brand">DIGIAN</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center">
                        <li className="nav-item">
                            <NavLink exact to="/" className="nav-link active">HOME</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/about" className="nav-link">ABOUT US</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/services" className="nav-link">SERVICES</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/contact" className="nav-link">CONTACT US</NavLink>
                        </li>
                    </ul>
                    <form className="d-flex">
                    <button className="btn btn-outline-success og-btn" type="submit">GET A QUOTE</button>
                </form>
                </div>
            </div>
        </nav>
    )
}
