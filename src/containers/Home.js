import React, { Component } from 'react'
import GifListContainer from './GifListContainer'
import { Container } from 'react-bootstrap';

export default class Home extends Component {
    render() {
        return (
            <Container>
                <GifListContainer />
            </Container>
        )
    }
}
