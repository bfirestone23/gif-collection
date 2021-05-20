import React, { Component } from 'react';

export default class Likes extends Component {

    render() {
        return (
            <div>
                Likes: {this.props.likes}
                <button onClick={() => this.props.likeCollection(this.props.collectionId, this.props.likes)}>Like</button>
            </div>
        )
    }
}