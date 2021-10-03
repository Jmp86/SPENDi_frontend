import React from 'react'
import { Link } from 'react-router-dom'

const LoginButton = () => {
    return (
        <div>
            <Link to={'/login'}>
                <button className="button">Login</button>
            </Link>
        </div>
    )
}

export default LoginButton