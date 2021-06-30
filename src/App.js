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

  handleTokenChange = (myToken) => {
    this.setState({ token: myToken });
    localStorage.setItem('TOKEN', myToken);
  }

  render() {
    return (
      <div>
        <Router>
          <header>
            { this.state.token && <div>welcome, user!!!</div> }
            { this.state.token && <Link to="/todos"><div>todos</div></Link> }
            <Link to="/">Home</Link>
            <Link to="/login"><div>log in</div></Link>
            <Link to="/signup"><div>sign up</div></Link>
            <Link to="/todos"><div>todo list</div></Link>
            <button onClick={() => this.handleTokenChange('')}>logout</button>
          </header>
          <Switch>
          <Route 
            exact path='/' 
              render={(routerProps) => <Homepage
                handleTokenChange={this.handleTokenChange} 
                {...routerProps}/>} 
              />
            <Route exact path='/login' render={(routerProps) => <Login 
                handleTokenChange={this.handleTokenChange} 
                {...routerProps} />} 
              />
            <Route 
            exact path='/signup' 
              render={(routerProps) => <Signup 
                handleTokenChange={this.handleTokenChange} 
                {...routerProps}/>} 
              />
          <Route 
            exact path='/todos' 
              render={(routerProps) => <Todos 
                handleTokenChange={this.handleTokenChange} 
                {...routerProps}/>} 
              />
          </Switch>
        </Router>
      </div>
    )
  }
}