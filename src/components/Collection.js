import React, { Component } from 'react';
import { Jumbotron, Carousel } from 'react-bootstrap';
import GifCollection from './GifCollection';

export default class Collection extends Component {
    render() {
        const renderCarousel = () => {
            if (this.props.collection.gifs.length > 0) {
                return this.props.collection.gifs.map(gif => {
                    return (<Carousel>
                                <Carousel.Item>
                                    <GifCollection 
                                        activeCollection={this.props.collection.name}
                                        url={gif.url} 
                                        title={gif.title} 
                                        id={gif.id} 
                                        key={gif.id} 
                                        src={gif.src} 
                                    />
                                </Carousel.Item>
                            </Carousel>);
            }
        )}};

        return (
            <Jumbotron className="rounded m-2 w-auto">
                <h1>{this.props.collection.name}</h1>
                <p>The name of this collection is {this.props.collection.name}</p>
                {renderCarousel()}
            </Jumbotron>
        )
    }
};
