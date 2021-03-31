import { AnyAction } from 'redux';

import { createFullGrid } from 'utils';
import { IReducerState } from './interfaces';
import * as types from './types';

const initialState: IReducerState = {};

export function reducer(state = initialState, action: AnyAction): IReducerState {
    switch (action.type) {
        case types.CREATE_GRID:
            return { ...state, grid: createFullGrid() };

        case types.SELECT_BLOCK:
            return { ...state, selectedBlock: action.coords };

        default:
            return state;
    }
}