import React, { Component } from 'react'
import Collection from '../components/Collection';

export default class CollectionsContainer extends Component {

    render() {

        const renderCollections = () => {
            return this.props.collections.map(collection => <Collection key={collection.id} collection={collection} />)
        }

        return (
            <div className="">
                {renderCollections()}
            </div>
        )
    }
}
