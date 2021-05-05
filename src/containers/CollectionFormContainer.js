import React, { Component } from 'react';
import CollectionForm from '../components/CollectionForm';

export default class CollectionFormContainer extends Component {
    render() {
        return (
            <div>
                <CollectionForm addCollection={this.props.addCollection} />
            </div>
        )
    }
}