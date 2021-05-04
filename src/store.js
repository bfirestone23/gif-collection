import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import gifReducer from './reducers/gifReducer';

// const store = createStore(gifReducer, applyMiddleware(thunk))

// export default store;

export function configureStore() {
    return createStore(
        gifReducer,
        compose(
            applyMiddleware(thunk),
            window.__REDUX_DEVTOOLS_EXTENSION__ && 
                window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );
}

export const store = configureStore();