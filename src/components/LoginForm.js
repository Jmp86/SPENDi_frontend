import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import '../App.css'

class LoginForm extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: '',
            user: []
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const username = e.target.children[3].value
        const password = e.target.children[7].value
    
        fetch(`http://localhost:9292/users`)
        .then(res => res.json())
        .then(data => data.map(user => {
            this.setState({
                user: user
            })
            if(user.username === username && user.password === password){
                user.logged_in = true
                this.props.history.push('/user/' + user.id )
            } 
        })).catch(error => console.log(error) );
    } 
          

    render(){
        return(
            <div className='login' style={{backgroundImage: `url(https://wallpaperaccess.com/full/1104816.jpg)`}}>
                <form className='tile' onSubmit={this.handleSubmit}>
                    <h1>Sign In</h1>
                    <label>Username:</label><br/>
                    <input type="text" name="username" onChange={this.handleChange}/><br/>
                    <label>Password:</label><br/>
                    <input type="text" name="password" onChange={this.handleChange}/><br/>
                    <input className='submit' type="submit"/> 
                </form>
            </div>
        )
    }
}
export default withRouter(LoginForm)