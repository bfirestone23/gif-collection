import React, { Component } from 'react';
import AddGifButton from './AddGIfButton';
import RemoveGifButton from './RemoveGifButton';

export default class Gif extends Component {

    renderButton = () => {
        if (Object.keys(this.props).includes('addGif')) {
            return <AddGifButton addGif={this.props.addGif} gifData={this.props} />
        } else if (Object.keys(this.props).includes('removeGif')) {
            return <RemoveGifButton removeGif={this.props.removeGif} gifData={this.props} />
        }
    }

    render() {
        return (
            <div>
                {this.renderButton()}
                <a rel='noreferrer' target='_blank' href={this.props.url}>
                    <img className='gif rounded img-fluid m-1' alt={this.props.title} src={this.props.src} />
                </a>
            </div>
        );
    }
}