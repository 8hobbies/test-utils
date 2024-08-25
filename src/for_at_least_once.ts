/**
 * Utilities that replaces `for` in a test to guarantee at least one iteration.
 *
 * Often, we have assertions in test inside for-loops. However, the test may silently pass if the
 * for loop is not entered upon at all. For this reason, this module provides utilities to ensure
 * that the test fails if the for loop is not entered upon at all.
 *
 * @module for_at_least_once
 */

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

import { AssertionError } from "assert";

/**
 * Equivalent to calling `array.forEach(callback)`, while also asserting that the loop has been
 * entered upon at least once.
 *
 * @typeParam T - The type of `the element of `array`.
 * @param array - The array being looped over.
 * @param callbcak - The callback that is called in each iteration while iterating `array`.
 * @return `undefined`.
 * @assert `callback` is called at least once.
 *
 * @example
 * ```ts
 * const array = [1, 2, 3] as const;
 * forEachAtLeastOnce(array, (n) => {console.log(n)});
 * ```
 */
export function forEachAtLeastOnce<T>(
  array: readonly T[],
  callback: Parameters<ReadonlyArray<T>["forEach"]>[0],
): void;

/**
 * Similar to the other overload, except that `array` can be modified within the callback.
 */
export function forEachAtLeastOnce<T>(
  array: T[],
  callback: Parameters<Array<T>["forEach"]>[0],
): void;

export function forEachAtLeastOnce<T>(
  array: readonly T[] | T[],
  callback:
    | Parameters<ReadonlyArray<T>["forEach"]>[0]
    | Parameters<Array<T>["forEach"]>[0],
): void {
  if (array.length === 0) {
    throw new AssertionError({
      message: "Array forEach did not iterate at least once.",
    });
  }

  // Work around the failure to assign a readonly array to a mutable array.
  const mutableArray = array as Parameters<
    Parameters<Array<T>["forEach"]>[0]
  >[2];
  mutableArray.forEach(callback);
}
