import uuid from 'uuid';

const gifReducer = (state = { collections: [{name: 'test', id: 1, gifs: []}, {name: 'test2', id: 2, gifs: []}] }, action) => {
    switch(action.type) {
        case 'collection/add':
            const collection = {name: action.collection, id: uuid(), gifs: []};
            return {...state, collections: state.collections.concat(collection)};
        case 'collection/remove':
            debugger;
            break;
        case 'gif/add':

            let newCollectionsState = state.collections.map(collection => {
                if (collection.name === action.gifData.collection.name) {
                    return { ...collection, gifs: collection.gifs.concat(action.gifData.gif) };
                } else {
                    return collection; 
                }
            });
            
            return { ...state, collections: newCollectionsState };
        default:
            return state;
    }
}

export default gifReducer;