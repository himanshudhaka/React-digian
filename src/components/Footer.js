import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="container">
            <div className="row">
                <div className="col-sm">
                    <h2>Digian</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo reiciendis debitis quidem minima porro,
                        fuga fugiat.</p>
                </div>
                <div className="col-sm">
                    <h2>Links</h2>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center">
                        <li className="nav-item">
                            <NavLink exact to="/" className="nav-link active" aria-current="page">HOME</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/about" className="nav-link" aria-current="page">ABOUT US</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/services" className="nav-link" aria-current="page">SERVICES</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/contact" className="nav-link" aria-current="page">CONTACT US</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="col-sm">
                    <h2>Subscribe</h2>
                    <form>
                        <div className="form-group">
                            <input type="email" className="form-control" id="exampleFormControlInput1"
                                placeholder="Enter Email" />
                            <button type="button" className="btn btn-primary og-btn">Primary</button>
                        </div>
                    </form>
                </div>
                <div className="col-sm">
                    <h2>Address</h2>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center">
                        <li className="nav-item"><i className="fas fa-map-marker-alt"></i> Location</li>
                        <li className="nav-item"><i className="fas fa-phone-alt"></i> Call +91 123456789</li>
                        <li className="nav-item"><i className="fas fa-envelope"></i> Mail</li>
                    </ul>
                    <ul className="nav flex social-icon">
                        <li className="nav-item"><i className="fab fa-facebook-square"></i></li>
                        <li className="nav-item"><i className="fab fa-twitter"></i></li>
                        <li className="nav-item"><i className="fab fa-linkedin"></i></li>
                        <li className="nav-item"><i className="fab fa-instagram"></i></li>
                    </ul>
                </div>
                <p className="para">&#169; All Rights Reserved By Free HTMl Templates.</p>
            </div>
        </footer>
    )
}
