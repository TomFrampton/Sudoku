import { Grid } from "models";
import { BLOCK_COORDS } from "typings/numbers";

export interface IReducerState {
    solvedGrid?: Grid,
    challengeGrid?: Grid,
    workingGrid?: Grid,
    selectedBlock?: BLOCK_COORDS
}