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
            <div className="container">
                <form className="" onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <FormControl style={{width: "auto", margin: "auto"}} placeholder="Enter your search" name="query" value={this.state.query} onChange={this.handleChange} type="text" />
                        <Button className="submit m-3" type="submit">Submit</Button>
                    </FormGroup>
                </form>
            </div>
        )
    }
}