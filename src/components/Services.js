import React from 'react'
import s1 from '../Images/s1.png'
import s2 from '../Images/s2.png'
import s3 from '../Images/s3.png'
import s4 from '../Images/s4.png'


export default function Services() {
    return (
        <>
            <div className="container services">
                <div className="container">
                    <div className="row">
                        <div className="col-12 flex flex-column">
                            <h1>Our Services</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="col">
                            <div className="row">
                                <div className="col-sm-3">
                                    <div className="card">
                                        <img src={s1} className="card-img-top" alt="not found" />
                                        <div className="card-body flex flex-column">
                                            <h5 className="card-title">Link Building</h5>
                                            <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                                            {/* <a href="#" className="primary">Read More</a> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="card">
                                        <img src={s2} className="card-img-top" alt="not found" />
                                        <div className="card-body flex flex-column">
                                            <h5 className="card-title">On Page SEO</h5>
                                            <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                                            {/* <a href="#" className="primary">Read More</a> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="card">
                                        <img src={s3} className="card-img-top" alt="not found" />
                                        <div className="card-body flex flex-column">
                                            <h5 className="card-title">Online Marketing</h5>
                                            <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                                            {/* <a href="#" className="primary">Read More</a> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="card">
                                        <img src={s4} className="card-img-top" alt="not found" />
                                        <div className="card-body flex flex-column">
                                            <h5 className="card-title">Email Marketing</h5>
                                            <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                                            {/* <a href="#" className="primary">Read More</a> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 flex flex-column">
                            <button className="btn btn-outline-success" type="submit">View More</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
