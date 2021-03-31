import { Action, AnyAction } from 'redux';

import { BLOCK_COORDS } from 'typings/numbers';
import * as types from './types';

export function createGrid(): Action {
    return { type: types.CREATE_GRID };
}

export function selectBlock(coords: BLOCK_COORDS) : AnyAction {
    return { type: types.SELECT_BLOCK, coords };
}