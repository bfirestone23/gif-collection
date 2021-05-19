export const selectCollection = (e) => {
    return { type: 'select', collection: e.target.value }
}

export const addCollection = (collection) => {
    return dispatch => {
        fetch('http://localhost:3001/collections', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ collection: { name: collection.name }, user: { username: collection.user } })
        })
            .then(response => response.json())
            .then(collection => dispatch({ type: 'add', collection}))
    }
}

export const removeCollection = collectionId => {
    return dispatch => {
        dispatch({ type: 'remove', collectionId })
        fetch(`http://localhost:3001/collections/${collectionId}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ collection: { id: collectionId } })
        })
    }
}

export const getCollections = () => {
    return dispatch => {
        dispatch({ type: 'loading' })
        fetch('http://localhost:3001/collections')
            .then(response => response.json())
            .then(collections => dispatch({ type: 'get', collections }));
    };
}

export const addGif = (gifData) => {
    return dispatch => {
        fetch(`http://localhost:3001/collections/${gifData.activeCollection.id}/gifs`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    src: gifData.src, 
                    url: gifData.url, 
                    preview: gifData.preview, 
                    title: gifData.title, 
                    collection_id: gifData.activeCollection.id
                })
        })
            .then(response => response.json())
            .then(data => dispatch({ type: 'gif/add', data }))
    }
}

export const removeGif = (gifData) => {
    return dispatch => {
        dispatch({ type: 'gif/remove', gifData })
        fetch(`http://localhost:3001/collections/${gifData.collectionId}/gifs/${gifData.id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                gif: {
                    id: gifData.id
                }
            })
        })
    }
}

export const likeCollection = (collectionId, currentLikes) => {
    return dispatch => {
        fetch(`http://localhost:3001/collections/${collectionId}`, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                collection: {
                    id: collectionId,
                    likes: currentLikes + 1
                }
            })
        })
            .then(resp => resp.json())
            .then(data => dispatch({ type: 'like', data }))
    }
}