const gifReducer = (state = { collections: [{name: 'test', id: 1, gifs: []}] }, action) => {
    switch(action.type) {
        case 'collection/add':
            debugger;
            break;
        case 'collection/remove':
            debugger;
            // add gif to collection
            // remove gif from collection
            break;
        default:
            return state;
    }
}

export default gifReducer;