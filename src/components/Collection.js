import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import CollectionPreview from './CollectionPreview';

export default class Collection extends Component {

    renderPreview = () => {
        if (this.props.collection.gifs.length === 0) {
            return <div>No gifs have been added to this collection.</div>
        } else {
            return <CollectionPreview collection={this.props.collection} removeGif={this.props.removeGif} />
        }
    }

    render() {
        return (
            <Jumbotron style={{position: 'relative'}} className="rounded m-2 w-auto">
                <Button 
                    variant='danger' 
                    size='sm' 
                    style={{position: 'absolute', top: '.5rem', left: '.5rem'}} 
                    onClick={() => this.props.removeCollection(this.props.collection.id)}>
                        X
                </Button>
                <h3 className='m-2' >{this.props.collection.name}</h3>
                {this.renderPreview()}
            </Jumbotron>
        )
    }
};