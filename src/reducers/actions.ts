import { Action } from 'redux';
import * as types from './types';

export function createGrid(): Action {
    return { type: types.CREATE_GRID };
}