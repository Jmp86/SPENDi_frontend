import React from 'react'
import { Link } from 'react-router-dom'

const IncomeButton = (props) => {
    return (
        <div>
            <Link to={`/income/${props.user_id}`}>
                <button className="button">Update Your Income</button>
            </Link>
        </div>
    )
}

export default IncomeButton