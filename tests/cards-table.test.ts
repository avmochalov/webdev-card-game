import { describe, expect, it } from '@jest/globals';
import { cardsTableGenerate } from '../components/cards-table';

describe('cards-table', () => {
    describe('cards-table-array', () => {
        it('should target array length for levels', () => {
            for (let level = 1; level < 4; level++) {
                expect(cardsTableGenerate(level * 6)).toHaveLength(level * 6);
            }
        });
    });
});
