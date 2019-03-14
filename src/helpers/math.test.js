import { sum, diff } from './math';

test('Sum of 2 and 3', () => {
  expect(sum(2)(3)).toBe(5);
});

test('Diff of 2 and 3', () => {
  expect(diff(2)(3)).toBe(-1);
});
