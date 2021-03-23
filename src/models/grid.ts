import { GRID, INDEX, N } from 'typings/numbers';

const EMPTY_GRID: GRID = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
];

export class Grid {
    constructor(private grid: GRID = EMPTY_GRID) {}

    getValue(row: INDEX, column: INDEX): N {
        return this.grid[row][column];
    }

    setValue(row: INDEX, column: INDEX, value: N) {
        this.grid[row][column] = value;
    }

    patchGrid(grid: GRID) {
        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                this.grid[r][c] = grid[r][c];
            }
        }
    }

    clone() {
        const clonedGrid = this.grid.map(row => ([...row])) as GRID;
        return new Grid(clonedGrid);
    }
}