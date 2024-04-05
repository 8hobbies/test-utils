/**
 * Utilities that wrap some assertions in {@link vitest!expect} with type assertions.
 *
 * One nuance with some of the {@link vitest!expect} functions are the lack of type assertions.
 * @example
 * ```ts
 * const iAmDefined: number | undefined = Math.random() < 1 ? 10 : undefined;
 * expect(iAmDefined).toBeDefined();
 * expect(iAmDefined + 1).toBe(11);
 *     // ^ 'iAmDefined' is possibly 'undefined'.
 * ```
 * This is annoying as either a verbose`if`-clause is needed to inform the TypeScript compiler that
 * `iAmDefined` is not undefined, or an unsafe type assertion`!` is needed. Similar problems exist
 * for `null`.
 *
 * This module solves this family of problems with {@link expectToBeDefined}.Simply replace
 * `expect(iAmDefined).toBeDefined()` with `expectToBeDefined(iAmDefined)`, and the above error is
 * gone.
 *
 * @module expect
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

import { expect } from "vitest";

/**
 * Equivalent to calling `vitest.expect(arg).toBeDefined()` while also asserting `arg` to be
 * defined.
 *
 * @typeParam T - The type of `arg`.
 * @param arg - The variable to be asserted.
 * @return `undefined`.
 * @assert `arg` is not undefined.
 *
 * @example
 * ```ts
 * const iAmDefined: number | undefined = Math.random() < 1 ? 10 : undefined;
 * expectToBeDefined(iAmDefined);
 * expect(iAmDefined + 1).toBe(11);
 * ```
 */
export function expectToBeDefined<T>(
  arg: T,
): asserts arg is Exclude<T, undefined> {
  expect(arg).toBeDefined();
}

/**
 * Equivalent to calling `vitest.expect(arg).toBeUndefined()` while also asserting `arg` to be
 * undefined.
 *
 * @param arg - The variable to be asserted.
 * @return `undefined`.
 * @assert `arg` is undefined.
 *
 * @example
 * ```ts
 * const iAmUndefined: number | undefined = Math.random() >= 0 ? 10 : undefined;
 * expectToBeUndefined(iAmUndefined);
 * expect(iAmUndefined + 1).toBe(11);
 *     // ^ 'iAmUndefined' is possibly 'undefined'.
 * ```
 */
export function expectToBeUndefined(arg: unknown): asserts arg is undefined {
  expect(arg).toBeUndefined();
}

/**
 * Equivalent to calling `vitest.expect(arg).not.toBeNull()` while also asserting `arg` to non-null.
 *
 * @typeParam T - The type of `arg`.
 * @param arg - The variable to be asserted.
 * @return `undefined`.
 * @assert `arg` is not null.
 *
 * @example
 * ```ts
 * const iAmNotNull: number | null = Math.random() < 1 ? 10 : null;
 * expectToBeDefined(iAmNotNull);
 * expect(iAmNotNull + 1).toBe(11);
 * ```
 */
export function expectToBeNonNull<T>(arg: T): asserts arg is Exclude<T, null> {
  expect(arg).not.toBeNull();
}

/**
 * Equivalent to calling `vitest.expect(arg).toBeNull()` while also asserting `arg` to be null.
 *
 * @param arg - The variable to be asserted.
 * @return `undefined`.
 * @assert `arg` is null.
 *
 * @example
 * ```ts
 * const iAmNull: number | null = Math.random() >= 0 ? 10 : null;
 * expectToBeUndefined(iAmNull);
 * expect(iAmNull + 1).toBe(11);
 *     // ^ 'iAmNull' is possibly 'null'.
 * ```
 */
export function expectToBeNull(arg: unknown): asserts arg is null {
  expect(arg).toBeNull();
}

/**
 * Equivalent to calling `vitest.expect(arg).toBe(expected)` while also asserting `arg` to be
 * the type of `expected`.
 *
 * @typeParam T - The type of `arg`.
 * @param arg - The variable to be asserted.
 * @param expected - The expected value.
 * @return `undefined`.
 * @assert `arg` is `T`.
 *
 * @example Basic
 * ```ts
 * const iAmTen: number | null = Math.random() >= 0 ? 10 : Math.random();
 * expectToBe(iAmTen, 10);
 * // iAmTen is of type 10.
 * ```
 *
 * @example A more practically meaningful scenario
 * ```ts
 * const inputs = [10, 100] as const;
 * const expectedResults = [10, 100] as const;
 * inputs.forEach((input, index) => {
 *   const result = Math.random() >= 0 ? input : Math.random();
 *   expectToBe(result, expectedResults[index]);
 *   // result is of type 10 | 100.
 * });
 * ```
 */
export function expectToBe<T>(arg: unknown, expected: T): asserts arg is T {
  expect(arg).toBe(expected);
}

/**
 * Equivalent to calling `vitest.expect(arg).toEqual(expected)` while also asserting `arg` to be
 * the type of `expected`.
 *
 * @typeParam T - The type of `arg`.
 * @param arg - The variable to be asserted.
 * @param expected - The expected value.
 * @return `undefined`.
 * @assert `arg` is `T`.
 *
 * @example Basic
 * ```ts
 * const parsed = JSON.parse('{"key": "val"}')
 * expectToEqual(parsed, {key: "val"} as const);
 * // parsed is of type {readonly key: "val"}.
 * ```
 *
 * @example A more practically meaningful scenario
 * ```ts
 * const inputs = ['{"key1": "val1"}', '{"key2": "val2"}'];
 * const expectedResults = [{ key1: "val1" }, { key2: "val2" }] as const;
 * inputs.forEach((input, index) => {
 *   const parsed = JSON.parse(input);
 *   expectToEqual(parsed, expectedResults[index]);
 *   // parsed is of type { readonly key1: "val1"; } | { readonly key2: "val2"; }
 * });
 * ```
 */
export function expectToEqual<T>(arg: unknown, expected: T): asserts arg is T {
  expect(arg).toEqual(expected);
}
