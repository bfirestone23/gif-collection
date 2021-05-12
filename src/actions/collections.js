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