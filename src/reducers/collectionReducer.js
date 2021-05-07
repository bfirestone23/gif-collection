// const collectionReducer = (state = { searchResults: [], collections: [], activeCollection: 'none', isLoading: false }, action) => {
//     switch(action.type) {
//         case 'collection/select':
//             const selectedCollection = state.collections.find(collection => collection.name === action.collection)
//             return { ...state, activeCollection: selectedCollection.id };
//         case 'collection/add':
//             return { ...state, collections: state.collections.concat(action.collection) };
//         case 'collections/loading':
//             return { ...state, isLoading: true };
//         case 'collections/get':
//             return { ...state, collections: [...state.collections.concat(action.collections)], isLoading: false };
//         default:
//             return state;
//     }
// }

// export default collectionReducer;