import React from 'react'
import LoginButton from './LoginButton'
import SignUpButton from './SignUpButton'
const Home = () => {
    return (
        <div className="home" style={{ backgroundImage: `url(https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1172935567%2F0x0.jpg%3Ffit%3Dscale)`}}
            >
            <h1>$PENDi</h1>
            <LoginButton/>
            <SignUpButton/>
        </div>
    )
}
export default Home