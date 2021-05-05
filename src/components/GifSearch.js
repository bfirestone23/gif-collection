import React, { Component } from 'react'
import { Button, FormGroup, FormControl } from 'react-bootstrap';

export default class GifSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            query: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.getGifs(this.state.query)
        this.setState({
            query: ''
        }) 
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <FormControl className="w-25 m-auto" placeholder="Enter your search" name="query" value={this.state.query} onChange={this.handleChange} type="text" />
                        <Button className="submit m-3" type="submit">Search Giphy</Button>
                    </FormGroup>
                </form>
            </div>
        )
    }
}