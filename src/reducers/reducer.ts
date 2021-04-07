import { AnyAction } from 'redux';

import { createFullGrid, removeNumbers } from 'utils';
import { IReducerState } from './interfaces';
import * as types from './types';

const initialState: IReducerState = {};

export function reducer(state = initialState, action: AnyAction): IReducerState {
    switch (action.type) {
        case types.CREATE_GRID:
            const solvedGrid = createFullGrid();
            const challengeGrid = removeNumbers(solvedGrid.clone());
            const workingGrid = challengeGrid.clone();

            return { ...state, solvedGrid, challengeGrid, workingGrid };

        case types.SELECT_BLOCK:
            return { ...state, selectedBlock: action.coords };

        default:
            return state;
    }
}