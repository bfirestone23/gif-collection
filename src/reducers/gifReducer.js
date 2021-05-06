const gifReducer = (state = { collections: [], activeCollection: 'none' }, action) => {
    switch(action.type) {
        case 'gif/remove':
            let updatedCollectionsState = state.collections.map(collection => {
                if (collection.id === action.gifData.collectionId) {
                    return { ...collection, gifs: collection.gifs.filter(gif => gif.id !== action.gifData.id) };
                } else {
                    return collection;
                }
            })

            return { ...state, collections: updatedCollectionsState };
        case 'collection/select':
            const selectedCollection = state.collections.find(collection => collection.name === action.collection)
            return { ...state, activeCollection: selectedCollection.id };
        case 'collection/add':
            return { ...state, collections: state.collections.concat(action.collection) };
        case 'collections/get':
            return { ...state, collections: state.collections.concat(action.collections) };
        case 'gif/add':
            let gifObj = { url: action.data.url, preview: action.data.preview, title: action.data.title, src: action.data.src, id: action.data.id }

            let newCollectionsState = state.collections.map(collection => {
                if (collection.id === action.data.collection.id) {
                    return { ...collection, gifs: collection.gifs.concat(gifObj) }
                } else {
                    return collection;
                }
            })

            return { ...state, collections: newCollectionsState };
        default:
            return state;
    }
}

export default gifReducer;