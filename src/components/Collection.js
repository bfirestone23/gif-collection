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
                <Jumbotron className="position-relative rounded m-2 w-auto">
                    <Button 
                        variant='danger' 
                        size='sm' 
                        style={{top: '.5rem', left: '.5rem'}} 
                        className='position-absolute py-0 m-1 w-auto align-text-center'
                        onClick={() => this.props.removeCollection(this.props.collection.id)}>
                            x
                    </Button>
                    <h3 className='m-2' >{this.props.collection.name}</h3>
                    {this.renderPreview()}
                </Jumbotron>            
        )
    }
};