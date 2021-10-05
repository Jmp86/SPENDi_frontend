import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import NavBar from './NavBar'
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import '../App.css'

const UpdateIncome = (props) => {
    const [income, setIncome] = useState({
        monthly_income: 0,
        user_id: 0
    });

    const history = useHistory()

    const handleChange = (e) => {
        setIncome({
          ...income,
          [e.target.name]: e.target.value,
          user_id: props.match.params.id
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let newIncome 

        if(income.monthly_income !== 0){
            newIncome = income
        
        fetch(`http://localhost:9292/users/${props.match.params.id}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              method: 'PATCH',                                                              
              body: JSON.stringify( { newIncome } )                                        
            })

            .catch(error => console.log(error) );
            history.push(`/user/${props.match.params.id}`)
        } 
        }
          
        return(
            <div className='income'>
                <NavBar user_id={props.match.params.id}/>
                <form className='input' onSubmit={handleSubmit}>
                    <label>New Monthly Income:</label><br/>
                    <input type="text" name="monthly_income" onChange={handleChange}/><br/>
                    <input className='submit' type="submit"/> 
                </form>
            </div>
        )
    
}
export default withRouter(UpdateIncome)