import React, { Component } from 'react'
import ExpenseButton from './ExpenseButton'
import BudgetForm from './BudgetForm'
import IncomeButton from './IncomeButton'
import CategoryList from './CategoryList'
import ExpenseList from './ExpenseList'
import NavBar from './NavBar'
import '../App.css'

class UserBudget extends Component {
    constructor(){
        super()
        this.state = {
            user: [],
            budget:{
                category_budget: 0,
                name: "",
                user_id: 0
            },
            categories: [],
            expenses: [],
            showBudgetForm: false,
            monthly_income: 0,
            totalBudget: 0
        }
    }


    componentDidMount = (e) => {
        const id = this.props.match.params.id

        fetch(`http://localhost:9292/users`)
        .then(res => res.json())
        .then(user => {
            user.map(user => {
                if (user.id == id){
                    console.log(user.categories)
                    this.setState({
                        user: user,
                        expenses: user.expenses,
                        monthly_income: user.monthly_income,
                        // totalBudget: user.categories.category_expense.sum
                    })
                }
            })   
        })

       
        fetch(`http://localhost:9292/categories`)
        .then(res => res.json())
        .then(categories => {
             categories.map(cat => {
                 if(cat.user_id == id){
                     this.setState({
                         categories: [...this.state.categories, cat]

                        })
                 }
             })
      }) 
    }

  
    handleBudget = (e) => {
        this.setState({
            budget:{
            ...this.state.budget,
            [e.target.name]: e.target.value,
            user_id: this.props.match.params.id
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let newBudget 

        if(this.state.budget.category_budget !== 0 && this.state.budget.name !== ""){
            newBudget = this.state.budget
        }
        
        fetch(`http://localhost:9292/categories`, {
            method: 'POST', 
            headers: {
                'Content-type': 'application/json', 
                'Accept': 'application/json'
            }, 
            body: JSON.stringify({ 
                newBudget
            })
        })
        .then(res => res.json())
        .then(newCat => this.setState({categories: [...this.state.categories, newCat]}))
        .catch(error => console.log(error) );
        this.setState({
            showBudgetForm: false
        })
        }

          
    render(){
        return(
            <div className='userBudget'>
                <NavBar user_id={this.state.user.id}/>
                <h1>{this.state.user.username}</h1>
                <h3>Monthly Income: ${this.state.monthly_income}</h3>
                <h2>Budget</h2>
                <CategoryList deleteBudget={this.deleteBudget} categories={this.state.categories} user_id={this.state.user.id}/>
                <h2>Expenses</h2>
                <ExpenseList expenses={this.state.expenses} user_id={this.state.user.id}/>
                <br/>
                <ExpenseButton user_id={this.state.user.id}/>
                <br/>
                {this.state.showBudgetForm ? <BudgetForm handleSubmit={this.handleSubmit} handleBudget={this.handleBudget} budget={this.state.budget}/> : <button onClick={() => this.setState({showBudgetForm :true})}>Add New Budget</button>}<br/>
                <br/>
                <IncomeButton user_id={this.state.user.id}/>
            </div>
        )
    }
}
export default UserBudget