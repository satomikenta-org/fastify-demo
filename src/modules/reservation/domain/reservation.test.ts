import { expect } from '@jest/globals';
import { testFn } from './reservation';

const integerNumbers = [
  [-1, -2],
  [0, 0],
  [3, 6],
];

test.each(integerNumbers)('double passes for integer value %j with result %j', (fixture, result) =>
  expect(testFn(fixture)).toBe(result)
);
