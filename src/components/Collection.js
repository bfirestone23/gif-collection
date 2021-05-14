import React from 'react';
import { Jumbotron } from 'react-bootstrap';

export default function Collection(props) {
    return (
        <Jumbotron className='position-relative rounded mx-auto mb-3 w-75'>
            {props.renderButton()}
            <h3>{props.collection.name}</h3><h6> by {props.collection.user.username}</h6> 
            {props.renderPreview()}
        </Jumbotron>
    )
};