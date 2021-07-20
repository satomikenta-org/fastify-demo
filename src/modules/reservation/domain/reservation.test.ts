import { expect } from "@jest/globals";
import { testFn } from "./reservation";

test("double 1 equal to 2", () => {
  expect(testFn(1)).toBe(2);
});
