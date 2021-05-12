import React, { Component } from 'react';
import { FormGroup, FormControl, Button, Jumbotron } from 'react-bootstrap';
import { connect } from 'react-redux';

class CollectionForm extends Component {
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
        let collection = { name: this.state.name, user: this.props.user }
        this.props.addCollection(collection)
        this.setState({
            name: ''
        })
    }

    render() {
        return (
            <Jumbotron className='m-auto d-flex align-content-between flex-wrap' style={{width: '25rem', height: '13rem'}}>
                <form className='m-auto' onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <FormControl className='m-auto' placeholder='New Collection' name='name' value={this.state.name} onChange={this.handleChange} type='text' />
                        <Button className='submit m-3' type='submit'>Create</Button>
                    </FormGroup>
                </form>
            </Jumbotron>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user.username
    }
}

export default connect(mapStateToProps)(CollectionForm);