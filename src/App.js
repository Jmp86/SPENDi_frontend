import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import LoginForm from './components/LoginForm'
import UserBudget from './components/UserBudget'
import SignUpForm from './components/SignUpForm'
import ExpenseForm from './components/ExpenseForm'
import UpdateIncome from './components/UpdateIncome'




function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path ='/' component={Home}/>
          <Route exact path ='/login' component={LoginForm}/>
          <Route exact path ='/user/:id' component={UserBudget}/>
          <Route exact path ='/signup' component={SignUpForm}/>
          <Route exact path ='/expense/:id' component={ExpenseForm}/>
          <Route exact path ='/income/:id' component={UpdateIncome}/>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
