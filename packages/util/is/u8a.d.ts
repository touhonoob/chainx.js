/**
 * @name isU8a
 * @summary Tests for a `Uint8Array` object instance.
 * @description
 * Checks to see if the input object is an instance of `Uint8Array`.
 * @example
 * <BR>
 *
 * ```javascript
 * import { isUint8Array } from '@chainx/util';
 *
 * console.log('isU8a', isU8a([])); // => false
 * ```
 */
export default function isU8a(value?: any): value is Uint8Array;
