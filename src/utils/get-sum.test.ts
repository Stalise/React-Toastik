import { getSum } from './get-sum';

describe('get-sum', () => {
  it('should return 10', () => {
    // eslint-disable-next-line @typescript-eslint/no-inferrable-types
    const value: number = 10;

    expect(getSum()).toBe(value);
  });
});
