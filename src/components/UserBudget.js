import React, { Component } from 'react'
import '../App.css'

class UserBudget extends Component {
    constructor(){
        super()
        this.state = {
            user: [],
            budgets: [],
            categories: [],
            expenses: []
        }
    }

    // handleChange = (e) => {
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     })
    // }

    componentDidMount = (e) => {
        const id = this.props.match.params.id

        fetch(`http://localhost:9292/users`)
        .then(res => res.json())
        .then(user => {
            user.map(user => {
                if (user.id == id){
                    // console.log(user)
                    this.setState({
                        user: user,
                        budgets: user.budgets,
                        categories: user.categories,
                        expenses: user.expenses
                    })
                }
            })   
        })
      } 
          
    // style={{ backgroundImage:"url(https://spiritofyork.com/wp-content/uploads/2020/05/image6-1.jpg)"}}
    render(){
        return(
            <div className='userBudget'>
                <h1>{this.state.user.username}</h1>
                <ul>{this.state.categories.map(cat => <li>{cat.name}</li>)}</ul>
                <h3>{this.state.budgets.map(budget => `Budget: ${budget.budget}`)}</h3>
                <h3>{this.state.expenses.map(exp => `${exp.description} : ${exp.cost}`)}</h3>
            </div>
        )
    }
}
export default UserBudget