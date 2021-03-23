import { shuffle } from './';

describe('shuffle', () => {
    it ('should return an array with the same length after being shuffled', () => {
        const array = [1, 2, 3];
        const output = shuffle(array);

        expect(output).toHaveLength(3);
    });

    it ('should return an array containing the same elements after being shuffled', () => {
        const array = [1, 2, 3];
        const output = shuffle(array);

        expect(output).toContain(1);
        expect(output).toContain(2);
        expect(output).toContain(3);
    });

    it ('should return an array that is not the same object as the input array', () => {
        const array = [1, 2, 3];
        const output = shuffle(array);

        expect(output).not.toBe(array);
    });
})