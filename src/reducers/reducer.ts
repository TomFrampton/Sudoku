import { AnyAction } from 'redux';

import { BLOCK_COORDS } from 'typings/numbers';
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

        case types.FILL_BLOCK:
            if (state.solvedGrid && state.workingGrid) {
                const coords = action.coords as BLOCK_COORDS;

                if (state.solvedGrid.getValue(coords.rowIndex, coords.colIndex) !== action.value) {
                    alert('Incorrect option!');
                    return state;
                }

                const workingGridClone = state.workingGrid.clone();
                workingGridClone.setValue(coords.rowIndex, coords.colIndex, action.value);

                if (workingGridClone.isComplete()) {
                    alert('Completed!');
                }

                return { ...state, workingGrid: workingGridClone };
            }

            return state;

        case types.SELECT_BLOCK:
            return { ...state, selectedBlock: action.coords };

        default:
            return state;
    }
}