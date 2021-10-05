import React, { useState } from 'react'


const UpdateTotals = ({categories, expenses, user_id}) => {
    const { expense, setExpense } = useState({})
    const { budget, setBudget } = useState({})


//     const getUsers = () => { 
//         fetch(`http://localhost:9292/users/` + user_id)
//         .then(res => res.json()) 
//         .then(user => {
//             console.log(user)
//             // let bud = user.categories.map(cat => console.log(cat))
//             // let exp = user.expenses.map(exp => console.log(exp.cost))
          
//             // setBudget({ budget: bud })
//             // setExpense({ expense: exp })
//         })
//         } 
//         // cat.category_budget).reduce((a, b) =>  a + b
//         // exp.cost).reduce((a, b) =>  a + b
// getUsers()
//     const getCategories = () => {
//         fetch(`http://localhost:9292/categories`)
//         .then(res => res.json()) 
// }

//     const getUsersAndCategories = () =>{
//         return Promise.all([getUsers(), getCategories()])
//   }
//     getUsersAndCategories() 
//         .then(([budgets, categories])
//         let bud = categories.map(cat => cat.category_budget).reduce((a, b) =>  a + b)
//         let exp = expenses.map(exp => exp.cost).reduce((a, b) =>  a + b)
//         setBudget({ budget: bud })
//         setExpense({ expense: exp })
//     }
//     updateBudgetAndExpense()
    return (
        <div>

        </div>
    )
}

export default UpdateTotals