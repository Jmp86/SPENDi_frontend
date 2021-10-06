import React, { useState } from 'react'
import '../App.css'

const ExpenseList = (props) => {

        return(
            <div className='tile'>
                <h3>All Expenses</h3>
                {props.expenses.map(exp => <li className="list" key={exp.id}> {exp.description} : {exp.cost} <button className="delete" onClick={() => props.deleteExpense(exp.id)}>x</button></li>)}
            </div>
        )
    }

export default ExpenseList