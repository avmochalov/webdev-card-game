import { strict as assert } from 'assert';
import { describe, expect, it } from '@jest/globals';
import { time } from '../components/time';
it('should tagret time format 00.00', () => {
    const originalTime = 62;
    const expected = '01.02';
    const result = time(originalTime);
    expect(expected).toBe(result);
});