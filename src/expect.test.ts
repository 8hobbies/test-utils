import {
  expectToBeDefined,
  expectToBeNonNull,
  expectToBeNull,
  expectToBeUndefined,
} from "./expect.js";

describe("expect toBeDefined/Undefined", () => {
  test("expectToBeDefined asserts that type is not undefined", () => {
    const arg: number | undefined = 1;
    expectToBeDefined(arg);
    const someNumber: number = arg; // TS compilation passes because arg is a number.
    someNumber;
  });

  test("expectToBeUndefined asserts that type is undefined", () => {
    const arg: number | undefined = undefined;
    expectToBeUndefined(arg);
    const someUndefined: undefined = arg; // TS compilation passes because arg is undefined.
    someUndefined;
  });
});

describe("expect toBeNonNull/Null", () => {
  test("expectToBeNonNull asserts that type is not null", () => {
    const arg: number | null = 1;
    expectToBeNonNull(arg);
    const someNumber: number = arg; // TS compilation passes because arg is a number.
    someNumber;
  });

  test("expectToBeNull asserts that type is undefined", () => {
    const arg: number | null = null;
    expectToBeNull(arg);
    const someNull: null = arg; // TS compilation passes because arg is null.
    someNull;
  });
});
