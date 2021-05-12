export const setStatus = () => {
    return (dispatch) => {
        let user = { username: window.localStorage.getItem('username') }

        if (user.username) {
            dispatch({ type: 'setUser', payload: user });
        } else {
            dispatch({ type: 'noUser' })
        }
    }
}

export const login = (user) => {
    window.localStorage.setItem('username', user.username)
    return { type: 'setUser', payload: user }
}

export const logout = () => {
    window.localStorage.removeItem('username')
    return { type: 'logout' }
}