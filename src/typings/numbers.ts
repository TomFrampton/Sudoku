export type NUMBER = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export type INDEX = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export type PLACEHOLDER = 0;

export type N =  NUMBER | PLACEHOLDER;

export type ROW = [N, N, N, N, N, N, N, N, N];
export type GRID = [ROW, ROW, ROW, ROW, ROW, ROW, ROW, ROW, ROW];

export type BLOCK_COORDS = {
    rowIndex: INDEX,
    colIndex: INDEX
}


