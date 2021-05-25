import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class Likes extends Component {

    render() {
        return (
            <div>
                <br />
                <b>Likes:</b> {this.props.likes}
                <br />
                <Button size='sm' variant='outline-success' onClick={() => this.props.likeCollection(this.props.collectionId, this.props.likes)}>Like</Button>
            </div>
        )
    }
}