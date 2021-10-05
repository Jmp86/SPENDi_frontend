import React, { useState } from 'react'
// import { useHistory } from 'react-router-dom'
// import { withRouter } from 'react-router-dom'
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import '../App.css'

const CategoryList = (props) => {


        return(
            <div>
                {props.categories.map(cat => <div className='tile'>{cat.name} Budget: {cat.category_budget}<br/> Current Expense: {cat.category_expense}<br/> <button className="delete" onClick={() => props.deleteBudget(cat.id)}>x</button></div>)}
            </div>
        )
    }

export default CategoryList