import React, { Component } from 'react';
import Gif from './Gif';
import { Row, Col } from 'react-bootstrap';
import uuid from 'uuid';

export default class GifList extends Component {

    renderGifs = () => {
        return this.props.gifs.map(gif => {
        return <Col key={uuid()} className="p-1" xs={4}>
                 <Gif 
                    activeCollection={this.props.activeCollection}
                    addGif={this.props.addGif} 
                    url={gif.url} 
                    title={gif.title} 
                    id={gif.id} 
                    key={gif.id} 
                    src={gif.images.fixed_width_downsampled.url}
                    preview={gif.images.fixed_width_small_still.url} 
                 />
               </Col>
        });
    }

    render() {
        return (
            <div>
                <Row className="align-items-center justify-content-center m-auto">
                    {this.renderGifs()}
                </Row>
            </div>
        )
    }
}
