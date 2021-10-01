import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import LoginForm from './components/LoginForm'
import Navbar from "./components/Navbar"

function App() {
  return (
    <Router>
      <Navbar/>
      <div className="App">
        <Switch>
          <Route exact path ='/' component={Home}/>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
