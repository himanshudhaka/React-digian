import React from 'react'
import aboutImg from '../Images/about-img.png'

export default function About() {
    return (
        <div className="container about-us">
            <div className="row">
                <div className="col-sm flex">
                    <h2>ABOUT US</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga molestiae mollitia beatae
                        aspernatur numquam dolore magnam debitis repudiandae nemo? Sunt ratione dicta quibusdam velit
                        iure ab non fuga fugiat recusandae!</p>
                    {/* <a href="#" className="btn btn-outline-success">Read More</a> */}
                </div>
                <div className="col-sm">
                    <img src={ aboutImg } alt="not found" />
                </div>
            </div>
        </div>
    )
}
