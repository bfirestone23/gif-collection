export const searchGifs = (query = '') => {
    return dispatch => {
        dispatch({ type: 'loading' })
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=whWVnDKBuLMTYPEff0uPCWCqzQWP2iwv`)
        .then(resp => resp.json())
        .then(data => {
            dispatch({ type: 'search', gifs: data.data })
        })
    };
};

export const updateCurrentPage = pageNumber => {
    return dispatch => {
        dispatch({ type: 'updatePage', pageNumber })
    }
}