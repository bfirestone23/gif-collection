import React, { Component } from 'react';
import GifSearch from '../components/GifSearch';
import { connect } from 'react-redux';
import { searchGifs } from '../actions/gifs';

class GifSearchContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
        }
    }

    handleChange = (event) => {
        this.setState({
            query: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.searchGifs(this.state.query)
        this.setState({
            query: ''
        }) 
    }

    render() {
        return (
            <div>
                <GifSearch 
                    getGifs={this.props.getGifs}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    query={this.state.query} 
                />
            </div>
        )
    }
}

export default connect(null, { searchGifs })(GifSearchContainer);
