import { Grid } from 'models/grid';
import { fillGrid } from './fill-grid';

describe('fillGrid', () => {
    it('should consistently fill an empty grid successfully', () => {
        for (let i = 0; i < 100; i++) {
            const grid = new Grid();
            fillGrid(grid);
            expect(grid.isComplete()).toBeTruthy();
        }
    });

    it('should throw an error if a non-empty grid is supplied', () => {
        const grid = new Grid();

        grid.setValue(0, 0, 1);

        expect(() => fillGrid(grid)).toThrowError();
    });
})