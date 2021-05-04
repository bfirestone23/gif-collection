import React, { Component } from 'react';
import GifSearch from '../components/GifSearch';
import GifList from './GifList';
import { Container } from 'react-bootstrap';


export default class GifListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gifs: []
        }
    }

    // componentDidMount = () => {
    //     this.fetchData();
    // }

    fetchData = (query = '') => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(resp => resp.json())
        .then(({data}) => {
            this.setState({
                gifs: data.slice(0, 10)
            })
        })
    }

    render() {
        return (
            <Container>
                <GifSearch getGifs={this.fetchData} />
                <GifList gifs={this.state.gifs} />
            </Container>
        )
    }
}