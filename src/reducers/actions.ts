import { Action, AnyAction } from 'redux';

import { BLOCK_COORDS, NUMBER } from 'typings/numbers';
import * as types from './types';

export function createGrid(): Action {
    return { type: types.CREATE_GRID };
}

export function fillBlock(coords: BLOCK_COORDS, value: NUMBER): AnyAction {
    return { type: types.FILL_BLOCK, coords, value };
}

export function selectBlock(coords: BLOCK_COORDS) : AnyAction {
    return { type: types.SELECT_BLOCK, coords };
}
