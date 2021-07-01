import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
    Link,
} from "react-router-dom";
import Todos from './Todos.js';
import Login from './Login.js'
import Signup from './Signup.js'
import Homepage from './Homepage.js'

export default class App extends Component {
  state = { token: localStorage.getItem('TOKEN') }

login = (token) => {
  this.setState({ token })
  localStorage.setItem('TOKEN', token)
}

logout = (token) => {
    this.setState({ token: '' })
    localStorage.setItem('TOKEN', '')
}

  render() {
    return (
      <div>
        <Router>
          <header>
            { this.state.token && <div>welcome, user!!!</div> }

            { this.state.token && <Link to="/todos"><div>todos</div></Link> }

            <Link to="/">Home</Link>
            <Link to="/login"><div>Login</div></Link>
            <Link to="/signup"><div>Signup</div></Link>
            
            <button onClick={() => this.login('')}>Logout</button>
          </header>

          <Switch>
          <Route 
            exact path='/' 
              render={(routerProps) => <Homepage
                login={this.login} 
                {...routerProps}/>} 
              />
            <Route exact path='/login' render={(routerProps) => <Login 
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