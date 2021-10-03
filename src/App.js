import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import LoginForm from './components/LoginForm'
import Navbar from "./components/Navbar"
import UserBudget from './components/UserBudget'
import SignUpForm from './components/SignUpForm'

function App() {
  return (
    <Router>
      <Navbar/>
      <div className="App">
        <Switch>
          <Route exact path ='/' component={Home}/>
          <Route exact path ='/login' component={LoginForm}/>
          <Route exact path ='/user/:id' component={UserBudget}/>
          <Route exact path ='/signup' component={SignUpForm}/>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
