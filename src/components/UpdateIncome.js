import React, { useState } from 'react'
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import '../App.css'

const UpdateIncome = ({ handleIncomeSubmit, handleIncome }) => {

        return(
            <div className='income'>
                
                <form className='input' onSubmit={handleIncomeSubmit}>
                    <label>New Monthly Income:</label><br/>
                    <input type="text" name="monthly_income" onChange={handleIncome}/><br/>
                    <input className='submit' type="submit"/> 
                </form>
            </div>
        )
    
}
export default UpdateIncome