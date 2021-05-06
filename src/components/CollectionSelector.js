import React, { Component } from 'react';
import { FormControl, FormGroup, Form } from 'react-bootstrap';

export default class CollectionSelector extends Component {

    renderCollectionOptions = () => {
        return this.props.collections.map(collection => <option id={collection.id} key={collection.id}>{collection.name}</option>)
    }

    render() {
        return (
            <div>
                <form>
                    <FormGroup >
                        <Form.Label>Select or <a href="/library">Create</a> a Collection:</Form.Label>
                        <FormControl id="collection-select" className="m-auto w-auto" as="select" defaultValue="none" onChange={(e) => this.props.selectCollection(e)} >
                            <option value='none' placeholder='Select a Collection' disabled/>
                            {this.renderCollectionOptions()}
                        </FormControl>
                    </FormGroup>
                </form>
            </div>
        )
    }
}
