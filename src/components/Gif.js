import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

class Gif extends Component {
    render() {
        return (
            <Container className="card my-3" style={{background: "rgba(199, 199, 199, 0.5)", width: "50%"}}>
                <Container className="card-body" >
                    <img className="rounded img-fluid" alt='' src={this.props.src} />
                    <h6 className="card-title m-1">{this.props.title}</h6>
                    <a className="" rel='noreferrer' target='_blank' href={this.props.url}>View on Giphy</a>
                </Container>
            </Container>
        );
    }
}

export default Gif;