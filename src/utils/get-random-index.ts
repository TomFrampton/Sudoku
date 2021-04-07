import { INDEX } from 'typings/numbers';

/**
 * Generates a random sudoku grid index (integer value between 0 and 8).
 * @returns The index.
 */
export function getRandomIndex(): INDEX {
    return Math.floor(Math.random() * 9) as INDEX;
}