import React, { Component } from 'react';
import AddButton from './AddButton';
import RemoveButton from './RemoveButton';

export default class Gif extends Component {

    renderButton = () => {
        if (Object.keys(this.props).includes('addGif')) {
            return <AddButton addGif={this.props.addGif} gifData={this.props} />
        } else if (Object.keys(this.props).includes('removeGif')) {
            return <RemoveButton removeGif={this.props.removeGif} gifData={this.props} />
        }
    }

    render() {
        return (
            <div>
                {this.renderButton()}
                <a rel='noreferrer' target='_blank' href={this.props.url}>
                    <img className='gif rounded img-fluid m-1' alt={this.props.title} src={this.props.src} />
                </a>
            </div>
        );
    }
}