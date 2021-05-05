import React, { Component } from 'react';
import GifSearch from '../components/GifSearch';

export default class GifSearchContainer extends Component {
    render() {
        return (
            <div>
                <GifSearch getGifs={this.props.getGifs} />
            </div>
        )
    }
}
