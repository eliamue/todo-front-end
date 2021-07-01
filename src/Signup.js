import React, { Component } from 'react'
import { signup } from './fetch-utils';

export default class Signup extends Component {
    state = {
        email: '',
        password: ''
    }

handleSubmit = async e => {
    e.preventDefault();

    const token = await signup(this.state.email, this.state.password);
    
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
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Email
                        <input type="email" onChange={this.handleEmailChange}/>
                    </label>
                    <label>
                        Password
                        <input type="password" onChange={this.handlePasswordChange}/>
                    </label>
                    <button>Sign up</button>
                </form>
            </div>
        )
    }
}
