import React, { Component } from 'react'
import { login } from './fetch-utils.js'
import './App.css'

export default class Login extends Component {
    state = {
        email: '',
        password: ''
    }
    handleSubmit = async e => {
        e.preventDefault();
    
        const token = await login(this.state.email, this.state.password);
        
        this.props.login(token)
        this.props.history.push('/todos')
    }
    
    handleEmailChange = e => {
        this.setState({ email: e.target.value })
    }
    
    handlePasswordChange = e => {
        this.setState({ password: e.target.value })
    }

    render() {
        return (
            <div className="login-page">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Email
                        <input type="email" onChange={this.handleEmailChange}/>
                    </label>
                    <label>
                        Password
                        <input type="password" onChange={this.handlePasswordChange}/>
                    </label>
                    <button>Login!</button>
                </form>
            </div>
        )
    }
}
