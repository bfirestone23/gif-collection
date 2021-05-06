import React, { Component } from 'react';
import Gif from './Gif';


export default class CollectionPreview extends Component {

    renderCollection = () => {
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


    render() {
        return (
            <div style={{width: '75%', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}className='container-fluid'>
                {this.renderCollection()}
            </div>
        )
    }
}
