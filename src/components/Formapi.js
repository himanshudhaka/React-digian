import React, { useState } from 'react'
import axios from 'axios';

export default function Formapi() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    // const [id, setId] = useState("");
    const [phn, setPhn] = useState("");
    const [stateR, setStateR] = useState("");

    function set(e) {
        e.preventDefault();


        console.log(name, email, phn, stateR);

        axios.post("http://198.12.248.18:8080/api/v1/student/",{
                            blocked: true,
                            email: email,
                            mobileNumber: phn,
                            name: name,
                            stateOfResidence: stateR,
                            studentImage: ""
                })
        .then(res => {
          console.log(res.status);
          console.log(res.data);
        }).catch((error) => {
            if( error.response ){
                console.log(error.response.data);
                console.log() // => the response payload 
            }
        });

        // axios.post('http://198.12.248.18:8080/api/v1/student', null, {headers:headers, params:data})



        
    }

    return (
        <form  className="col-sm-6 offset-sm-3" onSubmit={(e) => set(e)}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} className="form-control" id="name" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} className="form-control" id="email" />
            </div>
            {/* <div className="mb-3">
                <label htmlFor="id" className="form-label">Roll No</label>
                <input type="text" value={id} onChange={(e) => { setId(e.target.value) }} className="form-control" id="id" aria-describedby="emailHelp" />
            </div> */}
            <div className="mb-3">
                <label htmlFor="Phone Number" className="form-label">Phone Number</label>
                <input type="text" value={phn} onChange={(e) => { setPhn(e.target.value) }} className="form-control" id="Phone Number" />
            </div>
            <div className="mb-3">
                <label htmlFor="State" className="form-label">State</label>
                <input type="text" value={stateR} onChange={(e) => { setStateR(e.target.value) }} className="form-control" id="State" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}
