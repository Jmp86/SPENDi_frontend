import React from 'react'
import { NavLink } from 'react-router-dom'


const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    textDecoration: 'none',
    color: 'white',
    background: "black"
}

const Navigation = (props) => {
    let id = props.user_id
    return (
        
        <div>
            <NavLink 
                to={'/user/'+id}
                exact
                style={link}
                activeStyle={{
                    background: 'darkblue'
                }}
                >My Budget</NavLink>
            <NavLink
                to="/"
                exact
                style={link}
                activeStyle={{
                    background: 'darkblue'
                }}
                >Log Out</NavLink>
        </div>
    )
}

export default Navigation