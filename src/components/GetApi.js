import React,{useState} from 'react'
import axios from 'axios';

export default function GetApi() {


    const [phn , setPhn] = useState("");

    function submit(e){
        e.preventDefault();
        // console.log();
        axios.get(`http://198.12.248.18:8080/api/v1/student/bymobile/${phn}`).then(res =>{
            console.log(res);
            console.log(res.status);
        });
    }
    

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
