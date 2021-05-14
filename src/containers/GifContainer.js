import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddGifButton from '../components/AddGifButton';
import RemoveGifButton from '../components/RemoveGifButton';
import Gif from '../components/Gif';
import { Spinner } from 'react-bootstrap';

class GifContainer extends Component {
    state = {
        imageLoaded: false
    }

    renderGifs = () => {
        if (this.props.isLoading) {
            return <Spinner className='m-5' animation='border' variant='primary' />
        } else {
            return (
                <Gif 
                    activeCollection={this.props.activeCollection}
                    addGif={this.props.addGif} 
                    url={this.props.url} 
                    title={this.props.title} 
                    id={this.props.id} 
                    key={this.props.id} 
                    src={this.props.src}
                    preview={this.props.preview} 
                    renderButton={this.renderButton}
                    handleLoad={this.handleLoad}
                />
            )
        }
    }

    renderButton = () => {
        if (Object.keys(this.props).includes('addGif') && this.state.imageLoaded) {
            return <AddGifButton addGif={this.props.addGif} gifData={this.props} />
        } else if (Object.keys(this.props).includes('removeGif') && this.state.imageLoaded && (this.props.currentUser === this.props.collectionUser)) {
            return <RemoveGifButton removeGif={this.props.removeGif} gifData={this.props} />
        }
    }

    handleLoad = () => {
        this.setState({
            imageLoaded: true
        })
    }

    render() {
        return (
            <div>
                {this.renderGifs()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.user.username
    }
}

export default connect(mapStateToProps)(GifContainer);