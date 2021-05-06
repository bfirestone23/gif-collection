import React, { Component } from 'react';
import GifListContainer from './GifListContainer';
import GifSearchContainer from './GifSearchContainer';
import CollectionSelector from '../components/CollectionSelector';
import { Jumbotron } from 'react-bootstrap';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gifs: []
        }
    }

    fetchData = (query = '') => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC`)
        .then(resp => resp.json())
        .then(({data}) => {
            console.log(data);
            this.setState({
                gifs: data.slice(0, 10)
            })
        })
    }

    render() {
        return (
            <div>   
                <Jumbotron fluid>
                    <CollectionSelector collections={this.props.collections} selectCollection={this.props.selectCollection} activeCollection={this.props.activeCollection} />
                    <GifSearchContainer getGifs={this.fetchData} />
                </Jumbotron>
                
                <GifListContainer activeCollection={this.props.activeCollection} addGif={this.props.addGif} gifs={this.state.gifs} />
            </div>
        )
    }
}
