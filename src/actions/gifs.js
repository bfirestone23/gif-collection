export const addGif = (gifData) => {
    return dispatch => {
        fetch(`http://localhost:3001/collections/${gifData.activeCollection}/gifs`, {
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
                    collection_id: gifData.activeCollection
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