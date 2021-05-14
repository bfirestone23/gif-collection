import React from 'react';
import { Button } from 'react-bootstrap';

export default function AddGifButton(props) {
        return (
            <Button
                size='sm' 
                variant='success'
                className='
                            add-gif 
                            rounded 
                            position-absolute 
                            py-0 
                            m-1 
                            w-auto 
                            align-text-center' 
                            
                id={props.gifData.id} 
                onClick={() => props.addGif(props.gifData)}>
                +
            </Button>
        )
    }