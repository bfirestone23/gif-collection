import React, { Component } from 'react';
import GifList from '../components/GifList';


export default class GifListContainer extends Component {

    handleClick = (gifData) => {
        this.props.addGif(gifData)
    }

    render() {
        return (
            <div>
                <GifList activeCollection={this.props.activeCollection} addGif={this.handleClick} gifs={this.props.gifs} />
            </div>
        )
    }
}