import { Grid } from 'models/grid';
import { INDEX, NUMBER } from 'typings/numbers';
import { shuffle } from 'utils';

const numbers: NUMBER[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export function fillGrid(grid: Grid) {
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            if (grid.getValue(r as INDEX, c as INDEX) === 0) {
                const shuffled = shuffle(numbers);
            }
        }
    }
}

