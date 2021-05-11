import React from 'react';
import CollectionsContainer from './CollectionsContainer';
import CollectionFormContainer from './CollectionFormContainer';
import CollectionContainer from './CollectionContainer';

export default function Library(props) {

    const renderCollectionContainers = () => {
        return props.collections.map(collection => <CollectionContainer 
                                                            key={collection.id} 
                                                            collection={collection} 
                                                            removeCollection={props.removeCollection} 
                                                            removeGif={props.removeGif}
                                                        />)
    }

    return (
        <div className='Library'>
            <CollectionFormContainer addCollection={props.addCollection} />
            <CollectionsContainer 
                renderCollectionContainers={renderCollectionContainers}
                collections={props.collections} 
                removeCollection={props.removeCollection} 
                removeGif={props.removeGif}
            />
        </div>
    )
}

