const gifReducer = (state = 
    { searchResults: [], 
      collections: [], 
      activeCollection: 'none', 
      isLoading: false, 
      isError: false, 
      currentPage: 1, 
      itemsPerPage: 15 
    }, action) => {

    switch(action.type) {
        case 'collection/select':
            const selectedCollection = state.collections.find(collection => collection.name === action.collection)
            return { ...state, activeCollection: selectedCollection.id };
        case 'collection/add':
            return { ...state, collections: state.collections.concat(action.collection) };
        case 'collection/remove':
            return { ...state, collections: state.collections.filter(c => c.id !== action.collectionId) }
        case 'collections/loading':
            return { ...state, isLoading: true };
        case 'collections/get':
            return { ...state, collections: [...state.collections.concat(action.collections)], isLoading: false };
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
        case 'gif/remove':
            let updatedCollectionsState = state.collections.map(collection => {
                if (collection.id === action.gifData.collectionId) {
                    return { ...collection, gifs: collection.gifs.filter(gif => gif.id !== action.gifData.id) };
                } else {
                    return collection;
                }
            })

            return { ...state, collections: updatedCollectionsState };
        case 'gifs/loading':
            return { ...state, isLoading: true };
        case 'gif/search':
            return { ...state, searchResults: action.gifs, isLoading: false, isError: false }
        case 'gifs/updatePage':
            return { ...state, currentPage: action.pageNumber };
        default:
            return state;
    }
}

export default gifReducer;