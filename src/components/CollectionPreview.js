import React, { Component } from 'react';
import Gif from './Gif';
import { Spinner } from 'react-bootstrap';


export default class CollectionPreview extends Component {
    renderCollection = () => {
        if (this.props.isLoading === true) {
            return <Spinner className='m-5' animation='border' variant='primary' />
        } else {
            return this.props.collection.gifs.slice(0, 10).map(gif => {
                return <Gif 
                            collectionId={this.props.collection.id}
                            url={gif.url} 
                            title={gif.title} 
                            id={gif.id} 
                            key={gif.id} 
                            src={gif.preview}
                            removeGif={this.props.removeGif}
                        />
            })
        }
    }

    render() {
        return (
            <div style={{width: '75%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}className='container-fluid'>
                {this.renderCollection()}
            </div>
        )
    }
}


