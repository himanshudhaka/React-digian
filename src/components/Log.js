import React,{ useState } from 'react'
import axios from 'axios';
import Cookies from 'js-cookie'
// import { Redirect } from 'react-router-dom';
// import React from 'react'
// import { NavLink } from 'react-router-dom'

export default function Log({setAuth}) {

    const [phn , setPhn] = useState("");

    function submit(e){
        e.preventDefault();
       
           
            axios.get(`http://198.12.248.18:8080/api/v1/student/bymobile/${phn}`).then(res =>{
                if(res.status === 200){
                    
                    // let state = res.status;
                    if(res.data !== null){
                    Cookies.set('status', res.status);
                    Cookies.set('phn',res.data.mobileNumber);
                    }
                    console.log(res.status);
                    
                }
            });

            

                let state = Cookies.get("status");
            console.log(state);
            if(state==200){
                Cookies.set('col', "true");
                console.log("hello");
                Cookies.remove("col2",{ path: '/' })
                window.location.pathname = "/dash";
            }


            };

    
    

    return (
        <form onSubmit={ e => { submit(e) }} className="col-sm-3 offset-sm-3">
            <div className="mb-3">
                <label htmlFor="phn" className="form-label">Mobile Number</label>
                <input type="text"  value={phn} onChange={(e) => { setPhn(e.target.value) }} className="form-control" id="phn" aria-describedby="emailHelp" />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}
