import React, { Component } from 'react'

export default class Signup extends Component {
    state = {
        email: '',
        password: ''
    }

handleSubmit = e => {
    e.preventDefault();
    alert(this.state.email)
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
                        <input onChange={this.handleEmailChange}/>
                    </label>
                    <label>
                        Password
                        <input onChange={this.handlePasswordChange}/>
                    </label>
                    <button>Sign up</button>
                </form>
            </div>
        )
    }
}
