/// <reference types="node" />
/**
 * @name keccakAsHex
 * @summary Creates a keccak hex string from the input.
 * @description
 * From either a `string` or a `Buffer` input, create the keccak and return the result as a `0x` prefixed hex string.
 * @example
 * <BR>
 *
 * ```javascript
 * import { keccakAsHex } from '@chainx/util-crypto';
 *
 * keccakAsHex('123'); // => 0x...
 * ```
 */
export default function keccakAsHex(value: Buffer | Uint8Array | string): string;
