import { add } from '../src/funcs';

describe('add', (): void => {
    it('adds the given numbers', (): void => {
        const observed = add(10, 20);
        expect(observed).toEqual(30);
    });
});
