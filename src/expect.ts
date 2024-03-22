import { expect } from "vitest";

// expect().toBeDefined() with type assertion.
export function expectToBeDefined<T>(
  arg: T,
): asserts arg is Exclude<T, undefined> {
  expect(arg).toBeDefined();
}

// expect().toBeUndefined() with type assertion.
export function expectToBeUndefined(arg: unknown): asserts arg is undefined {
  expect(arg).toBeUndefined();
}

// expect().not.toBeNull() with type assertion.
export function expectToBeNonNull<T>(arg: T): asserts arg is Exclude<T, null> {
  expect(arg).not.toBeNull();
}

// expect().toBeNull() with type assertion.
export function expectToBeNull(arg: unknown): asserts arg is null {
  expect(arg).toBeNull();
}
