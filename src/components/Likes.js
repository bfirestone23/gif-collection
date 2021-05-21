import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class Likes extends Component {

    render() {
        return (
            <div>
                <br />
                Likes: {this.props.likes}
                <br />
                <Button onClick={() => this.props.likeCollection(this.props.collectionId, this.props.likes)}>Like</Button>
            </div>
        )
    }
}