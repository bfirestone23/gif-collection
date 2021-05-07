import React from 'react'
import { Button, FormGroup, FormControl } from 'react-bootstrap';

export default function GifSearch(props) {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <FormGroup>
                    <FormControl 
                        className="w-50 m-auto" 
                        placeholder="Enter your search" 
                        name="query" 
                        value={props.query} 
                        onChange={props.handleChange} 
                        type="text" 
                    />
                    <Button 
                        className="submit m-3" 
                        type="submit">
                        Search Giphy
                    </Button>
                </FormGroup>
            </form>
        </div>
    )
}