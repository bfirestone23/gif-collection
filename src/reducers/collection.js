const collection = (state = 
    { collections: [], 
        activeCollection: { name: 'none' }, 
        isLoading: false, 
        isError: false,
    }, action) => {

    switch(action.type) {
        case 'select':
            let selectedCollection = state.collections.find(collection => collection.name === action.collection)
            return { ...state, activeCollection: selectedCollection };
        case 'add':
            return { ...state, collections: state.collections.concat(action.collection) };
        case 'remove':
            return { ...state, collections: state.collections.filter(c => c.id !== action.collectionId) }
        case 'loading':
            return { ...state, isLoading: true };
        case 'get':
            return { ...state, collections: [...state.collections.concat(action.collections)], isLoading: false };
        case 'like':
            debugger;
            break;
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
        default:
            return { ...state, isLoading: false };
        }
    }

export default collection;