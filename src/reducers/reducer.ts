import { AnyAction } from 'redux';

import { createFullGrid } from 'utils';
import { IState } from './interfaces';
import * as types from './types';

const initialState: IState = {};

export function reducer(state = initialState, action: AnyAction): IState {
    switch (action.type) {
        case types.CREATE_GRID:
            return { ...state, grid: createFullGrid() }
        default:
            return state;
    }
}