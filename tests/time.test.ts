import { time } from '../components/time';
import { strict as assert } from 'assert';
{
    const originalTime = 90;
    const expected = '01.30';

    const result = time(originalTime);
    assert.equal(result, expected);
}