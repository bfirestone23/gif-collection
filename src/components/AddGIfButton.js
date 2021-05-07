import React from 'react';
import { Button } from 'react-bootstrap';

export default function AddGifButton(props) {
    return (
        <Button 
            size='sm' 
            variant='success'
            className='add-gif my-button rounded p-2 m-1 w-auto' 
            id={props.gifData.id} 
            onClick={() => props.addGif(props.gifData)}>
            +
        </Button>
    );
};