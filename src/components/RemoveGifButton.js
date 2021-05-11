import React, { Component} from 'react';
import { Button } from 'react-bootstrap';

export default class RemoveGifButton extends Component {
    render() {
        return (
            <Button
                size='sm' 
                variant='danger'
                className='
                            remove-gif 
                            rounded 
                            position-absolute 
                            py-0 
                            m-1 
                            w-auto 
                            align-text-center' 

                id={this.props.gifData.id} 
                onClick={() => this.props.removeGif(this.props.gifData)}>
                -
            </Button>
        )
    }
}


