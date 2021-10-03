import React from 'react'
import { NavLink } from 'react-router-dom'

const link = {
    width: '100px',
    padding: '12px',
    margin: '0px 6px 6px',
    background: 'black',
    color: 'white',
    textDecoration: 'none'
}

const Navbar = () => {
    return (
        <div>
            <NavLink
            to='/'
            exact
            style={link}
            activeStyle={{
                background: 'darkblue'
            }}
            >Home</NavLink>
        </div>
    )
}

export default Navbar