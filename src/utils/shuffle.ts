
/**
 * Returns a shuffled array using the Fisher-Yates shuffle algorithm.
 * @param array The array to shuffle.
 */
export function shuffle(array: any[]) {
    const clone = [...array];

    for (let i = 0; i < clone.length; i++) {
        let j = Math.floor(Math.random() * (i + 1));
        ;[clone[i], clone[j]] = [clone[j], clone[i]];
    }

    return clone;
}