import { Grid } from 'models';
import { INDEX } from 'typings/numbers';
import { getRandomIndex, solveGrid } from 'utils';

export function removeNumbers(grid: Grid, attempts = 5) {
    let attemptsLeft = attempts;

    while (attemptsLeft > 0 && !grid.isEmpty()) {
        let row: INDEX = 0;
        let col: INDEX = 0;

        // Find a block that isn't 0
        do {
            row = getRandomIndex();
            col = getRandomIndex();
        }
        while (grid.getValue(row, col) === 0 && !grid.isEmpty());

        const savedValue = grid.getValue(row, col);
        grid.setValue(row, col, 0);

        const gridClone = grid.clone();
        const couldSolve = solveGrid(gridClone);

        if (!couldSolve) {
            grid.setValue(row, col, savedValue);
            attemptsLeft--;
        }
    }

    return grid;
}