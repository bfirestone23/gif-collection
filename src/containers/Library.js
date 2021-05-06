import React, { Component } from 'react';
import CollectionsContainer from './CollectionsContainer';
import CollectionFormContainer from './CollectionFormContainer';

export default class Library extends Component {
    render() {
        return (
            <div>
                <h3>My Library</h3>
                <CollectionFormContainer addCollection={this.props.addCollection} />
                <CollectionsContainer collections={this.props.collections} removeGif={this.props.removeGif}/>
            </div>
        )
    }
}

