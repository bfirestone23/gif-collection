import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import CollectionPreview from './CollectionPreview';

export default class Collection extends Component {
    render() {
        return (
            <Jumbotron className="rounded m-2 w-auto">
                <h1>{this.props.collection.name}</h1>
                <p>The name of this collection is {this.props.collection.name}</p>
                <CollectionPreview collection={this.props.collection} removeGif={this.props.removeGif} />
            </Jumbotron>
        )
    }
};
