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
    private grid: GRID;

    /**
     * Constructs a new grid by copying values from the inputted grid.
     * @param gridValues Optional. The Grid to copy or an empty grid if not supplied.
     */
    constructor(gridValues: GRID = EMPTY_GRID) {
        this.grid = gridValues.map(row => ([...row])) as GRID;
    }

    getValue(row: INDEX, column: INDEX): N {
        return this.grid[row][column];
    }

    setValue(row: INDEX, column: INDEX, value: N) {
        this.grid[row][column] = value;
    }

    isInRow(row: INDEX, value: N): boolean {
        return this.grid[row].includes(value);
    }

    isInColumn(column: INDEX, value: N): boolean {
        for (let r = 0 as INDEX; r < 9; r++) {
            if (this.getValue(r, column) === value) {
                return true;
            }
        }

        return false;
    }

    isInSquare(row: INDEX, column: INDEX, value: N) {
        const squareTopLeftRow = Math.floor(row / 3) * 3;
        const squareTopLeftColumn = Math.floor(column / 3) * 3;

        for (let r = 0; r < 3; r++) {
            const row = squareTopLeftRow + r as INDEX;

            for (let c = 0; c < 3; c++) {
                const col = squareTopLeftColumn + c as INDEX;

                if (this.getValue(row, col) === value) {
                    return true;
                }
            }
        }

        return false;
    }

    isComplete() {
        for (let r = 0 as INDEX; r < 9; r++) {
            for (let c = 0 as INDEX; c < 9; c++) {
                if (this.getValue(r, c) === 0) {
                    return false;
                }
            }
        }

        return true;
    }

    isEmpty() {
        for (let r = 0 as INDEX; r < 9; r++) {
            for (let c = 0 as INDEX; c < 9; c++) {
                if (this.getValue(r, c) !== 0) {
                    return false;
                }
            }
        }

        return true;
    }

    clone() {
        return new Grid(this.grid);
    }
}