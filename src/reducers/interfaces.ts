import { Grid } from "models";
import { BLOCK_COORDS } from "typings/numbers";

export interface IReducerState {
    grid?: Grid,
    selectedBlock?: BLOCK_COORDS
}