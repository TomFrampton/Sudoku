import { Grid } from 'models/grid';
import { INDEX } from 'typings/numbers';

export function fillGrid(grid: Grid) {
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            if (grid.getValue(r as INDEX, c as INDEX) === 0) {

            }
        }
    }
}

