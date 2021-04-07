import { getRandomIndex } from './get-random-index';

describe('getRandomIndex', () => {
    it('should return an integer value between 0 and 8', () => {
        const randomIndex = getRandomIndex();

        expect(randomIndex).toEqual(Math.floor(randomIndex));
        expect(randomIndex).toBeGreaterThanOrEqual(0);
        expect(randomIndex).toBeLessThanOrEqual(8);
    });
});