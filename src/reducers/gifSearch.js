const gifSearch = (state = 
    { searchResults: [], 
      isLoading: false, 
      isError: false, 
      currentPage: 1, 
      itemsPerPage: 15,
    }, action) => {

    switch(action.type) {
        case 'loading':
            return { ...state, isLoading: true };
        case 'search':
            return { ...state, searchResults: action.gifs, isLoading: false, isError: false }
        case 'updatePage':
            return { ...state, currentPage: action.pageNumber };
        default:
            return { ...state, isLoading: false };
    }
}

export default gifSearch;