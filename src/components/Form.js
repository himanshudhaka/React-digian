import React from 'react'

export default function Form() {
    return (
        <div className="container form-map">
            <div className="row">
                <div className="col-sm">
                    <h2>Request a Callback</h2>
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control" id="exampleFormControlInput1"
                                placeholder="Full Name" />
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" id="exampleFormControlInput1"
                                placeholder="Phone Number" />
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                                placeholder="Message"></textarea>
                        </div>
                        <div className="form-group bn">
                            <button type="button" className="btn btn-primary">SEND</button>
                        </div>
                    </form>
                </div>
                <div className="col-sm">
                    <h2>Map</h2>
                </div>
            </div>
        </div>
    )
}
