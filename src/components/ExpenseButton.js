import React from 'react'
import { Link } from 'react-router-dom'

const ExpenseButton = (props) => {

    return (
        <div>
            <Link to={`/expense/${props.user_id}`}>
                <button className="expButton">Add Expense</button>
            </Link>
        </div>
    )
}

export default ExpenseButton