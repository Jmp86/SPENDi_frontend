import React, { useState } from 'react'


const BudgetForm = ({ handleSubmit, handleBudget, budget }) => {
    const { category_budget, name } = budget

    return (
        <div className="budgetForm">
            <form className='tile' onSubmit={handleSubmit}>
                <h3>New Budget</h3>
                <label>Name:</label><br/>
                <input name="name" value={name} onChange={handleBudget}/><br/>
                <label>Budget Amount:</label><br/>
                <input name="category_budget" value={category_budget} onChange={handleBudget}/><br/>
                <input className='submit' type="submit"/> 
            </form>
        </div>
    )
}

export default BudgetForm