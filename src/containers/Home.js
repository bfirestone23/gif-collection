import React, { Component } from 'react';
import GifListContainer from './GifListContainer';
import GifSearchContainer from './GifSearchContainer';
import CollectionSelector from '../components/CollectionSelector';
import { Jumbotron, Accordian } from 'react-bootstrap';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gifs: [],
            active_collection: 'none'
        }
    }

    fetchData = (query = '') => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC`)
        .then(resp => resp.json())
        .then(({data}) => {
            this.setState({
                gifs: data.slice(0, 10)
            })
        })
    }

    selectCollection = (e) => {
        this.setState({
            active_collection: e.target.value
        })
    }

    render() {
        return (
            <div>   
                <Jumbotron fluid>
                    <CollectionSelector collections={this.props.collections} selectCollection={this.selectCollection} activeCollection={this.state.active_collection} />
                    <GifSearchContainer getGifs={this.fetchData} />
                </Jumbotron>
                
                <GifListContainer activeCollection={this.state.active_collection} addGif={this.props.addGif} gifs={this.state.gifs} />
            </div>
        )
    }
}
