/// <reference types="node" />
/**
 * @name xxhashAsHex
 * @summary Creates a xxhash64 hex from the input.
 * @description
 * From either a `string`, `Uint8Array` or a `Buffer` input, create the xxhash64 and return the result as a hex string with the specified `bitLength`.
 * @example
 * <BR>
 *
 * ```javascript
 * import { xxhashAsHex } from '@chainx/util-crypto';
 *
 * xxhashAsHex('abc'); // => 0x44bc2cf5ad770999
 * ```
 */
export default function xxhashAsHex(data: Buffer | Uint8Array | string, bitLength?: number): string;
