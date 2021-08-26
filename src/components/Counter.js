import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Counter() {
    return (
        <div>
            <NavLink exact to="/" className="navbar-brand">Counter</NavLink>
            <NavLink exact to="/view" className="navbar-brand">Counter2</NavLink>
        </div>
    )
}
