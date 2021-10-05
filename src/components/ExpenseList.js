import React, { useState } from 'react'
// import { useHistory } from 'react-router-dom'
// import { withRouter } from 'react-router-dom'
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import '../App.css'

const ExpenseList = (props) => {

    // const deleteExpense = (id) => {
    //     fetch(`http://localhost:9292/expenses/${id}`, {
    //         method: 'DELETE',
    //         headers: {
    //             'Content-type': 'application/json', 
    //             'Accept': 'application/json'
    //         }, 
    //         body: JSON.stringify({
    //            "id": id
    //         })
    //     })
    //     .then(res => res.json())
    //     .then(console.log)
    //     .catch(error => console.log(error) )
    // }

        return(
            <div className='tile'>
                {props.expenses.map(exp => <div>{exp.description} : {exp.cost} <button className="delete" onClick={() => props.deleteExpense(exp.id)}>x</button></div>)}
                {/* {console.log(this.state.categories.name)} */}
            </div>
        )
    }

export default ExpenseList