import React, { useState } from 'react'
// import { useHistory } from 'react-router-dom'
// import { withRouter } from 'react-router-dom'
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import '../App.css'

const CategoryList = ({ categories, user_id}) => {
    const [category, setCategory] = useState({})

    const updateCategories = () => {

        fetch(`http://localhost:9292/categories`)
        .then(res => res.json())
        .then(categories => {
             categories.map(cat => {
                 if(cat.user_id == user_id){
                    setCategory({ 
                        ...category, 
                        cat
                     })
                 }
             })
      })
      }

    const deleteBudget = (id) => {
            fetch(`http://localhost:9292/categories/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json', 
                    'Accept': 'application/json'
                }, 
                body: JSON.stringify({
                   "id": id
                })
            })
            .then(res => res.json())
            .then(console.log)
            .catch(error => console.log(error) )
            updateCategories()
        }

        return(
            <div className='catExpense'>
                {categories.map(cat => <div>{cat.name} : {cat.category_budget}<button onClick={() => deleteBudget(cat.id)}>x</button></div>)}
            </div>
        )
    }

export default CategoryList