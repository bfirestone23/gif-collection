import React, { Component} from 'react';
import { Button } from 'react-bootstrap';

export default class AddGifButton extends Component {
    render() {
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
                            
                id={this.props.gifData.id} 
                onClick={() => this.props.addGif(this.props.gifData)}>
                +
            </Button>
        )
    }
}