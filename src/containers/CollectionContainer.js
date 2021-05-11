import React from 'react';
import CollectionPreview from '../components/CollectionPreview';
import Collection from '../components/Collection';

export default function CollectionContainer(props) {

    const renderPreview = () => {
        if (props.collection.gifs.length === 0) {
            return <div>No gifs have been added to this collection.</div>
        } else {
            return <CollectionPreview 
                    collection={props.collection} 
                    removeGif={props.removeGif} 
                   />
        }
    }

    return (
        <div>
            <Collection 
                renderPreview={renderPreview}
                removeCollection={props.removeCollection} 
                collection={props.collection}
            />
        </div>
    )
}
