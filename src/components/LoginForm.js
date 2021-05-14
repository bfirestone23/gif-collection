import React from 'react';
import { Button, FormControl } from 'react-bootstrap';

export default function LoginForm(props) {
    return (
        <div className='m-3'>
            <h1 className='m-auto display-6' style={{color: 'white'}}>Welcome to your GIF Library.</h1><br />
            <h4 className='m-auto' style={{color: 'white'}}>Login</h4><br />
            <form onSubmit={props.handleSubmit}>
                <FormControl 
                    className='w-25 m-auto' 
                    placeholder='Username' 
                    id='username' 
                    name='username' 
                    value={props.username} 
                    onChange={props.handleChange}/>
                <Button className='my-2 p-auto' type='submit'>Sign In</Button>
            </form>
        </div>
    )
}
