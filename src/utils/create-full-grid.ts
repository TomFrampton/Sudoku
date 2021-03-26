import { Grid } from 'models';
import { fillGrid } from 'utils';

/**
 * Creates a full, valid Sudoku grid.
 */
export function createFullGrid() {
    var grid = new Grid();
    fillGrid(grid);
    return grid;
}