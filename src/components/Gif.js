import React, { Component } from 'react';

class Gif extends Component {
    render() {
        return (
            <div>
                <img alt='' src={this.props.src} />
                <p>{this.props.title}</p>
                <a rel='noreferrer' target='_blank' href={this.props.url}>View on Giphy</a>
            </div>
        );
    }
}

export default Gif;