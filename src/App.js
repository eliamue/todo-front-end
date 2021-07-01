import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
    Link
} from "react-router-dom";
import Todos from './Todos.js';
import Login from './Login.js'
import Signup from './Signup.js'
import Homepage from './Homepage.js'
import './App.css'


export default class App extends Component {
  state = { token: localStorage.getItem('TOKEN') }

login = (token) => {
  this.setState({ token })
  localStorage.setItem('TOKEN', token)
}

  render() {
    return (
      <div className="puppies">
        <Router>
          <header>
            { this.state.token && <div>Welcome to the party, pal!!</div> }
            
            <Link to="/">Home</Link>

            { this.state.token && 
            <Link to="/todos"><div>Todos</div></Link> 
            }

            <Link to="/signin"><div>Login</div></Link>
            <Link to="/signup"><div>Signup</div></Link>
            
          </header>

          <Switch>
          <Route 
            exact path='/' 
              render={(routerProps) => <Homepage
                login={this.login} 
                {...routerProps}/>} 
              />
            <Route exact path='/signin' render={(routerProps) => <Login 
                login={this.login} 
                {...routerProps} />} 
              />
            <Route 
            exact path='/signup' 
              render={(routerProps) => <Signup 
                login={this.login} 
                {...routerProps}/>} 
              />
          <Route 
            exact path='/todos' 
              render={(routerProps) => <Todos 
                login={this.login} 
                token={this.state.token}
                {...routerProps}/>} 
              />
          </Switch>
        </Router>
      </div>
    )
  }
}