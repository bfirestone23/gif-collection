import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/users';
import { Button, FormControl } from 'react-bootstrap';

class Login extends Component {
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
            <div className='m-3'>
                <h1 className='m-auto display-6' style={{color: 'white'}}>Welcome to your GIF Library.</h1><br />
                <h4 className='m-auto' style={{color: 'white'}}>Login</h4><br />
                <form onSubmit={this.handleSubmit}>
                    <FormControl className='w-25 m-auto' placeholder='Username' id='username' name='username' value={this.state.username} onChange={this.handleChange}/>
                    <Button className='my-2 p-auto' type='submit'>Sign In</Button>
                </form>
            </div>
        )
    }
}

export default connect(null, { login })(Login)
