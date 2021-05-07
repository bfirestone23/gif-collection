import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import gifReducer from './reducers/gifReducer';

export function configureStore() {
    return createStore(
        gifReducer,
        compose(
            applyMiddleware(thunk)
        )
    );
}

export const store = configureStore();