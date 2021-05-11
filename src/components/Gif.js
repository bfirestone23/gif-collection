import React, { Component } from 'react';
import AddGifButton from './AddGifButton';
import RemoveGifButton from './RemoveGifButton';

export default class Gif extends Component {
    state = {
        imageLoaded: false
    }

    renderButton = () => {
        if (Object.keys(this.props).includes('addGif') && this.state.imageLoaded) {
            return <AddGifButton addGif={this.props.addGif} gifData={this.props} />
        } else if (Object.keys(this.props).includes('removeGif') && this.state.imageLoaded) {
            return <RemoveGifButton removeGif={this.props.removeGif} gifData={this.props} />
        }
    }

    handleLoad = () => {
        this.setState({
            imageLoaded: true
        })
    }

    render() {
        return (
            <div>
                {this.renderButton()}
                <a rel='noreferrer' target='_blank' href={this.props.url}>
                    <img onLoad={this.handleLoad} className='gif rounded img-fluid m-1' alt={this.props.title} src={this.props.src} />
                </a>
            </div>
        );
    }
}