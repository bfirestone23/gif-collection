import React, { Component } from 'react';
import { connect } from 'react-redux';
import { likeCollection } from '../actions/collections';

class Likes extends Component {

    render() {
        return (
            <div>
                Likes: {this.props.likes}
                <button onClick={this.props.likeCollection(this.props.collectionId, this.props.likes)}>Like</button>
            </div>
        )
    }
}

export default connect(null, { likeCollection })(Likes);