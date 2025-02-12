/// <reference types="node" />
/**
 * @name keccakAsU8a
 * @summary Creates a keccak Uint8Array from the input.
 * @description
 * From either a `string` or a `Buffer` input, create the keccak and return the result as a `Uint8Array`.
 * @example
 * <BR>
 *
 * ```javascript
 * import { keccakAsU8a } from '@chainx/util-crypto';
 *
 * keccakAsU8a('123'); // => Uint8Array
 * ```
 */
export default function keccakAsU8a(value: Buffer | Uint8Array | string): Uint8Array;
