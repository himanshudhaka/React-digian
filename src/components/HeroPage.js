import React from 'react'
import sliderImg from '../Images/slider-img.png'

export default function HeroPage() {
    return (
        <div className="container hero-page">
            <div className="row">
                <div className="col-sm">
                    <img src={sliderImg} alt="not found" />
                </div>
                <div className="col-sm flex flex-column">
                    <h1>Digital Market Experts</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti perspiciatis totam ex nam
                        reiciendis pariatur blanditiis officia! </p>
                    <button className="btn btn-outline-success" type="submit">Contact Us</button>
                </div>
            </div>
        </div>
    )
}
