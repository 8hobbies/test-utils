/** @license Apache-2.0
 *
 * Copyright 2024 Hong Xu <hong@8hobbies.com>
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
