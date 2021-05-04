export const addCollection = (collection) => {
    return { type: 'collection/add', collection }
}

export const removeCollection = (collectionId) => {
    return { type: 'collection/remove', collectionId }
}