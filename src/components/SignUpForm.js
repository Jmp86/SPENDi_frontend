import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'


const SignUpForm = () => {
    const [user, setUser] = useState({
        username: "",
        password: ""
    });
    

    const history = useHistory()

    const handleChange = (e) => {
        setUser({
          ...user,
          [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        let newUser

        if(user.username !== '' && user.password !== ''){
            newUser = user
        

        fetch(`http://localhost:9292/users`, {
            method: 'POST', 
            headers: {
                'Content-type': 'application/json', 
                'Accept': 'application/json'
            }, 
            body: JSON.stringify({
               newUser
            })
        }) 
        
    
        .then(res => res.json())
        .then(user => {history.push(`/user/${user.id}`)})
        .catch(error => console.log(error) );
    }}

    return (
        <div className="signup" style={{ backgroundImage: `url(https://cdn.wallpapersafari.com/26/89/6qybSB.jpeg)`}}>
            <form className="tile" onSubmit={handleSubmit}>
                <h1>Sign Up Here!</h1>
                <label>Username:</label><br/>
                <input name="username" value={user.username} onChange={handleChange}/>
                <br/>
                <label>Password:</label><br/>
                <input name="password" value={user.password} onChange={handleChange}/>
                <br/>
                <input className="submit" type="submit"/>
            </form>
        </div>
    )
}

export default SignUpForm