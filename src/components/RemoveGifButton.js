import React from 'react';
import { Button } from 'react-bootstrap';

export default function RemoveGifButton(props) {
    return (
        <Button 
            size='sm' 
            variant='danger'
            className='remove-gif my-button rounded p-1 m-1 w-auto' 
            id={props.gifData.id} 
            onClick={() => props.removeGif(props.gifData)}>
            -
        </Button>
    )
}
