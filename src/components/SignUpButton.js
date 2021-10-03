import React from 'react'
import { Link } from 'react-router-dom'

const SignUpButton = () => {
    return (
        <div>
            <Link to={'/signup'}>
                <button className="button">Sign Up Here!</button>
            </Link>
        </div>
    )
}

export default SignUpButton