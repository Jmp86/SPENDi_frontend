import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import CategoryMenu from "./CategoryMenu"
import NavBar from './NavBar'
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import '../App.css'

const ExpenseForm = (props) => {
    const [expense, setExpense] = useState({
        description: "",
        cost: 0.0,
        user_id: 0,
        category_id: 0

    });

    const history = useHistory()

    const handleChange = (e) => {
        setExpense({
          ...expense,
          [e.target.name]: e.target.value,
          user_id: props.match.params.id
        });
    }

    const getCategoryId = (id) => {
        setExpense({
            ...expense,
            category_id: id
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let newExpense

        if(expense.description !== '' && expense.cost !== 0.0 && expense.user_id !== 0){
            newExpense = expense
        
        fetch(`http://localhost:9292/expenses`, {
            method: 'POST', 
            headers: {
                'Content-type': 'application/json', 
                'Accept': 'application/json'
            }, 
            body: JSON.stringify({
               newExpense
            })
        }).catch(error => console.log(error) );
        // console.log(newExpense)
        history.push(`/user/${props.match.params.id}`)
    } 
}
          
        return(
            <div className='expense'>
                <NavBar user_id={props.match.params.id}/>
                <form className='input' onSubmit={handleSubmit}>
                    <label>Description:</label><br/>
                    <input type="text" name="description" onChange={handleChange}/><br/>
                    <CategoryMenu categoryId={getCategoryId}/>
                    <label>Cost$</label><br/>
                    <input type="" name="cost" onChange={handleChange}/><br/>
                    <input className='submit' type="submit"/> 
                </form>
            </div>
        )
    
}
export default withRouter(ExpenseForm)