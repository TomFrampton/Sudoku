import { GRID, INDEX, N } from 'typings/numbers';
import { Grid } from './grid';

const gridValues = (): GRID => [
    [8, 4, 2, 6, 5, 1, 3, 9, 7],
    [5, 3, 7, 2, 8, 9, 6, 4, 1],
    [6, 9, 1, 7, 3, 4, 5, 2, 8],
    [1, 6, 3, 8, 4, 5, 9, 7, 2],
    [7, 5, 8, 1, 9, 2, 4, 6, 3],
    [9, 2, 4, 3, 7, 6, 1, 8, 5],
    [4, 7, 6, 5, 1, 8, 2, 3, 9],
    [2, 8, 5, 9, 6, 3, 7, 1, 4],
    [3, 1, 9, 4, 2, 7, 8, 5, 6]
];

describe('grid', () => {
    describe('constructor', () => {
        it('should have same values as inputted grid', () => {
            const originalValues = gridValues();
            const grid = new Grid(originalValues);

            for (let r = 0 as INDEX; r < 9; r++) {
                for (let c = 0 as INDEX; c < 9; c++) {
                    expect(grid.getValue(r, c)).toEqual(originalValues[r][c]);
                }
            }
        });

        it('should copy values from inputted grid instead of using inputted grid directly', () => {
            const originalValues = gridValues();
            const grid = new Grid(originalValues);

            grid.setValue(0, 0, 0);

            expect(originalValues[0][0]).not.toEqual(0);
        });
    });

    describe('isInRow', () => {
        it('should return true when value is in the row', () => {
            const grid = new Grid(gridValues());

            expect(grid.isInRow(0, 9)).toBeTruthy();
            expect(grid.isInRow(5, 9)).toBeTruthy();
            expect(grid.isInRow(8, 9)).toBeTruthy();
        });

        it('should return false when value is not in the row', () => {
            const grid = new Grid(gridValues());

            grid.setValue(0, 0, 0);
            grid.setValue(5, 5, 0);
            grid.setValue(8, 8, 0);

            expect(grid.isInRow(0, 8)).toBeFalsy();
            expect(grid.isInRow(5, 6)).toBeFalsy();
            expect(grid.isInRow(8, 6)).toBeFalsy();
        });
    });

    describe('clone', () => {
        it('should have same values as original grid', () => {
            const original = new Grid(gridValues());
            const clone = original.clone();

            for (let r = 0 as INDEX; r < 9; r++) {
                for (let c = 0 as INDEX; c < 9; c++) {
                    expect(clone.getValue(r, c)).toEqual(original.getValue(r, c));
                }
            }
        });

        it('should create an entirely new Grid object', () => {
            const original = new Grid(gridValues());
            const clone = original.clone();

            expect(clone).not.toBe(original);
        });

        it('should create an entirely new grid 2D array under the hood', () => {
            const original = new Grid(gridValues());
            const clone = original.clone();

            clone.setValue(0, 0, 0);

            expect(original.getValue(0, 0)).not.toEqual(0);
        });
    });
});