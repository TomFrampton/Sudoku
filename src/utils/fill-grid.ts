import { Grid } from 'models/grid';
import { INDEX, NUMBER } from 'typings/numbers';
import { shuffle } from 'utils';

const numbers: NUMBER[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export function fillGrid(grid: Grid) {
    if (!grid.isEmpty()) {
        throw Error('Fill grid function requires an empty grid');
    }

    fillBlock(grid, 0);
}

export function fillBlock(grid: Grid, index: number) {
    const row = Math.floor(index / 9) as INDEX;
    const col = index % 9 as INDEX;

    if (grid.getValue(row, col) === 0) {
        const shuffled = shuffle(numbers);

        for (let value of shuffled) {
            if (!grid.isInRow(row, value) && !grid.isInColumn(col, value) && !grid.isInSquare(row, col, value)) {
                grid.setValue(row, col, value);

                if (grid.isComplete()) {
                    return true;
                }
                else if (fillBlock(grid, index + 1)) {
                    return true;
                }
            }
        }
    }

    grid.setValue(row, col, 0);
    return false;
}

