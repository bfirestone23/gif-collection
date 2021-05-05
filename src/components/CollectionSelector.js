import React, { Component, Link } from 'react';
import { FormControl, FormGroup, Form } from 'react-bootstrap';

export default class CollectionSelector extends Component {
    render() {
        // debugger;

        const renderCollectionOptions = () => {
            return this.props.collections.map(collection => <option key={collection.id}>{collection.name}</option>)
        }

        // update active_collection on Change

        return (
            <div>
                <form>
                    <FormGroup >
                        <Form.Label>Select or <a href="/library">Create</a> a Collection:</Form.Label>
                        <FormControl id="collection-select" className="m-auto w-auto" as="select" value={this.props.activeCollection} onChange={this.props.selectCollection} >
                            <option value='none' placeholder='Select a Collection' disabled/>
                            {renderCollectionOptions()}
                        </FormControl>
                    </FormGroup>
                </form>
            </div>
        )
    }
}
