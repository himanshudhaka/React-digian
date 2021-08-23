import React from 'react'
import case1 from '../Images/case-1.jpg'
import case2 from '../Images/case-2.jpg'

export default function CaseStudy() {
    return (
        <div className="container case-study">
            <div className="row">
                <h1>Our Case Studies</h1>
                <div className="col-sm">
                    <div className="card card1">
                        <img src={ case1 } alt="not found" className="card-img-top" />
                        <div className="card-body flex flex-column">
                            <h5 className="card-title">Sit ammet consectur adsjoining.</h5>
                            <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. ipsum dolor
                                sit amet consectetur adipisicing elit.</p>
                            {/* <a href="#" className="primary">Read More</a> */}
                        </div>
                    </div>
                </div>
                <div className="col-sm">
                    <div className="card card2">
                        <img src={ case2 } alt="not found" className="card-img-top" />
                        <div className="card-body flex flex-column">
                            <h5 className="card-title">Cerium elit cvinmmer dior</h5>
                            <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. ipsum dolor
                                sit amet consectetur adipisicing elit.</p>
                            {/* <a href="#" className="primary">Read More</a> */}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
