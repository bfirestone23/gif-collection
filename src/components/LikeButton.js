import React from 'react'
import { Button } from 'react-bootstrap'

export default function LikeButton(props) {
    return (
        <div>
            <Button size='sm' variant='outline-success' onClick={() => props.likeCollection(props.collectionId, props.likes)}>Like</Button>
        </div>
    )
}
