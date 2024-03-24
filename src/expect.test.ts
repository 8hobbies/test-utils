/** @license Apache-2.0
 *
 * Copyright 2024 8 Hobbies, LLC <hong@8hobbies.com>
 *
 * Licensed under the Apache License, Version 2.0(the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  expectToBeDefined,
  expectToBeNonNull,
  expectToBeNull,
  expectToBeUndefined,
} from "./index.js";

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
