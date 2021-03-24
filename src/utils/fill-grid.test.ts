import { Grid } from 'models/grid';
import { GRID } from 'typings/numbers';
import { fillGrid } from './fill-grid';

// Hard grid - https://www.sudokudragon.com/unsolvable.htm
const getHardGrid = (): GRID => [
    [0, 0, 0, 0, 7, 4, 3, 1, 6],
    [0, 0, 0, 6, 0, 3, 8, 4, 0],
    [0, 0, 0, 0, 0, 8, 5, 0, 0],
    [7, 2, 5, 8, 0, 0, 0, 3, 4],
    [0, 0, 0, 0, 3, 0, 0, 5, 0],
    [0, 0, 0, 0, 0, 2, 7, 9, 8],
    [0, 0, 8, 9, 4, 0, 0, 0, 0],
    [0, 4, 0, 0, 8, 5, 9, 0, 0],
    [9, 7, 1, 3, 2, 6, 4, 8, 5]
];

describe('fillGrid', () => {
    it('should consistently fill an empty grid successfully', () => {
        for (let i = 0; i < 100; i++) {
            const grid = new Grid();
            fillGrid(grid);
            expect(grid.isComplete()).toBeTruthy();
        }
    });

    it('should consistenty fill a partially filled grid', () => {
        for (let i = 0; i < 100; i++) {
            const grid = new Grid(getHardGrid());
            fillGrid(grid);
            expect(grid.isComplete()).toBeTruthy();
        }
    });

    it('should consistently fail to fill an unsolvable partially filled grid without throwing error', () => {
        for (let i = 0; i < 100; i++) {
            // Unsolvable
            const grid = new Grid(getHardGrid());
            grid.setValue(0, 0, 2);

            fillGrid(grid);

            expect(grid.isComplete()).toBeFalsy();
        }
    });

    it('should throw an error if an illegal grid is supplied', () => {
        const grid = new Grid();

        grid.setValue(0, 0, 1);
        grid.setValue(0, 1, 1);

        expect(() => fillGrid(grid)).toThrowError();
    });
})