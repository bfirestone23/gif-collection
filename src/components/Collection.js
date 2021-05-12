import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

export default function Collection(props) {
    return (
        <Jumbotron className='position-relative rounded m-2 w-auto'>
            <Button 
                variant='danger' 
                size='sm' 
                style={{top: '.5rem', left: '.5rem'}} 
                className='position-absolute py-0 m-1 w-auto align-text-center'
                onClick={() => props.removeCollection(props.collection.id)}>
                    x
            </Button>
            <h3 className='m-2' >{props.collection.name} by {props.collection.user.username}</h3>
            {props.renderPreview()}
        </Jumbotron>
    )
};