import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import { reducer } from 'reducers';

export function configureStore(initialState = {}) {
    return createStore(reducer, initialState, devToolsEnhancer({}))
}