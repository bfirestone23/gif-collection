import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class RemoveButton extends Component {
    render() {
        return (
            <Button size='sm' className='add_gif rounded p-1 m-1 w-auto' id={this.props.gifData.id} onClick={() => this.props.removeGif(this.props.gifData)}>
                -
            </Button>
        )
    }
}
