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


export const removeCollection = (collectionId) => {
    return { type: 'collection/remove', collectionId }
}

export const getCollections = () => {
    return dispatch => {
        fetch('http://localhost:3001/collections')
            .then(response => response.json())
            .then(collections => dispatch({ type: 'collections/get', collections }));
    };
}