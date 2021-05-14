import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/users';
import LoginForm from '../components/LoginForm';

class LoginContainer extends Component {
    state = { 
        username: '' 
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.login(this.state);
        this.setState({
            username: ''
        })
    }

    render() {
        return (
            <LoginForm 
                handleChange={this.handleChange} 
                handleSubmit={this.handleSubmit}
                username={this.state.username}
            />
        )
    }
}

export default connect(null, { login })(LoginContainer)
