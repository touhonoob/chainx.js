/**
 * @name randomAsU8a
 * @summary Creates a Uint8Array filled with random bytes.
 * @description
 * Returns a `Uint8Array` with the specified (optional) length filled with random bytes.
 * @example
 * <BR>
 *
 * ```javascript
 * import { randomAsU8a } from '@chainx/util-crypto';
 *
 * randomAsU8a(); // => Uint8Array([...])
 * ```
 */
export default function randomAsU8a(length?: number): Uint8Array;
