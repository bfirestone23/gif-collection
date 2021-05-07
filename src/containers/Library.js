import React, { Component } from 'react';
import CollectionsContainer from './CollectionsContainer';
import CollectionFormContainer from './CollectionFormContainer';

export default class Library extends Component {
    render() {
        return (
            <div className='Library'>
                <CollectionFormContainer addCollection={this.props.addCollection} />
                <CollectionsContainer 
                    collections={this.props.collections} 
                    removeCollection={this.props.removeCollection} 
                    removeGif={this.props.removeGif}
                />
            </div>
        )
    }
}

