export const selectCollection = (e) => {
    return { type: 'collection/select', collection: e.target.value }
}

export const addCollection = (collection) => {
    return dispatch => {
        fetch('http://localhost:3001/collections', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: collection})
        })
            .then(response => response.json())
            .then(collection => dispatch({ type: 'collection/add', collection}))
    }
}

export const removeCollection = collectionId => {
    return dispatch => {
        dispatch({ type: 'collection/remove', collectionId })
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
        dispatch({ type: 'collections/loading' })
        fetch('http://localhost:3001/collections')
            .then(response => response.json())
            .then(collections => dispatch({ type: 'collections/get', collections }));
    };
}