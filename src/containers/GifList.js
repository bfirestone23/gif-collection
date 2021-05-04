import React, { Component } from 'react';
import Gif from '../components/Gif';
import { Row, Col } from 'react-bootstrap';

export default class GifList extends Component {
    render() {

        const renderGifs = this.props.gifs.map(gif => {
            return <Col className="p-1" xs={4}><Gif url={gif.url} title={gif.title} key={gif.id} src={gif.images.fixed_height_downsampled.url} /></Col>
        })

        return (
            <div>
                <Row className="align-items-center">
                    {renderGifs}
                </Row>
            </div>
        )
    }
}
