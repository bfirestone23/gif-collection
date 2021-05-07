import React from 'react';
import CollectionForm from '../components/CollectionForm';

export default function CollectionFormContainer(props) {
    return (
        <div>
            <CollectionForm addCollection={props.addCollection} />
        </div>
    )
}