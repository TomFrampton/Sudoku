import { Grid } from 'models';
import { INDEX, NUMBER } from 'typings/numbers';

const numbers: NUMBER[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/**
 * Function to try to solve a sudoku grid.
 * @param grid The grid.
 * @returns Whether or not the grid could be solved.
 */
export function solveGrid(grid: Grid) {
    if (!grid.isLegal()) {
        throw new Error('Illegal grid supplied');
    }

    let row = 0 as INDEX;
    let col = 0 as INDEX;

    for (let i = 0; i < 81; i++) {
        row = Math.floor(i / 9) as INDEX;
        col = i % 9 as INDEX;

        if (grid.getValue(row, col) === 0) {
            for (let value of numbers) {
                if (!grid.isInRow(row, value) && !grid.isInColumn(col, value) && !grid.isInSquare(row, col, value)) {
                    grid.setValue(row, col, value);

                    if (grid.isComplete()) {
                        return true;
                    }
                    else if (solveGrid(grid)) {
                        return true
                    }
                }
            }
        }
    }

    grid.setValue(row, col, 0);
    return false;
}
