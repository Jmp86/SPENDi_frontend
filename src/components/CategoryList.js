import React, { useState, useEffect  } from 'react'
import '../App.css'

const CategoryList = (props) => {
    const [expense, setExpense] = useState([])
    const [category, setCategory] = useState([])
    const [catExp, setCatExp] = useState(0)

 
    // useEffect(() => {
    //     props.categories.map(cat => {
    //         console.log(cat)
    //         setCategory({
    //             ...category,
    //             category: cat.id
    //         })
    //     })
        
    //     props.expenses.map(exp => {
    //         if (exp.category_id == category) {
    //             console.log(exp.cost)
    //             setExpense({
    //                 ...expense,
    //                 expense: exp.cost 
    //               })
    //         let total = expense.reduce((a, b) =>  a + b)
    //         setCatExp({catExp: total})
    //             console.log()
    //         }
    //     })
    // }, [])

        return(
            <div>
                {props.categories.map(cat => 
                    <div className='tile' key={cat.id}>
                        <h3>{cat.name}</h3> <br/> 
                        Budget: ${cat.category_budget}<br/> 
                        <button className="delete" onClick={() => props.deleteBudget(cat.id)}>x</button>
                    </div>)}
                    {/* {console.log(expense)} */}
            </div>
        )
    }

export default CategoryList