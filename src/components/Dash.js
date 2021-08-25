import React from 'react'
import Cookies from 'js-cookie'

export default function Dash() {

    function submit(e){

        e.preventDefault();
        Cookies.remove('col',{ path: '/' })
        Cookies.remove("status",{ path: '/'})
        Cookies.remove("phn",{ path: '/'})
        window.location.pathname = "/";
        Cookies.set("col2","false")
        console.log("hello2")
        
    }



    return (
        <>
        <form onSubmit={ e => { submit(e) }} className="col-sm-3 offset-sm-3">
         <h1>DashBoard</h1>   
         <button type="submit" className="btn btn-primary">Log out</button>
         </form>
         {/* <button type="submit" >Log Out</button> */}
        </>
    )
}
