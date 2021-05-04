import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

class Gif extends Component {
    render() {
        return (
            <Container>
                <img className="rounded" alt='' src={this.props.src} />
                <p>{this.props.title}</p>
                <a rel='noreferrer' target='_blank' href={this.props.url}>View on Giphy</a>
            </Container>
        );
    }
}

export default Gif;