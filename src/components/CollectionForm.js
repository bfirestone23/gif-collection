import React, { Component } from 'react';
import { FormGroup, FormControl, Button } from 'react-bootstrap';

export default class CollectionForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addCollection(this.state.name)
        this.setState({
            name: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <FormControl className="w-50 m-auto" placeholder="Create a New Collection" name="name" value={this.state.name} onChange={this.handleChange} type="text" />
                        <Button className="submit m-3" type="submit">Create</Button>
                    </FormGroup>
                </form>
            </div>
        )
    }
}
