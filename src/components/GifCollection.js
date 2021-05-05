import React, { Component } from 'react';
import '../Gif.css';

export default class GifCollection extends Component {
    state = {
        gif: {
            id: this.props.id,
            url: this.props.url,
            src: this.props.src,
            title: this.props.title
        },
        collection: {
            name: this.props.activeCollection
        }
    }

    render() {

        return (
            <div>
                <div>
                    <a rel='noreferrer' target='_blank' href={this.state.gif.url}>
                        <img className='gif rounded img-fluid' alt={this.state.gif.title} src={this.state.gif.src} />
                    </a>
                </div>
            </div>
        );
    }
}