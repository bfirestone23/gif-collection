import React, { Component } from 'react';
import GifSearchResult from './GifSearchResult';
import { Row, Col } from 'react-bootstrap';
import uuid from 'uuid';

export default class GifList extends Component {
    render() {

        const renderGifs = this.props.gifs.map(gif => {
            return <Col key={uuid()} className="p-1" xs={4}>
                     <GifSearchResult 
                        activeCollection={this.props.activeCollection}
                        addGif={this.props.addGif} 
                        url={gif.url} 
                        title={gif.title} 
                        id={gif.id} 
                        key={gif.id} 
                        src={gif.images.fixed_height_downsampled.url} 
                     />
                   </Col>
        })

        return (
            <div>
                <Row className="align-items-center justify-content-center m-auto">
                    {renderGifs}
                </Row>
            </div>
        )
    }
}
