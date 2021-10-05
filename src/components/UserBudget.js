import React, { Component } from 'react'
import ExpenseButton from './ExpenseButton'
import BudgetForm from './BudgetForm'
import CategoryList from './CategoryList'
import ExpenseList from './ExpenseList'
import NavBar from './NavBar'
import '../App.css'
import UpdateIncome from './UpdateIncome'
import UpdateTotals from './UpdateTotals'

class UserBudget extends Component {
    constructor(){
        super()
        this.state = {
            user: [],
            categories: [],
            category_expense: 0,
            budget: {
                name: "",
                category_budget: 0,
                user_id: 0
            },
            expenses: [],
            showBudgetForm: false,
            showIncomeForm: false,
            monthly_income: 0,
            totalBudget: 0,
            totalExpense: 0,

        }
    }

    componentDidMount = (e) => {
        const id = this.props.match.params.id

        fetch(`http://localhost:9292/users`)
        .then(res => res.json())
        .then(user => {
            user.map(user => {
                if (user.id == id){
                    this.setState({
                        user: user,
                        expenses: user.expenses,
                        monthly_income: user.monthly_income,
                        categories: user.categories
                    })
                }
            })   
        })
    }

    updateCategoryExpense = () => {
        
    }

    handleIncomeSubmit = (e) => {
        e.preventDefault()
        
        let id = this.props.match.params.id
        
        fetch(`http://localhost:9292/users/` + id, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              method: 'PATCH',                                                              
              body: JSON.stringify({ 
                  "id": id, 
                  "monthly_income": this.state.monthly_income
                })                                        
            })

            .catch(error => console.log(error) );
            this.setState({
                showIncomeForm: false
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

    deleteBudget = (id) => {
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
        this.remove_budget(id)
    }

    remove_budget = (deleteBudgetId) => {
        this.setState({
          categories: this.state.categories.filter(item => item.id !== deleteBudgetId)
        })
      }

    deleteExpense = (id) => {
        fetch(`http://localhost:9292/expenses/${id}`, {
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
        this.remove_expense(id)
    }

    remove_expense = (deleteExpenseId) => {
        this.setState({
          expenses: this.state.expenses.filter(item => item.id !== deleteExpenseId)
        })
      }

    handleIncome = (e) => {
        this.setState({
            monthly_income: e.target.value
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
            <div className='userBudget'style={{backgroundImage: `url(https://blog.verifirst.com/hubfs/Blog_Images/background%20check%20budget.png)`}}>
                <NavBar user_id={this.state.user.id}/>
                <h1>{this.state.user.username}</h1>
                <UpdateTotals categories={this.state.categories} expenses={this.state.expenses} user_id={this.state.user.id}/>
                <div className="tile">
                    <h3>Monthly Income: ${this.state.monthly_income}</h3>
                    <h3>Total Budget: $</h3>
                    <h3>Total Savings: $</h3>
                </div>
                <h2>Budgets</h2>
                <CategoryList deleteBudget={this.deleteBudget} categories={this.state.categories} user_id={this.state.user.id}/>
                <h2>Expenses</h2>
                <ExpenseList deleteExpense={this.deleteExpense} expenses={this.state.expenses} user_id={this.state.user.id}/>
                <br/>
                <ExpenseButton user_id={this.state.user.id}/>
                <br/>
                {this.state.showBudgetForm ? <BudgetForm handleSubmit={this.handleSubmit} handleBudget={this.handleBudget} budget={this.state.budget}/> : <button className="budgetButton" onClick={() => this.setState({showBudgetForm :true})}>Add New Budget</button>}<br/>
                <br/>
                {this.state.showIncomeForm ? <UpdateIncome handleIncomeSubmit={this.handleIncomeSubmit} handleIncome={this.handleIncome} budget={this.state.budget}/> : <button className="incomeButton"onClick={() => this.setState({showIncomeForm :true})}>Update Income</button>}<br/>
            </div>
        )
    }
}
export default UserBudget