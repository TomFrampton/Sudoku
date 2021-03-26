import { createFullGrid } from './create-full-grid';

describe('createFullGrid', () => {
    it('should create a full, valid sudoku grid', () => {
        var grid = createFullGrid();

        expect(grid.isComplete()).toBeTruthy();
        expect(grid.isLegal()).toBeTruthy();
    });
});

