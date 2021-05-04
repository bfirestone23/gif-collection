import React, { Component } from 'react';
import Gif from '../components/Gif';

export default class GifList extends Component {
    render() {

        const renderGifs = this.props.gifs.map(gif => {
            return <Gif url={gif.url} title={gif.title} key={gif.id} src={gif.images.original.url} />
        })

        return (
            <div>
                {renderGifs}
            </div>
        )
    }
}
