import React from 'react';

export default function CollectionsContainer(props) {
    
    return (
        <div className="w-50 m-auto">
            {props.renderCollectionContainers()}
        </div>
    )
}
