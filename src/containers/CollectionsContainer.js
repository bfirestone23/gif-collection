import React, { Component } from 'react'
import Collection from '../components/Collection';

export default class CollectionsContainer extends Component {
    
    renderCollections = () => {
        return this.props.collections.map(collection => <Collection key={collection.id} collection={collection} removeGif={this.props.removeGif}/>)
    }


    render() {
        return (
            <div className="">
                {this.renderCollections()}
            </div>
        )
    }
}
