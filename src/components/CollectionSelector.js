import React, { Component } from 'react';
import { FormControl, FormGroup, Form, Alert, Spinner } from 'react-bootstrap';
import { connect } from 'react-redux'

class CollectionSelector extends Component {

    renderSelector = () => {
        if (this.props.collections.length > 0 && this.props.isLoading === false) {
            return (
                <FormControl ref={input => this.collectionSelector = input} id='collection-select' className='m-auto w-auto' as='select' value={this.props.activeCollection} onChange={(e) => this.props.selectCollection(e)} >
                    <option value='none' disabled/>
                    {this.renderCollectionOptions()}
                </FormControl>
            )
        } else if (this.props.isLoading === true) {
            return <div><Spinner className='m-auto' animation='border' variant='primary' /></div>
        } else {
            return <Alert className='w-25 m-auto d-flexbox' variant='danger'>No collections available.</Alert>
        }
    }

    renderCollectionOptions = () => {
        return this.props.collections.map(collection => <option id={collection.id} key={collection.id}>{collection.name}</option>)
    }

    render() {
        return (
            <div>
                <form>
                    <FormGroup >
                        <Form.Label>Select or Create a Collection:</Form.Label>
                        {this.renderSelector()}
                    </FormGroup>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        activeCollection: state.collection.activeCollection,
        isLoading: state.collection.isLoading
    }
}

export default connect(mapStateToProps)(CollectionSelector);